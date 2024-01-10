import styled from "styled-components/native";

export const Container = styled.View``;

export const InputWrapper = styled.View`
  ${(props) => props.theme.styles.row}
  justify-content: space-between;
`;

export const ScreenTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
