/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

//-------------------------FIRST------------------------------------
var firstRing1, firstRing2, firstBall;

function firstCreateRing1(){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    firstRing1 = new THREE.Mesh(geometry,material);
    firstRing1.rotation.x = Math.PI / 2;
    firstRing1.rotation.y = 0;
    firstRing1.rotation.z = 0;


    scene.add(firstRing1);
}

function firstCreateBall(x, y ,z){
    'use strict';

    const geometry = new THREE.SphereGeometry(1,100,100,0,360,0,180);
    const material = new THREE.MeshNormalMaterial({color: 0x5bba1a});
    firstBall = new THREE.Mesh(geometry,material);

    firstBall.position.x = x;
    firstBall.position.y = y;
    firstBall.position.z = z;


    scene.add(firstBall);

}

function firstCreateRing2(){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0xde28db});

    firstRing2 = new THREE.Mesh(geometry,material);
    firstRing2.rotation.x = Math.PI / 2;
    firstRing2.rotation.y = 0;
    firstRing2.rotation.z = 0;


    scene.add(firstRing2);
}

let firstBallSpeed = 0;
let firstRingSpeed = 0;

function animateFirst(){
    'use strict';

    firstRingSpeed += 0.002;
    firstBallSpeed += 0.01;

    let scaleFactor = 3 * (Math.cos(firstRingSpeed));
    firstRing1.scale.set(scaleFactor,scaleFactor,scaleFactor);
    firstRing1.position.y = Math.abs(3 * Math.sin(firstRingSpeed));

    let scaleFactor2 = 5 * (Math.sin(firstRingSpeed));
    firstRing2.scale.set(scaleFactor2,scaleFactor2,scaleFactor2);
    firstRing2.position.y = Math.abs(5 * Math.cos(firstRingSpeed));
    firstBall.position.y = 4 * Math.sin(firstBallSpeed);

}

//------------------------- SIXTH ----------------------------------
var ball6, firstRing6, secondRing6, atom

function createBall6(obj){
    'use strict';
    const geometry = new THREE.SphereGeometry( 1, 100, 100, 0, 360, 0, 180 );
    const material = new THREE.MeshNormalMaterial( { color: 0x05bffc } );
    ball6 = new THREE.Mesh( geometry, material );
    ball6.position.set(0,0,0);
    obj.add(ball6);
}

function createFirstRing6(obj) {
    'use strict';

    const geometry = new THREE.TorusGeometry(2,0.10,20,360,360);

    const material = new THREE.MeshNormalMaterial({color: 0x1ca8ff});

    firstRing6 = new THREE.Mesh(geometry,material);

    firstRing6.rotation.x = -Math.PI;
    firstRing6.rotation.y = Math.PI / 4;
    firstRing6.rotation.z = - Math.PI;
    obj.add(firstRing6);
}

function createSecondRing6(obj) {
    'use strict';

    const geometry = new THREE.TorusGeometry(2.5,0.10,20,360,360);

    const material = new THREE.MeshNormalMaterial({color: 0x1ca8ff});

    secondRing6 = new THREE.Mesh(geometry,material);

    secondRing6.rotation.x = Math.PI / 2;
    obj.add(secondRing6);
}

function createObject6() {
    'use strict';

    atom = new THREE.Object3D();

    createBall6(atom);
    createFirstRing6(atom);
    createSecondRing6(atom);

    scene.add(atom);

    table.position.x = 0;
    table.position.y = 0;
    table.position.z = 0;

}



function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));

    //-----------------First--------------
    firstCreateRing1();
    firstCreateRing2();
    firstCreateBall(0,0,0);
    //-------------------------------------
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 83:  //S
    case 115: //s
        ball.userData.jumping = !ball.userData.jumping;
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}


function createLight(){
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCamera();
    createLight();
    
    render();
    
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    animateFirst(); // First

    render();
    
    requestAnimationFrame(animate);
}

