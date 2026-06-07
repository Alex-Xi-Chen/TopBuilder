# TopBuilder

TopBuilder is a bilingual contractor marketplace prototype for homeowners and renovation professionals.

Live site: https://topbuilderhome.com/

## Features

- English and Chinese language toggle
- Contractor search and filtering
- Contractor profile pages
- Real homeowner sign up, email/password login, Google login, password reset, and profile storage with Firebase
- Saved contractor/account area
- Contractor onboarding form
- Professional project imagery and TopBuilder branding
- Responsive desktop and mobile layout

## Local Development

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

## Firebase Authentication Setup

The web app uses Firebase Auth for real user accounts.

Current Firebase project: `topbuilder-home`

Enabled providers:

- Email/Password
- Google

Authorized domains:

- `localhost`
- `topbuilderhome.com`
- `www.topbuilderhome.com`

`firebase-config.js` contains the public Firebase web app config. `firestore.rules` contains the intended user-profile rule set, allowing each signed-in user to read and write only their own document at `users/{uid}`.

## Deployment

This app is published with GitHub Pages from the `main` branch and the GitHub Pages workflow.

Repository: https://github.com/Alex-Xi-Chen/TopBuilder
