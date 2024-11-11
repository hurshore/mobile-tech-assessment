# Onboarding Mobile Assessment

Implementation of an onboarding screen

## Description

This project is an implementation of an onboarding screen using React Native, Expo, and Typescript.

## Building the APK (Android)

You can download and test the app from the link below.

**[Download APK](https://drive.google.com/file/d/1NCWmz3J0WeU43fHYWjfg4NHE2IsdWpVe/view?usp=sharing)**

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).
- **Git**: You'll need Git installed to clone the repository. Download it from [Git official website](https://git-scm.com/).
- **Expo CLI**: Install Expo CLI globally if you haven't already:

  ```bash
  npm install -g expo-cli
  ```

### Installation

1.  **Clone the Repository**

    Open your terminal and run:

    `git clone https://github.com/yourusername/your-repo-name.git`

    Replace `yourusername` and `your-repo-name` with your GitHub username and repository name.

2.  **Navigate to the Project Directory**

    `cd your-repo-name`

3.  **Install Dependencies**

    `npm install`

### Running the App

You can run the app in several ways:

#### 1. Using Expo Start and Expo Go App (Recommended)

This is the easiest way to run and test the app on a physical device without setting up a native development environment.

- **Start the Expo development server**

  `npm start`

  or

  `expo start`

  This command will start the Expo development server and open the Expo Dev Tools in your browser.

- **Install Expo Go on Your Mobile Device**

  - **iOS**: Download [Expo Go](https://apps.apple.com/app/apple-store/id982107779) from the App Store.
  - **Android**: Download [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) from the Google Play Store.

- **Open the App in Expo Go**

  - **Android**: Scan the QR code displayed in the terminal or Expo Dev Tools using the Expo Go app.
  - **iOS**: Due to Apple's policies, you may need to log in to your Expo account in the Expo Go app to run the project. Alternatively, you can press `s` in the terminal to send a link to your email or use the Camera app to scan the QR code.

#### 2. Running on an Android Emulator or iOS Simulator

Make sure you have the necessary emulators or simulators installed and configured.

- **Android Emulator**

  `npm run android`

  This command will build the app and run it on the connected Android emulator.

- **iOS Simulator**

  `npm run ios`

  This command will build the app and run it on the iOS simulator (available only on macOS).
