"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  // Your theme configuration here
});

export default function ThemeRegistry(
  { children }: { children: React.ReactNode },
) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
