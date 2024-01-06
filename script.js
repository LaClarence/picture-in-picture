const video = document.getElementById('video');
const buttonActivation = document.getElementById('button-container');
const button = document.getElementById('button');
const buttonAction = {
  show: 'SHOW',
  stop: 'STOP'
};

const captureController = new CaptureController();
// Avoid to change tab to video source
// alt "focus-captured-surface"
captureController.setFocusBehavior("no-focus-change");

const displayMediaOptions = {
  // video: {
  //   displaySurface: "browser",
  // },
  // audio: {
  //   suppressLocalAudioPlayback: true,
  // },
  // preferCurrentTab: false,
  // selfBrowserSurface: Exclude the current tab from the list of tabs offered to the user.
  selfBrowserSurface: "exclude",
  // surfaceSwitching: Don't display Stop sharing button BUT don't work
  surfaceSwitching: "exclude",
  monitorTypeSurfaces: "exclude",
  controller: captureController,
};

let pipWindow = null;

setButtonTextContent = (namedAction) => {
  button.textContent = `${namedAction} PIP mode`;
  button.dataset.action = namedAction;
};

setButtonStop = () => setButtonTextContent(buttonAction.stop);
setButtonShow = () => setButtonTextContent(buttonAction.show);

video.onloadeddata = (event) => {
  video.play();
  setButtonShow();
  buttonActivation.hidden = false;
};

video.onleavepictureinpicture = () => {
  console.log('Leaving Picture in picture...');
  setButtonShow();
};

async function selectMediaStream() {
  try {
    video.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (error) {
    console.error(`Failed to select media stream: ${error}`);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  try {
    if (video !== document.pictureInPictureElement) {
      pipWindow = await video.requestPictureInPicture();
      setButtonStop();
    } else {
      await document.exitPictureInPicture();
      setButtonShow();
    }
  } catch (error) {
    console.error(`Picture in picture error: ${error}`);
  } finally {
    button.disabled = false;
  }
});


buttonActivation.hidden = true;
selectMediaStream();
