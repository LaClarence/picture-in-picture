# Picture-In-Picture test

3rd Javascript project: Picture in picture.


## Resources
* [MediaDevices: getDisplayMedia method()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)
* [Picture-in-Picture for any Element, not just video](https://developer.chrome.com/docs/web-platform/document-picture-in-picture?hl=en)
* [Better tab sharing with Capture Handle](https://developer.chrome.com/docs/web-platform/capture-handle?hl=fr)
* [Video and audio content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
* [Picture-in-Picture - W3C Working Draft (1)](https://www.w3.org/TR/picture-in-picture/)
* [Picture-in-Picture - W3C Working Draft (2)](https://w3c.github.io/picture-in-picture/#biblio-mediasession)
* [Media Capture and Streams - W3C](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack)
* [HTML5 Video API: A Guide to Video Transformation in the Browser](https://imagekit.io/blog/html5-video-api/)

## Others Demos

* [Tab Capture Handle](https://capture-handle.glitch.me/)
* [Screen sharing controls](https://screen-sharing-controls.glitch.me/)
* [Picture-in-Picture Chrome Extension](https://github.com/GoogleChromeLabs/picture-in-picture-chrome-extension)
* [GoogleChrome - samples](https://github.com/GoogleChrome/samples/tree/gh-pages/picture-in-picture)
* [Picture-in-Picture Sample](https://googlechrome.github.io/samples/picture-in-picture/)
* [dom-examples/document-picture-in-picture](https://github.com/chrisdavidmills/dom-examples/blob/main/document-picture-in-picture/main.js)

## Code 

### Get info about Picture in picture windows

```Javascript
function getPIPInfo() {
  if (pipWindow) {
    console.log(`> Window size is ${pipWindow.width}x${pipWindow.height}`);
    const [track] = video.srcObject.getVideoTracks();
    var events = [];
    for (var property in pipWindow) {
      let match = property.match(/^on(.*)/)
      if (match) {
        events.push(match[1]);
      }
    }
    console.log(events);
  } else {
    console.log('No pip window is currently open...');
  }
}
``````

Can be added in the finally bloc of onclick.
