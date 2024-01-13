import { Dimensions } from "react-native";

import styled from "styled-components/native";

import { ToastType } from "./toastTypes";

const MAX_WIDTH = Dimensions.get("screen").width * 0.9;

const modifiers = {
  success: {
    backgroundColor: "#e6fffa",
    borderColor: "#7ED29E",
  },
  error: {
    backgroundColor: "#fddede",
    borderColor: "#f66969",
  },
  warning: {
    backgroundColor: "#fffbeb",
    borderColor: "#f2c94c",
  },
  info: {
    backgroundColor: "#ebf8ff",
    borderColor: "#63b3ed",
  },
};

export const ToastContainer = styled.View<{ toastType?: ToastType["type"] }>`
  border-width: 1px;
  border-color: #eee;
  ${({ toastType }) => modifiers[toastType || "success"]};
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  flex-direction: row;
  opacity: 0.97;
  max-width: ${MAX_WIDTH}px;
`;

export const Text = styled.Text<{ textColor: string }>`
  font-size: 14px;
  color: ${({ textColor }) => textColor};
  margin-left: 8px;
`;
