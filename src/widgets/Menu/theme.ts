import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  topBackground: lightColors.card,
  background: lightColors.card,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  topBackground: darkColors.card,
  background: darkColors.card,
  hover: "#473d5d",
};
