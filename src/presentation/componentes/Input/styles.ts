import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const HALF_WIDTH = SCREEN_WIDTH / 2 - 34;

interface WrapperProps {
  mt: number;
  mb: number;
  half?: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  ${(props) => props.theme.styles.row}
  min-height: 50px;
  border-radius: 5px;
  padding-left: 4px;
  border: 1px solid #ccc;
  background-color: #eee;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  width: ${(props) => (props.half ? HALF_WIDTH : undefined)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #000;
  margin-bottom: 5px;
`;
