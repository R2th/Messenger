# Messages

A full-feature messenger clone built with React and Firebase

## Live demo

Official Website: [https://Messages.pages.dev](https://Messages.pages.dev)

## Main technology used

- react, typescript, tailwind
- firebase (auth, firestore, storage)
- zustand
- emoji-mart

## Features

- Sign in with Google, Facebook
- Create conversations (personally, group)
- Allow sending
  - Text
  - Image
  - File
  - Stickers (from zalo)
  - Gif (from giph
  - Emoji (emoji-mart)
- Show if user has seen message
- Drop file to upload
- Paste image from clipboard
- Send reactions to message (like, love, care, haha, wow, sad, angry)
- Unsent message
- Reply message
- Change conversation settings
  - Change group theme, image
  - Change theme
- View conversation images, files
- Detect link an add an anchor to it

## Installation

- Clone the project
- Run `npm install`
- Create your own firebase project
  - Enable auth (google, facebook)
  - Enable cloud firestore
  - Enable firebase storage
- Create your own giphy developer account
- Example .env file:

```env
VITE_FIREBASE_CONFIG={"apiKey":"","authDomain":"","projectId":"","storageBucket":"","messagingSenderId":"","appId":""}
VITE_GIPHY_API_KEY=your_api_key
```

## Previews

![Preview 1](https://res.cloudinary.com/naptest/image/upload/v1644039987/Messages/preview-1_yujhpl.png)
![Preview 2](https://res.cloudinary.com/naptest/image/upload/v1644039987/Messages/preview-2_qlxjjf.png)
![Preview 3](https://res.cloudinary.com/naptest/image/upload/v1644039986/Messages/preview-3_tgqahb.png)

## Summary

👉 If you like this project, give it a star ✨ and share 👨🏻‍💻 it to your friends 👈
