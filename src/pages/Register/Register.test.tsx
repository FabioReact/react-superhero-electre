import { fireEvent, render, screen } from '@testing-library/react'
import Register from './Register'

describe('Register Page', () => {
  test('should have a form with input type email and input type password', () => {
    render(<Register />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    const emailInput = screen.getByLabelText<HTMLInputElement>('Email')
    expect(emailInput.type).toBe('email')
    const passwordInput = screen.getByLabelText<HTMLInputElement>('Password')
    expect(passwordInput.type).toBe('password')
  })

  test('should not have any error on first render', () => {
    render(<Register />)
    const errorEmail = screen.queryByTestId('email-error')
    expect(errorEmail).not.toBeInTheDocument()
    const errorPassword = screen.queryByTestId('password-error')
    expect(errorPassword).not.toBeInTheDocument()
  })

  test('should have an error if inputs are empty', async () => {
    render(<Register />)
    const button = screen.getByText('SignUp')
    fireEvent.click(button)
    const errorEmail = await screen.findByTestId('email-error')
    expect(errorEmail.textContent).toBe('Some error')
    const errorPassword = await screen.findByTestId('password-error')
    expect(errorPassword.textContent).toBe('Some error')
  })
})
