import styled from "styled-components/native";
import DropdownSelect from "react-native-input-select";

export const Wrapper = styled.View<{ half?: boolean }>`
  width: ${({ half }) => (half ? "48%" : "100%")};
  margin-bottom: 16px;
`;

export const Dropdown = styled(DropdownSelect).attrs(({ theme }) => ({
  dropdownStyle: {
    height: 50,
    marginBottom: -30,
    borderRadius: 5,
    borderColor: theme.colors.border,
    borderWidth: 1,
    width: "100%",
  },
  dropdownIconStyle: {
    marginTop: -5,
  },
  searchInputStyle: {
    height: 50,
    borderColor: theme.colors.border,
  },
  dropdownErrorStyle: {
    marginBottom: 0,
  },
  dropdownErrorTextStyle: {
    marginBottom: 0,
    color: theme.colors.danger,
  },
}))``;

export const Label = styled.Text`
  font-size: 12px;
  color: #000;
  margin-bottom: 5px;
`;
