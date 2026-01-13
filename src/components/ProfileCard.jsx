import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ProfileCardContent from "./ProfileCardContent";

export default function ProfileCard() {
  return (
    <ThemeProvider>
      <ProfileCardContent />
    </ThemeProvider>
  );
}
