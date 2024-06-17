import React from 'react';
import { render } from '@testing-library/react';

import CopyButtonSVG from './index';

describe('CopyButtonSVG component', () => {
  test('should render SVG with correct attributes', () => {
    const { container } = render(<CopyButtonSVG />);

    // Assert the SVG element and its attributes
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '20px');
    expect(svgElement).toHaveAttribute('height', '20px');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
  });

  test('should render paths with correct stroke properties', () => {
    const { container } = render(<CopyButtonSVG />);

    // Assert the path elements
    const pathElements = container.querySelectorAll('path');
    expect(pathElements).toHaveLength(2);

    pathElements.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#fff');
      expect(path).toHaveAttribute('stroke-width', '1.5');
    });
  });
});