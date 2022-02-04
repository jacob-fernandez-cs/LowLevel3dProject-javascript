let scene, camera, renderer, sphere, cube, mouse , raycaster,xSpeed,ySpeed;


function init()
{
	
	//set speed for movement of objects on screen
	 xSpeed = 0.15;
	 ySpeed = 0.15;
//create raycaster 
	 raycaster = new THREE.Raycaster();
	 mouse = new THREE.Vector2();
	//setting up the scene camera and renderer 
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor("#5D3FD3");
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
	//listens for resize event, adjusts both the renderers size and the cameras aspect ratio,updateProjectionMatrix must be called everytime there is an adjustment to the camera
	window.addEventListener('resize',() =>{
		renderer.setSize(window.innerWidth,window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	
	})
	//adding event listener for when mouse clicks over object
	
	
	//variables for sphere
	var geometry = new THREE.SphereGeometry(1,10,10);
	//non shiny material 
	var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
	sphere = new THREE.Mesh(geometry, material);
	
	//variables for cube
	var geometry2 = new THREE.BoxGeometry(1,1,1);
	//non shiny material 
	var material2 = new THREE.MeshLambertMaterial({color: 0xFFCC00});
	cube = new THREE.Mesh(geometry2,material2)
	cube.position.y = 4;
	
	var lightP = new THREE.PointLight(0xFFFFFF, 1, 250);
	lightP.position.set(10,0,25);
	
	
	
	
	scene.add(sphere);
	scene.add(cube);
	scene.add(lightP);
	
	
	
	camera.position.z = 10;
	window.addEventListener('click', onMouseClick);
	document.addEventListener("keydown", onWASDpress, false);
}
	
//function for finding the mouse

function onMouseClick(event){
//needed for click events
event.preventDefault();
//getting mouse x and y 
mouse.x = (event.clientX/window.innerWidth) * 2 - 1;
mouse.y = - (event.clientY /window.innerHeight)* 2 + 1;
//setting raycaster
raycaster.setFromCamera(mouse, camera);

//returns array when the mouse has clicked object
var intersects = raycaster.intersectObjects(scene.children, true);
for(var i = 0; i < intersects.length; i++)
{
	//changing object to red
	intersects[i].object.material.color.set(0xFF0000)
	//using the TweenMax library for animation of the object clicked timeline allows for simple control of the timing of the animation
	this.tl = new TimelineMax();
	this.tl.to(intersects[i].object.scale, 1, {x: 3,ease: Expo.easeOut})
	this.tl.to(intersects[i].object.position, .5,{x: 4,ease: Expo.easeOut})
	//this.tl.to(intersects[i].object.position, .5,{y: 6,ease: Expo.easeOut})
	this.tl.to(intersects[i].object.rotation, 1.5, {y: Math.PI* 1.5, ease : Expo.easeOut})
}

}




function onWASDpress(event) {
    var keyCode = event.which;
	
	//code 87 is 'w' code 83 is 's' code 65 is 'a' code 68 is 'd' and code 32 is 'space'
	//first set of ifs moves the cube
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } 
	else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } 
	else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } 
	else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } 
	else if (keyCode == 32) {
        cube.position.set(0, 4, 0);
    }
}	
	
	
function update()
{
	requestAnimationFrame(update);
	
	
	//calling the render method on the renderer
	renderer.render(scene, camera);
	
}

init();
update();
