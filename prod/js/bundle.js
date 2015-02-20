/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	  pathオブジェクトの練習
	 */
	var onReady;
	
	window.onload = function() {
	  return onReady();
	};
	
	onReady = function() {
	
	  /*
	  canvasに新しいプロジェクトを設定
	   */
	  var canvas, center, circle, copy, copy2, hexagon, line, myStyle, path, points, radius, radius1, radius2, radiusRect, rectangle, sides, star, triangle;
	  canvas = document.getElementById('myCanvas');
	  paper.setup(canvas);
	
	  /*
	  パスで四角形を描く
	   */
	  path = new paper.Path();
	  path.strokeColor = 'black';
	  path.fillColor = '#ffbbbb';
	  path.add(new paper.Point(50, 50));
	  path.add(new paper.Point(50, 100));
	  path.add(new paper.Point(100, 100));
	  path.add(new paper.Point(100, 50));
	  path.closed = true;
	  path.fullySelected = true;
	
	  /*
	  パスのセグメントを滑らかにする
	   */
	  copy = path.clone();
	  copy.fillColor = '#bbffbb';
	  copy.fullySelected = true;
	  copy.position.x += 100;
	  copy.smooth();
	
	  /*
	  パスのセグメントを削除する
	   */
	  copy2 = copy.clone();
	  copy2.fillColor = '#bbbbff';
	  copy2.fullySelected = true;
	  copy2.position.x += 100;
	  copy2.removeSegment(0);
	
	  /*
	  円を描く
	   */
	  circle = new paper.Path.Circle(new paper.Point(75, 150), 30);
	  circle.fillColor = '#ffffaa';
	
	  /*
	  四角形を描く
	   */
	  rectangle = new paper.Path.Rectangle(new paper.Point(150, 130), new paper.Point(300, 180));
	  rectangle.fillColor = '#aaffff';
	  rectangle.selected = true;
	  radiusRect = new paper.Path.Rectangle({
	    topLeft: [150, 200],
	    bottomRight: [300, 240],
	    radius: 10,
	    fillColor: '#ffaaff'
	  });
	
	  /*
	  正多角形を描く
	   */
	  center = new paper.Point(80, 240);
	  sides = 3;
	  radius = 40;
	  triangle = new paper.Path.RegularPolygon(center, sides, radius);
	  triangle.fillColor = '#99ccff';
	  center = new paper.Point(80, 320);
	  sides = 6;
	  radius = 40;
	  hexagon = new paper.Path.RegularPolygon(center, sides, radius);
	  hexagon.fillColor = '#99ccff';
	
	  /*
	  スタイルの設定について
	   */
	  line = new paper.Path({
	    segments: [[160, 300], [180, 360], [320, 320]],
	    selected: true
	  });
	  myStyle = {
	    strokeColor: '#ff0000',
	    strokeWidth: 10,
	    strokeCap: 'round',
	    strokeJoin: 'round',
	    dashArray: [10, 12],
	    fillColor: 'blue'
	  };
	  line.style = myStyle;
	  line.fillColor = null;
	
	  /*
	  星形を書く
	   */
	  center = new paper.Point(380, 70);
	  points = 5;
	  radius1 = 20;
	  radius2 = 40;
	  star = new paper.Path.Star(center, points, radius1, radius2);
	  star.style = triangle.style;
	  paper.view.draw();
	};


/***/ }
/******/ ])
//# sourceMappingURL=bundle.js.map