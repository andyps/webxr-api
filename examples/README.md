# WebXR examples

## WARNING

THIS SOFTWARE IS PRERELEASE, IS *NOT* READY FOR PRODUCTION USE, AND *WILL* SOON HAVE BREAKING CHANGES.

NOTHING IN THIS REPO COMES WITH ANY WARRENTY WHATSOEVER. DO NOT USE IT FOR ANYTHING EXCEPT EXPERIMENTS.

## Running the examples

Note: There are a lot of pieces of the WebXR polyfill that are stubbed out and throw 'Not implemented' when called. The paths that are used by the example apps are starting to be filled in, but things like cartographic coordinates and geospatial coordinate systems are not yet implemented.

Clone this repo and then change directories into webxr-api/examples/

Run the following:

	npm install
	npm run build
	npm run start

Then go to http://your-host-name:8080/ to run the app.

Look in ar_examples.html for an example of what scripts to load and how to start up an app. common_examples.js has a nice base class that wraps up all of the boilerplate of starting a WebXR session and rendering into a WebGL layer.

If you run the polyfill on our ARKit iOS app (not yet released) it will use the class in examples/polyfill/platform/ARKitWrapper.js to get pose and anchor data out of ARKit.


