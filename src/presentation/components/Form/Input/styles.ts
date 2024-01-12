import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const HALF_WIDTH = SCREEN_WIDTH / 2 - 34;

interface WrapperProps {
  half?: boolean;
}

interface ContainerProps {
  mt: number;
  mb: number;
}

export const Container = styled.View<ContainerProps>`
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
`;

export const Wrapper = styled.View<WrapperProps>`
  ${(props) => props.theme.styles.row}
  min-height: 50px;
  border-radius: 5px;
  padding-left: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${(props) => (props.half ? HALF_WIDTH : undefined)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 14px;
`;
