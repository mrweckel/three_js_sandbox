var APP = {};

var texture;

function init(){

  var width = window.innerWidth;
  var height = window.innerHeight;

  var scene = new THREE.Scene();

  //THREE.PerspectiveCamera(FOV, aspect ratio, near, far);
  var camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);

   var axes = new THREE.AxisHelper(20);
    scene.add(axes);

   var step = 0;

  var webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
  webGLRenderer.setSize(width, height);
  webGLRenderer.shadowMapEnabled = true;

  var video = document.getElementById('video');
  texture = new THREE.VideoTexture(video);
  var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.BackSide});

  var sphere = new THREE.Mesh(new THREE.SphereGeometry(20, 20, 20), material);

  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 0;
  scene.add(sphere);

  camera.position.x = 0;
  camera.position.y = 1;
  camera.position.z = 0;
  camera.lookAt(new THREE.Vector3(0,0,0));

  var ambiLight = new THREE.AmbientLight(0x141414);
  scene.add(ambiLight);

  var light = new THREE.DirectionalLight();
  light.position.set(0,30,20);
  scene.add(light);

  document.getElementById("canvas").appendChild(webGLRenderer.domElement);

  console.log('webGLRenderer.domElement');

  var step = 0;

  render();

  function render(){
    console.log('hello');
    sphere.rotation.z = step += 0.01;

    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }


}

document.addEventListener('DOMContentLoaded', init, false);


