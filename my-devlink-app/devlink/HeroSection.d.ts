import * as React from "react";
import * as Types from "./types";

declare function HeroSection(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  primaryButtonLink?: Types.Basic.Link;
  primaryButtonText?: React.ReactNode;
  buttonsSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
