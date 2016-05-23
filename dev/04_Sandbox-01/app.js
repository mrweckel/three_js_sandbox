'use strict';

var APP = {};

function init(){

  APP.canvas = document.getElementById('canvas');

  APP.scene = new THREE.Scene();

  APP.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  APP.renderer = new THREE.WebGLRenderer();
  APP.renderer.setClearColorHex(0xEEEEEE);
  APP.renderer.setSize(window.innerWidth, window.innerHeight);

  var axes = new THREE.AxisHelper(20);
  APP.scene.add(axes);

  //SPHERE #1
  var sphereGeometry = new THREE.SphereGeometry(4,20,20);
  var sphereMaterial = new THREE.MeshBasicMaterial({
                            color: 0x777fff,
                            wireframe: true});
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;

  APP.scene.add(sphere);



   //CAMERA POSITION
  APP.camera.position.x = -30;
  APP.camera.position.y =  40;
  APP.camera.position.z =  30;
  APP.camera.lookAt(APP.scene.position);

  function render(){
    requestAnimationFrame(render);
    APP.renderer.render(APP.scene, APP.camera);
  }

  APP.canvas.appendChild(APP.renderer.domElement);
  render();
  console.log(APP.scene);



}

document.addEventListener('DOMContentLoaded', init, false);