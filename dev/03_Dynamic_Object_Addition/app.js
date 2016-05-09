'use strict'

var APP = {};

function init(){

  var CANVAS = document.getElementById('canvas');

  APP.scene = new THREE.Scene();

  APP.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  APP.renderer = new THREE.WebGLRenderer();
  APP.renderer.setClearColorHex(0xEEEEEE);
  APP.renderer.setSize(window.innerWidth, window.innerHeight);
  APP.renderer.shadowMapEnabled = true;

  var axes = new THREE.AxisHelper(20);
  APP.scene.add(axes);

  //PLANE
  var planeGeometry = new THREE.PlaneGeometry(60,20);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.rotation.x = (-0.5 * Math.PI);

  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true;

  APP.scene.add(plane);

  //SPOTLIGHT
  var spotlight = new THREE.SpotLight(0xffffff);

  spotlight.position.set( -40, 60, -10);
  spotlight.castShadow = true;

  APP.scene.add(spotlight);

  //CAMERA POSITION
  APP.camera.position.x = -30;
  APP.camera.position.y =  40;
  APP.camera.position.z =  30;
  APP.camera.lookAt(APP.scene.position);

  function render() {
    requestAnimationFrame(render);
    APP.renderer.render(APP.scene, APP.camera);
  }

  CANVAS.appendChild(APP.renderer.domElement);
  render();
  console.log(APP.scene);

}

document.addEventListener('DOMContentLoaded', init, false);