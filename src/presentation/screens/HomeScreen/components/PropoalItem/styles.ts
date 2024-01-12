import styled, { css } from "styled-components/native";

interface ItemContainerProps {
  withBorder?: boolean;
}

export const ItemContainer = styled.TouchableOpacity<ItemContainerProps>`
  ${(props) => props.theme.styles.row}
  padding: 10px;
  padding-bottom: 16px;
  border-radius: 5px;
  margin: 5px;
  ${({ withBorder }) =>
    withBorder &&
    css`
      border-bottom-width: 0.7px;
      border-bottom-color: ${(props) => props.theme.colors.border};
    `}
`;

export const IconWrapper = styled.View`
  padding: 2px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.success};
  ${(props) => props.theme.styles.center}
  opacity: 0.7;
`;

export const ItemContent = styled.View`
  flex: 1;
  padding-left: 12px;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 16px;
`;

export const ItemLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;
