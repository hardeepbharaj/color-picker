import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ColorPickerBtn from '../ColorPickerBtn';

describe('header/ColorPickerBtn component', () => {
  test('should render ColorPickerBtn component', () => {
    render(<ColorPickerBtn dropperCursor={false} onclick={() => {}} />);

    const colorPickerBtn = screen.getByTestId('color-picker-btn');
    expect(colorPickerBtn).toHaveClass('color-picker-btn');
  });

  test('should have class when dropperCursor is true', () => {
    render(<ColorPickerBtn dropperCursor={true} onclick={() => {}} />);

    const colorPickerBtn = screen.getByTestId('color-picker-btn');
    expect(colorPickerBtn).toHaveClass('color-picker-btn-selected');
  });

  test('should call onclick handler of ColorPickerBtn when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<ColorPickerBtn dropperCursor={false} onclick={onClickMock} />);

    // Simulate a click event on the SVG element
    const svgElement = container.querySelector('svg');

    if (!svgElement) {
      throw new Error('SVG element not found');
    }

    fireEvent.click(svgElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
