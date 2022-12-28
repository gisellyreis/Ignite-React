import { ButtonVariant, Container } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
  return (
    <Container variant={variant}>Enviar</Container>
  )
}