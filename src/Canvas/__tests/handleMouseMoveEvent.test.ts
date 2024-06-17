import { setupJestCanvasMock } from 'jest-canvas-mock';

import { handleMouseMoveEvent } from '../UseCanvasSetup';

describe('Canvas/handleMouseMoveEvent test function', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    setupJestCanvasMock();
  });

  test('should handle mouse move event correctly', () => {
    const canvasMock: HTMLCanvasElement = document.createElement('canvas');
    const ctxMock: CanvasRenderingContext2D | null = canvasMock.getContext('2d');
    const magnifierCanvasMock: HTMLCanvasElement = document.createElement('canvas');
    const magnifierCtxMock: CanvasRenderingContext2D | null = magnifierCanvasMock.getContext('2d');
    canvasMock.width = 200;
    canvasMock.height = 200;
    magnifierCanvasMock.width = 100;
    magnifierCanvasMock.height = 100;
    

    // Mock other dependencies
    const dropperCursorRefMock = { current: true };
    const setColorMock = jest.fn();
    const setPickerCircleStyleMock = jest.fn();
    const setPickerHexCodeStyleMock = jest.fn();

    if (!ctxMock || !magnifierCtxMock) {
      throw new Error('ctxMock is undefined');
    }

    // Create a mock mouse event
    const mockMouseEvent = {
      clientX: 50,
      clientY: 50,
    } as MouseEvent;

    handleMouseMoveEvent({
      e: mockMouseEvent,
      canvas: canvasMock,
      ctx: ctxMock,
      magnifierCanvas: magnifierCanvasMock,
      magnifierCtx: magnifierCtxMock,
      dropperCursorRef: dropperCursorRefMock,
      setColor: setColorMock,
      setPickerCircleStyle: setPickerCircleStyleMock,
      setPickerHexCodeStyle: setPickerHexCodeStyleMock,
    });

    expect(ctxMock?.getImageData).toHaveBeenCalledWith(50, 50, 1, 1);
    expect(setColorMock).toHaveBeenCalled();
    expect(setPickerHexCodeStyleMock).toHaveBeenCalled();
  });
});
