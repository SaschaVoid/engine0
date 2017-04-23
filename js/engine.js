var cube, camera, scene, renderer, clock;

init();
animate();

function init(){
  camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 500);
  //camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
  camera.position.set(0, 0, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-5, -5, -5));
  geometry.vertices.push(new THREE.Vector3(5, -5, -5));
  geometry.vertices.push(new THREE.Vector3(5, -5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, -5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, -5, -5));
  geometry.vertices.push(new THREE.Vector3(-5, 5, -5));
  geometry.vertices.push(new THREE.Vector3(5, 5, -5));
  geometry.vertices.push(new THREE.Vector3(5, 5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, 5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, 5, -5));
  geometry.vertices.push(new THREE.Vector3(-5, 5, -5));
  geometry.vertices.push(new THREE.Vector3(5, 5, -5));
  geometry.vertices.push(new THREE.Vector3(5, -5, -5));
  geometry.vertices.push(new THREE.Vector3(5, -5, 5));
  geometry.vertices.push(new THREE.Vector3(5, 5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, 5, 5));
  geometry.vertices.push(new THREE.Vector3(-5, -5, 5));

  var material = new THREE.LineBasicMaterial({ color: 0xffffff });
  cube = new THREE.Line(geometry, material);
  scene.add( cube );

  clock = new THREE.Clock();

  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  if(camera.isOrthographicCamera){
    camera.left = window.innerWidth / - 2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / - 2;
  }

  camera.aspect = window.innerWidth / window.innerHeight ;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

clock = new THREE.Clock();

function animate() {
  clock.getElapsedTime();
  requestAnimationFrame( animate );
  render();
}

function render() {

  timer = Date.now() * 0.0001;

  cube.rotation.x += (Math.sin(clock.elapsedTime) + 2) / 500;
  cube.rotation.y += (Math.sin(clock.elapsedTime) + 2) / 75;
  cube.rotation.z += (Math.sin(clock.elapsedTime) + 2) / 200;
  camera.lookAt( scene.position );

  renderer.render( scene, camera );

}