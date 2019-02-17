var toRadians = function (degrees) {
	return degrees * Math.PI / 180;
};

window.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById('canvas');
	var engine = new BABYLON.Engine(canvas, true);
	var createScene = function () {
		var scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color3.White();
		var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
		var camera = new BABYLON.ArcRotateCamera("arcCamera", toRadians(45), toRadians(45), 10.0, box.position, scene);
		camera.attachControl(canvas, true);

		var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 10, 0), scene);
		light.parent = camera;
		light.diffuse = new BABYLON.Color3(1,1,1);

		var material = new BABYLON.StandardMaterial("material1", scene);
		material.diffuseTexture = new BABYLON.Texture("txtr.jpg", scene);
		material.bumpTexture = new BABYLON.Texture("nrml.png", scene);
		material.roughness = 0.5;
		box.material = material;


		return scene;
	}

	var scene = createScene();
	engine.runRenderLoop(function () {
		scene.render();
	});
});

// material.diffuseColor = new BABYLON.Color3.Blue();
// material.emissiveColor = new BABYLON.Color3.Green();
// material.specularColor = new BABYLON.Color3.Green();
// material.alpha = 0.5;

// var material = scene.getMeshByName("Box").material;
// material.alpha -= 0.01;
// if(material.alpha <= 0){
// 	material.alpha = 1;
// }

// var light = scene.getLightByName("spotLight");
// light.position.y -= 0.01;

// var light = new BABYLON.SpotLight(
// 	"spotLight",
// 	new BABYLON.Vector3(0, 10, 0),
// 	new BABYLON.Vector3(0, -1, 0),
// 	BABYLON.Tools.ToRadians(45), 0.1,
// 	scene
// 	);

// light.diffuse = new BABYLON.Color3(1, 0, 0);

// scene.actionManager = new BABYLON.ActionManager(scene);
// scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
// 		trigger: BABYLON.ActionManager.OnKeyUpTrigger,
// 		parameter: " "
// 	},
// 	function () {
// 		light.setEnabled(!light.isEnabled());
// 	}))

// var light = scene.getLightByName("pointLight");
// light.diffuse.g += 0.01;
// light.diffuse.b += 0.01;

// scene.getMeshByName("Box").position.z += 0.01;

// var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -10), scene);

// var box2 = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
// box2.position = new BABYLON.Vector3(0,5,0);

// var camera = new BABYLON.FollowCamera("followcam", BABYLON.Vector3.Zero(), scene);
// camera.setTarget(BABYLON.Vector3.Zero());
// camera.lockedTarget = box;
// camera.radius = 50;
// camera.heightOffset = 5;

// camera.keysUp.push(87);
// camera.keysDown.push(83);
// camera.keysLeft.push(65);
// camera.keysRight.push(68);