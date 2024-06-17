import React from 'react';
import { render, act } from '@testing-library/react';

import Toast from './index';

jest.useFakeTimers(); // Mock timers for setTimeout

describe('Component/Toast component', () => {

  test('should render Toast component with message', () => {
    const message: string = 'Copied!';
    const onClose = jest.fn();
  
    const { getByText } = render(<Toast message={message} onClose={onClose} />);
  
    expect(getByText(message)).toBeInTheDocument();
  });

  test('should close Toast after 2 seconds', () => {
    const message: string = 'Copied!';
    const onClose = jest.fn();
  
    render(<Toast message={message} onClose={onClose} />);
  
    act(() => {
      jest.advanceTimersByTime(2000); // Fast-forward timers by 2 seconds
    });
  
    expect(onClose).toHaveBeenCalledTimes(1);
  });

});