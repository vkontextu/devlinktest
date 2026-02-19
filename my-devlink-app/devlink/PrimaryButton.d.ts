import * as React from "react";
import * as Types from "./types";

declare function PrimaryButton(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  runtimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
