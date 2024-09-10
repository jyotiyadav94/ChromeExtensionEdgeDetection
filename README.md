# Webcam and Microphone Access Extension

## Overview

The "Webcam and Microphone Access" Chrome extension allows users to access their webcam and microphone directly from the browser. It provides a simple user interface for toggling between the live video feed and an edge-detected version of the feed. The extension is useful for applications requiring real-time video processing and analysis.

## Features

- Access the webcam and microphone.
- Toggle between normal video feed and edge-detected view.
- Display edge detection results directly on top of the live video feed.

## Installation

1. **Clone or Download the Repository:**

   ```bash
   git clone https://github.com/your-username/webcam-microphone-extension.git
   cd webcam-microphone-extension


## Webcam and Microphone Access Extension

## Installation

### Load the Extension into Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on the "Load unpacked" button.
4. Select the extension directory (`webcam-microphone-extension`).

### Grant Permissions

When the extension is installed, it will prompt you to grant access to your webcam and microphone. Accept the permissions to use the extension.

## Usage

### Accessing the Extension

- Click on the extension icon in the Chrome toolbar.
- A popup window will appear with a live video feed from your webcam.

### Toggling Edge Detection

- Click the "Features" button to toggle edge detection on or off.
- When edge detection is active, the video feed will be overlaid with an edge-detected image.
- Click the "Features" button again to return to the normal video feed.

### Additional Functionality

- The "mGAS" button is a placeholder for additional features or functionalities you might want to implement.

## Files

- **`manifest.json`**: Defines the extension's metadata and permissions.
- **`background.js`**: Handles background tasks and state management.
- **`popup.html`**: Defines the HTML structure of the popup window.
- **`popup.js`**: Contains JavaScript to manage the video feed and apply edge detection.
- **`welcome.html`**: Provides a welcome page for permission prompts.
- **`welcome.js`**: Handles user media permissions and redirects to the popup.

## Edge Detection

The edge detection is implemented using a simple Sobel operator applied to the video feed. This can be customized or replaced with more sophisticated algorithms based on your needs.

## Development

To contribute to the project or make changes, follow these steps:

1. **Fork the Repository:**

   - Click the "Fork" button on the GitHub repository page.

2. **Create a New Branch:**

   - Create a new branch for your changes:
     ```bash
     git checkout -b feature-branch
     ```

3. **Make Your Changes:**

   - Edit the files as needed.

4. **Commit and Push:**

   - Commit your changes and push them to your forked repository:
     ```bash
     git add .
     git commit -m "Describe your changes"
     git push origin feature-branch
     ```

5. **Create a Pull Request:**

   - Open a pull request on the original repository to merge your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the GitHub repository or contact [jojoyadav255@gmail.com](mailto:jojoyadav255@gmail.com).
