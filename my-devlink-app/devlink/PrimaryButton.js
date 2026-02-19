"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PrimaryButton.module.css";

export function PrimaryButton({
  as: _Component = _Builtin.Link,

  link = {
    href: "#domu",
    target: "_blank",
    preload: "none",
  },

  text = "Get Started",
  runtimeProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-primary")}
      button={true}
      block=""
      options={link}
      {...runtimeProps}
    >
      {text}
    </_Component>
  );
}
