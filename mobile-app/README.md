# TopBuilder Mobile

This is an isolated Expo React Native app for TopBuilder. It lives under `mobile-app/` so it does not change or depend on the published web app source files.

## Run locally

```bash
cd mobile-app
npm install
npm run start
```

Open the app with Expo Go, or press `i` in the Expo terminal to launch an iOS simulator on macOS.

## App Store path

Current app identifiers:

- App name: `TopBuilder`
- Bundle ID: `com.topbuilderhome.app`
- SKU: `topbuilderhome-ios-001`
- Version: `1.0.0`

Before final submission:

1. Log in to Expo/EAS with your Expo account.
2. Create the iOS app record in App Store Connect using the bundle ID above.
3. Fix the custom-domain HTTPS certificate so `https://topbuilderhome.com/#privacy` is valid.
4. Fill App Store Connect metadata using `app-store-metadata.md`.
5. Run:

```bash
npx eas login
npx eas init
npx eas build --platform ios --profile production
npx eas submit --platform ios --profile production
```

Apple review still requires App Store metadata, screenshots, a privacy policy URL, and account/legal information.

If you prefer App Store Connect API key submission, create an API key in App Store Connect and follow the EAS prompts during `eas submit`.
