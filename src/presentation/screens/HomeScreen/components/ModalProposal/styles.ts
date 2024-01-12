import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  background-color: #fff;
  height: 40%;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;

export const InfoContent = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  ${({ theme }) => theme.styles.row}
  padding: 8px 0;
`;

export const Label = styled.Text`
  margin-right: 6px;
  font-weight: 500;
`;

export const Value = styled.Text``;
