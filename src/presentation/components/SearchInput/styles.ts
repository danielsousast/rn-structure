import styled from "styled-components/native";

export const Wrapper = styled.View`
  ${(props) => props.theme.styles.row}
  height: 50px;
  border-radius: 5px;
  padding-left: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-right: 16px;
`;

export const IconWrapper = styled.View`
  padding: 0 10px;
`;
