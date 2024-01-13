import React from "react";
import { ViewStyle } from "react-native";

import { useTheme } from "styled-components/native";

import * as S from "./styles";
import { ToastType } from "./toastTypes";

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export function ToastContent({ toast }: { toast: ToastType }) {
  const { colors } = useTheme();
  const position: ToastType["position"] = toast?.position || "top";

  return (
    <S.ToastContainer
      toastType={toast?.type}
      style={[
        {
          [position]: 100,
        },
        $shadowProps,
      ]}
    >
      <S.Text textColor={toast?.type ? colors[toast?.type] : "black"}>
        {toast?.message}
      </S.Text>
    </S.ToastContainer>
  );
}
