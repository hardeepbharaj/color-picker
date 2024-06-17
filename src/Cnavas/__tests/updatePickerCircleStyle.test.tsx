import updatePickerCircleAndHexStyle from '../updatePickerCircleAndHexStyle';

interface MockRectType {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface MockMouseEventType {
  clientX: number;
  clientY: number;
}

describe('Canvas/updatePickerCircleStyle and updatePickerHexcodeStyle test functions', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should update picker circle and hex code styles correctly for default pickerCircleSize', () => {
    const mockSetPickerCircleStyle = jest.fn();
    const mockSetPickerHexCodeStyle = jest.fn();

    const mockRect: MockRectType = {
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      top: 0,
      right: 800,
      bottom: 600,
      left: 0,
    };
    const pickerCircleSize: number = 100;
    const mockMouseEvent: MockMouseEventType = {
      clientX: 100,
      clientY: 150,
    };

    updatePickerCircleAndHexStyle(mockMouseEvent as MouseEvent, mockRect as DOMRect, mockSetPickerCircleStyle, mockSetPickerHexCodeStyle);

    const pickerCircleLeft: number = mockMouseEvent.clientX - pickerCircleSize / 2.1;
    const pickerCircleTop: number = (mockMouseEvent.clientY - pickerCircleSize / 2.7) - mockRect.top;

    // Assertions for updatePickerCircleStyle
    expect(mockSetPickerCircleStyle).toHaveBeenCalledWith({
      display: 'block',
      left: pickerCircleLeft,
      top: pickerCircleTop,
      width: pickerCircleSize,
      height: pickerCircleSize,
    });

    // Extract expected hexLeft and hexTop values based on the same calculations
    const hexWidth: number = 40;
    const hexHeight: number = 15;
    const expectedHexLeft: number = pickerCircleLeft + pickerCircleSize / 2 - hexWidth / 2;
    const expectedHexTop: number = pickerCircleTop + pickerCircleSize - 30;

    // Assertions for updatePickerHexcodeStyle
    expect(mockSetPickerHexCodeStyle).toHaveBeenCalledWith({
      display: 'block',
      left: expectedHexLeft,
      top: expectedHexTop,
      width: hexWidth,
      height: hexHeight,
      lineHeight: `${hexHeight}px`,
    });
  });
});