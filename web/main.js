console.log('meiowr');

const sampleMeters = [
  'YOU|are|NOT|the|SAME|peo|PLE|who|LEFT|that|STA|tion',
  'OR|who|WILL|ar|RIVE|at|AN|y|TER|mi|NUS'
];

function isUpperCase(str) {
  return str && str.toUpperCase() === str
}

function meterParser(meters) {
  // Right now we only care about stressed (1) and unstressed (0)
  return meters.map(meter => {
    const feet = meter.split('|');
    return feet;
  })
}

function flatten(arrays) {
  return arrays.reduce((acc, current) => {
    current.push(' ');
    return acc.concat(current);
  }, []);
}

function footParser(feet) {
  return feet.map(foot => {
    const isStressed = isUpperCase(foot);
    return isStressed ? '1' : '0';
  })
}

var feet = flatten(meterParser(sampleMeters));
console.log(feet);

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.y = 150;
  camera.position.z = 500;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  geometry = new THREE.CircleGeometry( 30, 64);
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.y = 150;
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

function animateAtInterval(nTicks, cb) {
  var tickCount = 0;
  var roundCount = 0;
  (function wrapper() {
    tickCount++;
    if (tickCount === nTicks) {
      cb(roundCount);
      roundCount++;
      tickCount = 0;
    }
    requestAnimationFrame(wrapper);
  })();
}

function mix(a, b, p) {
  return a * (1 - p) + b * p;
}

animateAtInterval(30, function(counter) {
  var currentWord = feet[counter];
  if (currentWord) {
    console.log(currentWord)
    var p = isUpperCase(currentWord) ? 2.0 : 0.5;
    mesh.scale.x = p;
    mesh.scale.y = p;
  }
});

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}