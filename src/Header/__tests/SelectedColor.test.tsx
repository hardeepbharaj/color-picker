import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SelectedColor from '../SelectedColor';

describe('header/SelectedColor component', () => {
  test('should show pickedColor in the SelectedColor component', async () => {
    const pickedColor: string = '';
    render(<SelectedColor pickedColor={pickedColor} />);

    const colorPickerBtn = screen.queryByTestId('picked-color');

    expect(colorPickerBtn).not.toBeInTheDocument();
  });

  test('should show pickedColor in the SelectedColor component', async () => {
    const pickedColor: string = '#FF0000';
    render(<SelectedColor pickedColor={pickedColor} />);

    const colorPickerBtn = screen.getByText(pickedColor);

    expect(colorPickerBtn).toBeInTheDocument();
  });

  test('should show toast message on copy button click', async () => {
    const pickedColor: string = '#ff0000'; // Example pickedColor
    const { getByTestId, getByText } = render(<SelectedColor pickedColor={pickedColor} />);

    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    // Click the copy button
    const copyButton = getByTestId('copy-button');
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton);

    // Wait for the toast message to appear
    await waitFor(() => {
        expect(getByText('Copied!')).toBeInTheDocument();
    });

    // Check that navigator.clipboard.writeText was called with the correct pickedColor
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(pickedColor);
  });
});

