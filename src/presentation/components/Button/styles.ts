import styled from "styled-components/native";

interface ButtonContainerProps {
  variant: "primary" | "secondary";
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.gray};
  padding: 12px 10px;
  border-radius: 6px;
  margin: 5px;
  align-items: center;
  max-height: 46px;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;
