import React from 'react';
import { render } from '@testing-library/react';

import PickerCircle from '../PickerCircle';
import { PickerStyleType } from '../types';

interface MockPropsType {
  color: string;
  pickerHexCodeStyle: PickerStyleType;
  pickerCircleStyle: PickerStyleType;
}

describe('Canvas/PickerCircle Component', () => {
  const mockProps: MockPropsType = {
    color: '#FF5733',
    pickerHexCodeStyle: {
      display: 'block',
      left: 10,
      top: 10,
      width: 30,
      height: 10
    },
    pickerCircleStyle: {
      display: 'block',
      left: 10,
      top: 10,
      width: 100,
      height: 100
    },
  };

  test('should render without crashing', () => {
    render(<PickerCircle {...mockProps} />);
  });

  test('should display the correct color hex code', () => {
    const { getByText } = render(<PickerCircle {...mockProps} />);
    const hexCodeElement = getByText('#FF5733');
    expect(hexCodeElement).toBeInTheDocument();
  });

  test('should apply correct styles to the SVG circle', () => {
    const { getByTestId } = render(<PickerCircle {...mockProps} />);
    const svgCircle = getByTestId('picker-circle-svg');
    expect(svgCircle).toHaveStyle('display: block');
  });
});