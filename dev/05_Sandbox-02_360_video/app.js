var APP = {};

var texture;

function init(){

  var width = window.innerWidth;
  var height = window.innerHeight;

  var scene = new THREE.Scene();

  //THREE.PerspectiveCamera(FOV, aspect ratio, near, far);
  var camera =new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

  var webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
  webGLRenderer.setSize(width, height);
  webGLRenderer.shadowMapEnabled = true;

  var video = document.getElementById('video');
  texture = new THREE.VideoTexture(video);

  // var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  // var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff}, wireframe: true});
  // var sphere = new THREE.Mesh(sphereGeometry);
  var sphere = createMesh(new THREE.SphereGeometry(4, 20, 20), "floor-wood.jpg");

  sphere.position.x = 20;
  sphere.position.y =  4;
  sphere.position.z =  2;
  scene.add(sphere);

  camera.position.x = 00;
  camera.position,y = 1;
  camera.position.z = 28;
  camera.lookAt(new THREE.Vector3(0,0,0));

  var ambiLight = new THREE.AmbientLight(0x141414);
  scene.add(ambiLight);

  var light = new THREE.DirectionalLight();
  light.position.set(0,30,20);
  scene.add(light);

  document.getElementById("canvas").appendChild(webGLRenderer.domElement);

  var step = 0;

  render();

  function render(){
    console.log('hello');
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }


}

window.onload = init;


