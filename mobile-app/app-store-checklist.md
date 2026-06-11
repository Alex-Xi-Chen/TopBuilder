# TopBuilder App Store Submission Checklist

## Completed Locally

- Node.js LTS installed.
- `npm`, `npx`, and `eas` are available.
- Mobile dependencies installed.
- Expo Doctor passes: `21/21 checks passed`.
- iOS export compile passes: `npx expo export --platform ios --output-dir dist-ios-check`.
- App version set to `1.0.0`.
- iOS bundle ID set to `com.topbuilderhome.app`.
- Android package set to `com.topbuilderhome.app`.
- Apple Developer Bundle ID registered: `com.topbuilderhome.app`.
- App Store Connect app record created: `TopBuilder Home`, Apple ID `6777310669`.
- App Store Connect API access enabled.
- EAS project linked: `@xialexchen/topbuilder-mobile`.
- Apple distribution certificate created, serial `782A7360D7396AB62A0CBAF8FC34D528`.
- Apple provisioning profile created, Developer Portal ID `U62N3WHX8Q`.
- iOS production build completed: `1.0.0 (2)`, EAS build `166cbe88-b041-4b2a-9cb6-28ce74446f62`.
- iOS binary uploaded to App Store Connect; Apple finished processing build `1.0.0 (2)`.
- App Review submitted on June 6, 2026 at 10:28 AM. Current status: `Waiting for Review`.
- EAS fake placeholder IDs removed.
- App Store metadata drafted in `app-store-metadata.md`.
- Production dependency audit has no high-severity failure; current warnings are moderate Expo transitive dependency advisories.

## Remaining Before Public Release

The review package has been submitted. The app is not public yet; Apple must review and approve it first.

1. Watch App Store Connect status for `Waiting for Review`, `In Review`, `Pending Developer Release`, `Ready for Distribution`, or rejection notes.
2. Watch the Apple ID email inbox and App Store Connect Resolution Center for reviewer messages.
3. If approved with manual release selected, release the approved version from App Store Connect.

## Automation Blocker

The local App Store Connect API key tuple in `eas.json` currently returns `401 Unauthorized` for App Store Connect metadata/API calls, and EAS Metadata cannot find a fallback API key in the EAS credentials service.

The Chrome file picker for screenshot upload opens, but the Windows automation layer cannot target the native file picker child window reliably. Upload the files manually from:

- `app-store-screenshots/iphone-65-1.png`
- `app-store-screenshots/iphone-65-2.png`
- `app-store-screenshots/iphone-65-3.png`
- `app-store-screenshots/ipad-129-1.png`
- `app-store-screenshots/ipad-129-2.png`
- `app-store-screenshots/ipad-129-3.png`

## HTTPS Privacy URL

`https://topbuilderhome.com/#privacy` works and validates successfully.

- GitHub Pages custom domain: `topbuilderhome.com`
- Cloudflare DNS:
  - Apex `A` records to GitHub Pages:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
  - `www` as `CNAME` to `alex-xi-chen.github.io`

## Screenshots Needed

App Store Connect requires iPhone screenshots. Capture from the real Expo build or simulator after EAS/dev build is available. Recommended screens:

- Home
- Search results
- Contractor profile
- Community article
- Account/resources
