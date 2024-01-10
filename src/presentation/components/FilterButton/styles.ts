import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => theme.styles.center};
  height: 48px;
  width: 48px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
