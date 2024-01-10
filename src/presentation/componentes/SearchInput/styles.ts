import styled from "styled-components/native";

export const Wrapper = styled.View`
  ${(props) => props.theme.styles.row}
  height: 50px;
  border-radius: 5px;
  padding-left: 4px;
  border: 1px solid #ccc;
  background-color: #eee;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
`;

export const IconWrapper = styled.View`
  padding: 0 10px;
  border-right-width: 1px;
  border-right-color: #ccc;
`;
