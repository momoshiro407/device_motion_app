/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("$(function () {\n  $('#confirm-button').on('click', () => {\n    useDeviceMotion();\n  });\n});\n\nfunction useDeviceMotion() {\n  if (DeviceMotionEvent && DeviceMotionEvent.requestPermission) {\n    // デバイスの加速度センサーへのアクセス許可を確認する必要がある\n    DeviceMotionEvent.requestPermission()\n      .then(state => {\n        // アクセスを許可する場合のみ実行可能\n        if (state === 'granted') {\n          // 方向の計測結果を取得\n          window.addEventListener(\"deviceorientation\", event => {\n            $('#orientation').text(`X: ${precision(event.beta)} / Y: ${precision(event.gamma)} / Z: ${precision(event.alpha)}`);\n          });\n          // 加速度の計測結果を取得\n          window.addEventListener('devicemotion', event => {\n            const accel = event.acceleration;\n            const accelG = event.accelerationIncludingGravity;\n            const rotation = event.rotationRate;\n            $('#acceleration').text(`X: ${precision(accel.x)} / Y: ${precision(accel.y)} / Z: ${precision(accel.z)}`);\n            $('#acceleration-gravity').text(`X: ${precision(accelG.x)} / Y: ${precision(accelG.y)} / Z: ${precision(accelG.z)}`);\n            $('#rotation-rate').text(`X: ${precision(rotation.beta)} / Y: ${precision(rotation.gamma)} / Z: ${precision(rotation.alpha)}`);\n          });\n        }\n      })\n      .catch(error => console.log(error));\n  } else {\n    alert('このブラウザではDeviceMotionを利用できません。');\n  }\n}\n\nfunction precision(num) {\n  return num.toFixed(1);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;