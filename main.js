var toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};

window.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById('canvas');
	var engine = new BABYLON.Engine(canvas, true);
	var createScene = function () {
		var scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color3.White();
		// var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -10), scene);
		var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
		var camera = new BABYLON.ArcRotateCamera("arcCamera", toRadians(45), toRadians(45), 10.0, box.position, scene)
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.attachControl(canvas, true);

		camera.keysUp.push(87);
		camera.keysDown.push(83);
		camera.keysLeft.push(65);
		camera.keysRight.push(68);

		return scene;
	}

	var scene = createScene();
	engine.runRenderLoop(function () {
		scene.render();
	});
});