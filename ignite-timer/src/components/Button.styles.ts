import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'red',
  success: 'green'
}

export const Container = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`;