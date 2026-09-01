# CoLink — Capacitor Mobile App Setup Guide

This guide explains every step to turn the CoLink Vite/React frontend into a
native **Android** or **iOS** application using Capacitor.

---

## Prerequisites

| Tool | Version | How to install |
|------|---------|---------------|
| Node.js | 18 + | https://nodejs.org |
| npm | 9 + | Included with Node |
| Android Studio | Latest | https://developer.android.com/studio |
| Xcode (iOS, macOS only) | 15 + | Mac App Store |
| JDK | 17 + | https://adoptium.net |

---

## Step 1 — Install dependencies

```bash
npm install
```

This installs Capacitor core, the Android & iOS runtimes, and the native
plugins (`@capacitor/status-bar`, `@capacitor/keyboard`, `@capacitor/app`,
`@capacitor/haptics`) that are already wired up in `src/main.tsx`.

---

## Step 2 — Build the web app

Capacitor copies your **built** web files into the native project. Always run
a fresh build before syncing.

```bash
npm run build
```

Output goes to `dist/` (configured in `vite.config.ts` via `base: "./"` which
is required so asset paths work when loaded from the device file system).

---

## Step 3 — Add the native platforms

Run these once per machine / fresh clone:

```bash
# Android
npx cap add android

# iOS (macOS only)
npx cap add ios
```

This creates `android/` and `ios/` folders containing the native projects.

---

## Step 4 — Sync web assets into the native projects

```bash
npx cap sync
```

Or use the convenience scripts in `package.json`:

```bash
npm run build:android   # build + sync android
npm run build:ios       # build + sync ios
```

---

## Step 5 — Open & run in Android Studio / Xcode

```bash
# Opens Android Studio with the android/ project
npm run cap:android

# Opens Xcode with the ios/ project  (macOS only)
npm run cap:ios
```

Inside **Android Studio**:
1. Wait for Gradle sync to finish.
2. Select a device or emulator from the toolbar.
3. Click ▶ Run.

Inside **Xcode**:
1. Select a simulator or connected iPhone.
2. Press ⌘ R to build and run.

---

## Step 6 — Live reload during development (optional but recommended)

Find your machine's local IP (e.g. `192.168.1.42`) and edit
`capacitor.config.ts`:

```ts
server: {
  url: "http://192.168.1.42:5173",
  cleartext: true,
},
```

Then start Vite and sync:

```bash
npm run dev          # in one terminal
npx cap sync         # in another terminal
```

Now changes in `src/` reload instantly on the device without rebuilding.
**Remove the `server.url` block before creating a release build.**

---

## Building a release APK (Android)

1. In Android Studio → **Build → Generate Signed Bundle / APK**.
2. Choose **APK** (or **Android App Bundle** for Play Store).
3. Create or choose a keystore file and fill in credentials.
4. Select **release** build variant and click **Finish**.

The signed APK will be at:
`android/app/build/outputs/apk/release/app-release.apk`

---

## Building for iOS TestFlight / App Store

1. In Xcode → **Product → Archive**.
2. In the Organizer → **Distribute App → App Store Connect**.
3. Follow the wizard (requires an Apple Developer account).

---

## App ID

The bundle ID is set in `capacitor.config.ts`:

```ts
appId: "com.yourcompany.colink",
```

Change `com.yourcompany` to match your Apple Developer / Google Play
developer identity **before** running `npx cap add android/ios` for the
first time, because changing it afterward requires manual updates in
Android Studio and Xcode.

---

## Safe-area / notch support

CSS utility classes added in `src/index.css`:

| Class | Use on |
|-------|--------|
| `.safe-top` | Fixed headers, navigation bars |
| `.safe-bottom` | Fixed bottom tab bars, FABs |
| `.safe-all` | Full-screen wrappers |

---

## Useful Capacitor CLI commands

```bash
npx cap sync          # copy web build + update plugins
npx cap update        # update native Capacitor runtime
npx cap doctor        # check environment for problems
npx cap run android   # build + deploy to connected Android device
npx cap run ios       # build + deploy to connected iOS device (macOS)
```
