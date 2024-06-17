import { initializeCanvas } from '../UseCanvasSetup';

describe('Canvas/initializeCanvas test function', () => {
  test('should initialize canvas and magnifierCanvas with correct dimensions', () => {
    const mockCanvas = {
      width: 0,
      height: 0,
    } as unknown as HTMLCanvasElement;
  
    const mockMagnifierCanvas = {
      width: 0,
      height: 0,
    } as unknown as HTMLCanvasElement;
  
    initializeCanvas(mockCanvas, mockMagnifierCanvas);

    expect(mockCanvas.width).toBe(700);
    expect(mockCanvas.height).toBe(500);
    expect(mockMagnifierCanvas.width).toBe(200);
    expect(mockMagnifierCanvas.height).toBe(200);
  });

});
