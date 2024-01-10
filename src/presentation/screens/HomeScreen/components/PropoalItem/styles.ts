import styled from "styled-components/native";

export const ItemContainer = styled.TouchableOpacity`
  ${(props) => props.theme.styles.row}
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const IconWrapper = styled.View`
  padding: 16px;
  border-radius: 6px;
  background-color: #ccc;
  ${(props) => props.theme.styles.center}
`;

export const ItemContent = styled.View`
  flex: 1;
  padding-left: 12px;
`;

export const ItemText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemLabel = styled.Text`
  color: #000;
  font-size: 14px;
`;
