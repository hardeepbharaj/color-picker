import 'jest-canvas-mock';

import drawMagnifiedImage from '../drawMagnifiedImage';

const magnifierCanvasId: string = 'magnifier-circle';

const mockCanvas: HTMLCanvasElement = document.createElement('canvas');
const mockMagnifierCanvas: HTMLCanvasElement = document.createElement('canvas');
const mockMagnifierCtx: CanvasRenderingContext2D | null  = mockMagnifierCanvas.getContext('2d')!;

// Mock document.getElementById function
jest.spyOn(document, 'getElementById').mockReturnValueOnce(document.createElement('svg'));

describe('Canvas/drawMagnifiedImage test function', () => {

  beforeEach(() => {
    // Clear mock canvas contexts before each test
    mockCanvas.width = 700;
    mockCanvas.height = 500;
    mockMagnifierCanvas.width = 200;
    mockMagnifierCanvas.height = 200;
    mockMagnifierCtx.clearRect(0, 0, mockMagnifierCanvas.width, mockMagnifierCanvas.height);
    jest.clearAllMocks();
  });

  test('should draw magnified image for x and y within canvas boundaries', () => {
    const x = 100;
    const y = 150;

    drawMagnifiedImage(x, y, mockCanvas, mockMagnifierCanvas, mockMagnifierCtx);

    expect(mockMagnifierCtx.drawImage).toHaveBeenCalledWith(
      mockCanvas,
      80, 130, 40, 40,
      0, 0, 200, 200
    );
    expect(mockMagnifierCanvas.toDataURL).toHaveBeenCalled();
    expect(document.getElementById).toHaveBeenCalledWith(magnifierCanvasId);
  });
});