import { render, screen, fireEvent } from '@testing-library/react';
import TypingTest from './TypingTest';

describe('TypingTest', () => {
  test('renders start button', () => {
    render(<TypingTest />);
    const startButton = screen.getByText(/start/i);
    expect(startButton).toBeInTheDocument();
  });

  test('typing input updates state', () => {
    render(<TypingTest />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('hello');
  });

  test('restart button resets state', () => {
    render(<TypingTest />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    const restartButton = screen.getByText(/restart/i);
    fireEvent.click(restartButton);
    expect(input.value).toBe('');
  });
});