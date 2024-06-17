import { renderHook } from '@testing-library/react';
import { setupJestCanvasMock } from 'jest-canvas-mock';

import useCanvasSetup from '../UseCanvasSetup'; // Import your hook implementation

describe('Canvas/useCanvasSetup test function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setupJestCanvasMock();
  });

  test('should initialize canvas and add event listeners', () => {
    const canvasRefMock = { current: document.createElement('canvas') };
    const imageMagnifierCanvasRefMock = { current: document.createElement('canvas') };
    const dropperCursorRefMock = { current: false };
    const mockSetColor = jest.fn();
    const mockSetPickerCircleStyle = jest.fn();
    const mockSetPickerHexCodeStyle = jest.fn();

    const spyEventListener = jest.spyOn(canvasRefMock.current, 'addEventListener');
    const spyRemoveEventListener = jest.spyOn(canvasRefMock.current, 'removeEventListener');

    renderHook(() =>
      useCanvasSetup({
        canvasRef: canvasRefMock,
        imageMagnifierCanvasRef: imageMagnifierCanvasRefMock,
        dropperCursorRef: dropperCursorRefMock,
        setColor: mockSetColor,
        setPickerCircleStyle: mockSetPickerCircleStyle,
        setPickerHexCodeStyle: mockSetPickerHexCodeStyle,
      })
    );

    // Assertions
    expect(spyEventListener).toHaveBeenCalled();

    // Clean up
    spyEventListener.mockRestore();
    spyRemoveEventListener.mockRestore();
  });
});
