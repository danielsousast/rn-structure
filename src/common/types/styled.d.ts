import "styled-components/native";
import { themeDark } from "../styles/theme";

type ThemeType = typeof themeDark;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
