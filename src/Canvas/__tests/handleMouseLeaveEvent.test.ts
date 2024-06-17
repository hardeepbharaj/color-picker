import handleMouseLeaveEvent from '../handleMouseLeaveEvent';
import { PickerStyleType } from '../types';

const mockSetPickerHexCodeStyle = jest.fn();
  const mockSetPickerCircleStyle = jest.fn();

  const DEFAULT_STYLE: PickerStyleType = {
    display: 'none',
  };

describe('Canvas/handleMouseLeaveEvent test function', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should reset picker styles to DEFAULT_STYLE on mouse leave', () => {
    handleMouseLeaveEvent(mockSetPickerHexCodeStyle, mockSetPickerCircleStyle);

    expect(mockSetPickerHexCodeStyle).toHaveBeenCalledWith(DEFAULT_STYLE);
    expect(mockSetPickerCircleStyle).toHaveBeenCalledWith(DEFAULT_STYLE);
  });
});
