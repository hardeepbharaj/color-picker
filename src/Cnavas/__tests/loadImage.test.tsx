import { loadImage } from '../UseCanvasSetup';

describe('Canvas/loadImage test function', () => {
  test('should load and draw the image on the canvas', () => {
    const mockContext = {
      drawImage: jest.fn(),
    } as unknown as CanvasRenderingContext2D;
  
    const mockCanvas = {
      width: 700,
      height: 500,
    } as unknown as HTMLCanvasElement;
  
    // Mock Image constructor and onload function
    class MockImage {
      src: string = process.env.PUBLIC_URL + '/images/photo.jpg';
      onload: (() => void) | null = null;
      constructor() {}
      simulateLoad() {
        if (this.onload) {
          this.onload();
        }
      }
    }

    const image = new MockImage();
    loadImage(mockContext, mockCanvas);

    image.simulateLoad();

    image.onload = () => {
      expect(mockContext.drawImage).toHaveBeenCalledWith(image, 0, 0, mockCanvas.width, mockCanvas.height);
    };
  });
});