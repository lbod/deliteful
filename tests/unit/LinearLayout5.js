define([
	"intern!object",
	"intern/chai!assert",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"delite/register",
	"deliteful/LinearLayout"
], function (registerSuite, assert, domGeom, domClass, register) {
	var container, node;
	var htmlContent =
		"<d-linear-layout id='dlayout' vertical='false' style='width:999px; height:999px'>" +
			"<div id='divA' class='fill'>A</div><div id='divB' class='fill'>B</div>" +
			"<div id='divC' class='fill'>C</div></d-linear-layout>";
	registerSuite({
		name: " Direction Switch",
		setup: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			container.innerHTML = htmlContent;
			register.parse(container);
			node = document.getElementById("dlayout");
		},
		"Horizontal LinearLayout 3 Equal Width" : function () {
			var children = node.getChildren();
			assert.deepEqual(3, children.length);
			var box1 = domGeom.getMarginBox(children[0]);
			var box2 = domGeom.getMarginBox(children[1]);
			var box3 = domGeom.getMarginBox(children[2]);
			assert.deepEqual(box1.w, 333);
			assert.deepEqual(box2.w, 333);
			assert.deepEqual(box3.w, 333);
		},

		"Vertical LinearLayout 3 Equal Height" : function () {
			node.vertical = true;
			node.validateRendering();
			var children = node.getChildren();
			assert.deepEqual(3, children.length);
			var box1 = domGeom.getMarginBox(children[0]);
			var box2 = domGeom.getMarginBox(children[1]);
			var box3 = domGeom.getMarginBox(children[2]);
			assert.deepEqual(box1.h, 333);
			assert.deepEqual(box2.h, 333);
			assert.deepEqual(box3.h, 333);
		},
		teardown : function () {
			container.parentNode.removeChild(container);
		}

	});
});
