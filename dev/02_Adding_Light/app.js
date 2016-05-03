'use strict'

document.addEventListener("DOMContentLoaded", function(){

  //doc specific variables
  var CANVAS = document.getElementById('canvas');

  var scene = new THREE.Scene();
  console.log(scene);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColorHex(0xEEEEEE);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true; //Adds shadows


  var axes = new THREE.AxisHelper(20);
  scene.add(axes);

  //PLANE
  var planeGeometry = new THREE.PlaneGeometry(60,20);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.rotation.x = (-0.5 * Math.PI);

  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true;

  scene.add(plane);

  //CUBE
  var cubeGeometry = new THREE.CubeGeometry(4,4,4);
  var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.x = -4;
  cube.position.y =  3;
  cube.position.z =  0;

  cube.castShadow = true;

  scene.add(cube);

  //SPHERE
  var sphereGeometry = new THREE.SphereGeometry(4,20,20);
  var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x777ff});
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;

  sphere.castShadow = true;

  scene.add(sphere);

  //SPOTLIGHT
  var spotlight = new THREE.SpotLight(0xffffff);

  spotlight.position.set(-40, 60, -10);
  spotlight.castShadow = true;

  scene.add(spotlight);

  //CAMERA POSITION
  camera.position.x = -30;
  camera.position.y =  40;
  camera.position.z =  30;
  camera.lookAt(scene.position);

  var step = 0;

  function render() {
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    step += 0.04;
    sphere.position.x = 20 + (10 * (Math.cos(step)));
    sphere.position.y =  2 + (10 * (Math.abs(Math.sin(step))));

    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }


  // function renderScene() {
  //   requestAnimationFrame(renderScene);
  //   renderer.render(scene, camera);
  // }

  CANVAS.appendChild(renderer.domElement);
  render();



});