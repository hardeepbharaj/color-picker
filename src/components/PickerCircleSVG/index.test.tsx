import React from 'react';
import { render } from '@testing-library/react';
import PickerCircleSVG from './index';
import { PickerCircleSVGPropsType } from './types';

describe('PickerCircleSVG component', () => {
  const props: PickerCircleSVGPropsType = {
    color: '#ff0000',
    pickerCircleStyle: {
      display: 'block',
      position: 'absolute',
      left: '10px',
      top: '10px',
      width: '300px',
      height: '300px'
    },
  };

  test('should render with correct props', () => {
    const { getByTestId } = render(<PickerCircleSVG {...props} />);

    // Assert the rendered SVG element and its attributes
    const svgElement = getByTestId('picker-circle-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '300');
    expect(svgElement).toHaveAttribute('height', '300');

    const pathElement = getByTestId('picker-circle-svg-path');
    expect(pathElement).toHaveAttribute('fill', props.color);

    // Assert the style attribute of the SVG element
    expect(svgElement).toHaveStyle({...props.pickerCircleStyle});
  });
});
