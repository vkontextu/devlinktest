"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroSection.module.css";

export function HeroSection({
  as: _Component = _Builtin.Block,
  image = "",
  title = "Title copy goes here",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.",

  primaryButtonLink = {
    href: "#domu",
    target: "_blank",
    preload: "none",
  },

  primaryButtonText = "See informations",
  buttonsSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "hero-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "hero-split")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "shadow-two")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "hero-split")} tag="div">
        <_Builtin.Heading tag="h1">{title}</_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "margin-bottom-24px")}
        >
          {text}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "buttons-wrapper")}
          tag="div"
        >
          {buttonsSlot}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
