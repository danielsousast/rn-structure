import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 80px;
`;

export const Message = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
  text-align: center;
`;
