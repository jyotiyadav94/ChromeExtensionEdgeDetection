function setupCam() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(mediaStream => {
    const video = document.querySelector('#webcamVideo');
    video.srcObject = mediaStream;

    // Start processing the video feed for edge detection
    video.addEventListener('play', function() {
      processVideo();
    });
  }).catch((error) => {
    console.warn(error);
  });
}

function processVideo() {
  const video = document.querySelector('#webcamVideo');
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  function drawFrame() {
    if (video.paused || video.ended) return;

    // Draw the video frame onto the canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Perform edge detection
    if (canvas.style.display === 'block') {
      applyEdgeDetection();
    }
    
    // Request the next frame
    requestAnimationFrame(drawFrame);
  }

  function applyEdgeDetection() {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Simple edge detection (Sobel operator)
    const width = imageData.width;
    const height = imageData.height;
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4;
        
        const gx = (
          -data[idx - 4 - width * 4] + data[idx + 4 - width * 4] +
          -2 * data[idx - width * 4] + 2 * data[idx + width * 4] +
          -data[idx - 4 + width * 4] + data[idx + 4 + width * 4]
        );
        const gy = (
          -data[idx - 4 - width * 4] + data[idx - 4 + width * 4] +
          -2 * data[idx - 4] + 2 * data[idx + 4] +
          -data[idx + 4 - width * 4] + data[idx + 4 + width * 4]
        );
        
        const magnitude = Math.sqrt(gx * gx + gy * gy);
        const value = Math.min(255, magnitude);
        
        data[idx] = value;      // Red
        data[idx + 1] = value;  // Green
        data[idx + 2] = value;  // Blue
      }
    }
    
    context.putImageData(imageData, 0, 0);
  }

  drawFrame();
}

document.getElementById('mGASButton').addEventListener('click', function() {
  console.log('mGAS button clicked');
  // Add your mGAS functionality here
});

document.getElementById('featuresButton').addEventListener('click', function() {
  const canvas = document.querySelector('#canvas');
  const isEdgeDetectionOn = canvas.style.display === 'block';
  
  if (isEdgeDetectionOn) {
    canvas.style.display = 'none'; // Hide the canvas to show the normal video feed
  } else {
    canvas.style.display = 'block'; // Show the canvas to display edge detection
  }
});

setupCam();
