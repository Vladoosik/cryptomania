import { ReactElement } from "react";

export interface ButtonProps {
  testID?: string;
  title: string;
  loading?: boolean;
  disabled?: boolean;
  danger?: boolean;
  fullWidth?: boolean;
  bottomIndent?: boolean;
  topIndent?: boolean;
  rightIndent?: boolean;
  outline?: boolean;
  secondary?: boolean;
  size?: "big";
  width?: number | string;
  paddingHorizontal?: number;
  icon?: ReactElement;
  onPress(): void;
  buttonWidth?: number | any;
  setButtonWidth?: number | any;
  styles?: any;
  activeOpacity?: number;
}
