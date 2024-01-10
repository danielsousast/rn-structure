import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  height: 100%;
  margin-bottom: 12px;
`;

export const SearContainer = styled.View`
  ${({ theme }) => theme.styles.row};
  gap: 12px;
  margin-bottom: 12px;
`;
