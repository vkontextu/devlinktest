"use client";
import React from "react";
import { HeroSection } from "../../devlink/HeroSection";
import { PrimaryButton } from "../../devlink/PrimaryButton";

export default function Page() {
  return (
    <main style={{ padding: 40, display: "grid", gap: 24 }}>
      <HeroSection
        image="/"
        title="Test HeroSection"
        text="Toto je ukázkový text pro HeroSection."
        primaryButtonText="Learn more"
        primaryButtonLink={{ href: "#", target: "_self", preload: "none" }}
        buttonsSlot={
          <PrimaryButton text="Primary action" link={{ href: "#", target: "_self" }} />
        }
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <PrimaryButton text="Standalone Button" link={{ href: "#", target: "_self" }} />
      </div>
    </main>
  );
}
