import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// ---------------------------------------------------------------------------
// Capacitor native-plugin initialisation
// ---------------------------------------------------------------------------
// We import these lazily so the web bundle still works when Capacitor isn't
// present (e.g. when previewing on Vercel).  If the import fails (Capacitor
// not installed yet), we just skip setup gracefully.

async function initCapacitor() {
  try {
    const { StatusBar, Style } = await import("@capacitor/status-bar");
    const { Keyboard } = await import("@capacitor/keyboard");
    const { App: CapApp } = await import("@capacitor/app");

    // Style the status bar to match CoLink brand colours.
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: "#123c43" });

    // Handle Android hardware back-button: go back one hash step, or exit the
    // app if already on the home screen.
    CapApp.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        CapApp.exitApp();
      }
    });

    // Ensure the body resizes correctly when the soft keyboard opens on Android.
    Keyboard.addListener("keyboardWillShow", (info) => {
      document.body.style.paddingBottom = `${info.keyboardHeight}px`;
    });
    Keyboard.addListener("keyboardWillHide", () => {
      document.body.style.paddingBottom = "0px";
    });
  } catch {
    // Running in a browser / Vercel — Capacitor plugins are not available.
    // This is expected; no action needed.
  }
}

initCapacitor();

// ---------------------------------------------------------------------------
// React mount
// ---------------------------------------------------------------------------
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
