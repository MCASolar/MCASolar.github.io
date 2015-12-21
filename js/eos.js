/*var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight * .92 );
document.getElementById("home").appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );

var loader = new THREE.STLLoader();
loader.load("res/car_sample.stl", function(geo){
	var car = new THREE.Mesh(geo);
	car.rotation.z = Math.PI/4;
	car.rotation.x = Math.PI/4;
	car.rotation.y = Math.PI/4;
	scene.add(car);
})

			
			var cube = new THREE.Mesh( geometry, material );
			//scene.add( cube );

			camera.position.z = 5;

			var controls = new THREE.OrbitControls(camera);

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			render();
*/