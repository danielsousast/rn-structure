import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => theme.styles.center}
  padding: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.danger};
`;
