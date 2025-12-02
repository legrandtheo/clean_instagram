# 🧹 Clean Instagram for iOS

An open-source iOS Userscript to reclaim your attention. This script modifies the Instagram mobile website on Safari to remove addictive features like Reels, the Explore grid, and adds a "Doom Scroll" limiter.

> **Note:** This solution uses **Safari Extensions**. You must uninstall the official Instagram app for this to be effective.

## ✨ Features
* 🚫 **Blocks Reels:** Hides the Reels tab and all Reel icons.
* 🙈 **Clean Explore Page:** Keeps the search bar functional but hides the "suggested posts" grid to prevent mindless browsing.
* 🛑 **Scroll Limiter:** Forces you to stop scrolling after a set amount of posts (customizable).
* 📵 **Distraction-Free:** Hides the "Stories" tray (optional) and "Install App" banners.

---

## 🚀 How to Install

### Step 1: Get the Tools
Download the **[Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)** extension (Free & Open Source) from the App Store.

### Step 2: Enable the Extension
Before opening the app, you must enable it in your iOS settings:
1.  Go to iPhone **Settings** > **Safari** > **Extensions**.
2.  Tap on **Userscripts**.
3.  Toggle it **ON**.
4.  Set "All Websites" to **Allow**.

### Step 3: Prepare the Script
1.  Download the `clean_instagram.js` file from this repository.
2.  Open the **Files** app on your iPhone.
3.  Create a folder (e.g., named "Instagram Scripts") in "On My iPhone" or iCloud.
4.  Move the `clean_instagram.js` file into that folder.

### Step 4: Link the App
1.  Open the **Userscripts** app.
2.  Tap **Set Userscripts Directory**.
3.  Select the folder you created in Step 3.
4.  You should now see "Clean Instagram" listed in the app.

### Step 5: Activate
1.  Open **Safari** and go to `instagram.com`.
2.  Tap the **"Aa"** or **Puzzle Piece 🧩** icon in the address bar.
3.  Tap **Userscripts**.
4.  Ensure the "Clean Instagram" script is checked (the JS logo should be yellow).

---

## 📱 Pro Tip: The "App" Experience
Since this script only works in Safari, we need to create a shortcut that **forces** Safari to open (ignoring Chrome/Firefox defaults) and looks like a real app.

1.  **Create a Bookmark:**
    * Open Safari and go to `instagram.com`.
    * Tap the **Share** button > **Add to Bookmarks**.
    * Name it "Instagram Clean" and Save.

2.  **Create the Shortcut:**
    * Open the **Shortcuts** app and tap **+**.
    * Tap **Add Action** and search for **"Open Bookmark"**.
    * *Important: Select the action with the Safari icon.*
    * Tap the blue "Bookmark" text and select the **"Instagram Clean"** bookmark you just made.

3.  **Add to Home Screen:**
    * Tap the arrow next to the shortcut name (top of screen).
    * Select **Add to Home Screen**.
    * Rename it "Instagram".
    * Tap the icon preview -> **Choose Photo** -> Select the Instagram logo (included in this repo).

**Now you have a distraction-free Instagram button that always opens correctly!**
