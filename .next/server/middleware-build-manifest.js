self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
<<<<<<< HEAD
  "rootMainFiles": [],
=======
  "rootMainFiles": [
    "static/chunks/webpack.js",
    "static/chunks/main-app.js"
  ],
>>>>>>> b664ef06d7dab02c7dfb89ff7b482e35593226ea
  "pages": {
    "/_app": []
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];