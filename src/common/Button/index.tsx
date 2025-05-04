import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, ...rest }: ButtonProps) => (
  <StyledButton color={color} {...rest}>
    {children}
  </StyledButton>
);
