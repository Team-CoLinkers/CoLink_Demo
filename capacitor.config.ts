import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  // Must be a unique reverse-domain identifier for your app.
  // Change "com.yourcompany" to your actual company/team identifier.
  appId: "com.yourcompany.colink",
  appName: "CoLink",
  // Vite builds into "dist" by default — Capacitor copies this into the native projects.
  webDir: "dist",
  server: {
    // During development on a device, point to your local Vite dev server so
    // you get hot-reload. Comment this out for production builds.
    // url: "http://192.168.1.X:5173",
    // cleartext: true,
  },
  android: {
    // Allows the WebView to load http:// URLs during development.
    // Set to false before releasing to the Play Store.
    allowMixedContent: true,
  },
  plugins: {
    StatusBar: {
      // Match CoLink's primary teal colour.
      backgroundColor: "#123c43",
      style: "DARK",
      overlaysWebView: false,
    },
    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#123c43",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
    },
  },
};

export default config;
