/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

//-------------------------FIRST------------------------------------
var firstRing1, firstRing2, firstBall, object1;

function firstCreateRing1(obj){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    firstRing1 = new THREE.Mesh(geometry,material);
    firstRing1.rotation.x = Math.PI / 2;
    firstRing1.rotation.y = 0;
    firstRing1.rotation.z = 0;


    obj.add(firstRing1);
}

function firstCreateBall(obj, x, y ,z){
    'use strict';

    const geometry = new THREE.SphereGeometry(1,100,100,0,360,0,180);
    const material = new THREE.MeshNormalMaterial({color: 0x5bba1a});
    firstBall = new THREE.Mesh(geometry,material);

    firstBall.position.x = x;
    firstBall.position.y = y;
    firstBall.position.z = z;


    obj.add(firstBall);

}

function firstCreateRing2(obj){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0xde28db});

    firstRing2 = new THREE.Mesh(geometry,material);
    firstRing2.rotation.x = Math.PI / 2;
    firstRing2.rotation.y = 0;
    firstRing2.rotation.z = 0;


    obj.add(firstRing2);
}

function createObject1() {
    'use strict';
    object1 = new THREE.Object3D();
    firstCreateRing1(object1);
    firstCreateBall(object1, 0, 0, 0);
    firstCreateRing2(object1);

    object1.position.set(0,5,23);
    scene.add(object1);

}

let firstBallSpeed = 0;
let firstRingSpeed = 0;

function animateFirst(){
    'use strict';

    firstRingSpeed += 0.002;
    firstBallSpeed += 0.01;

    let scaleFactor = 3 * (Math.cos(firstRingSpeed));
    console.log(scaleFactor)
    if (Math.abs(scaleFactor) < 1)
        scaleFactor = 1;
    firstRing1.scale.set(scaleFactor,scaleFactor,scaleFactor);
    firstRing1.position.y = Math.abs(3 * Math.sin(firstRingSpeed));

    let scaleFactor2 = 5 * (Math.sin(firstRingSpeed));
    firstRing2.scale.set(scaleFactor2,scaleFactor2,scaleFactor2);
    firstRing2.position.y = Math.abs(5 * Math.cos(firstRingSpeed));
    firstBall.position.y = 4 * Math.sin(firstBallSpeed);

    object1.rotation.x += 0.005;
    object1.rotation.z += 0.005;

}

//------------------------- THIRD ----------------------------------

var firstTable3, secondTable3, firstBall3, thirdBall3, secondBall3,thirdTable3, object3, subObject3, subSubObject3;

function addTable3(obj, x, y, z, color, num) {
    'use strict';
    const geometry = new THREE.BoxGeometry(15, 2, 8);
    const material = new THREE.MeshToonMaterial({color : color});
    if (num === 1){
        firstTable3 = new THREE.Mesh(geometry, material);
        firstTable3.position.set(x, y, z);
        obj.add(firstTable3);
    }
    else if (num === 2) {
        subObject3 = new THREE.Object3D();
        secondTable3 = new THREE.Mesh(geometry, material);
        secondTable3.position.set(x - firstBall3.position.x, 0, 0);
        subObject3.add(secondTable3);
        subObject3.position.set(firstBall3.position.x, y,z)
        obj.add(subObject3);
    }
    else if (num === 3) {
        subSubObject3 = new THREE.Object3D();
        thirdTable3 = new THREE.Mesh(geometry, material);
        thirdTable3.position.set(x - secondBall3.position.x, 0, 0);
        subSubObject3.add(thirdTable3);
        subSubObject3.position.set(secondBall3.position.x, y,z)
        obj.add(subSubObject3);
    }

}

function addBall3(obj, x, y, z, color, num) {
    'use strict';
    const geometry = new THREE.SphereGeometry(1.8, 100, 100, 0, 360, 0, 180 );
    const material = new THREE.MeshToonMaterial( { color: color } );
    if (num === 1) {
        firstBall3 = new THREE.Mesh( geometry, material );
        firstBall3.position.set(x, y, z);
        obj.add(firstBall3);
    }
    else if (num === 3) {
        thirdBall3 = new THREE.Mesh( geometry, material );
        thirdBall3.position.set(x, y, z);
        obj.add(thirdBall3);
    }
    else {
        secondBall3 = new THREE.Mesh(geometry, material);
        secondBall3.position.set(15 - 4, 2.8, 0)
        subObject3.add(secondBall3);
    }
}

function createObject3() {
    object3 = new THREE.Object3D();
    addTable3(object3, 0, 0, 0, 0x1ca8ff, 1);
    addBall3(object3, 6, 2.8, 0, 0xfc03c6, 1);
    addTable3(object3, 11, 5.6, 0, 0x1ca8ff, 2);
    addBall3(object3, 17, 8.4, 0, 0xfc03c6, 2);
    addTable3(subObject3, 6, 5.6, 0, 0x1ca8ff, 3);
    addBall3(subSubObject3, -10, 2.8, 0, 0xfc03c6, 3);
    scene.add(object3);
}

let ballSpeed = 0;
function animateObject3() {
    object3.rotation.y += 0.01;
    subObject3.rotation.y += 0.01;
    subSubObject3.rotation.y += 0.01;
    //secondBall3.rotation.y -= 0.01;
    ballSpeed += 0.01
    thirdBall3.position.y = 8 * Math.abs(Math.sin(ballSpeed)) + 2.8 ;
}


//------------------------- FOURTH ----------------------------------
var ring4, firstBall4, secondBall4, object4;

function createRing4(obj) {
    'use strict';

    const geometry = new THREE.TorusGeometry(3.5,0.80,20,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    ring4 = new THREE.Mesh(geometry,material);

    object4.position.x = 20;
    object4.position.y = 10;
    obj.add(ring4);
}


function createFirstBall4(obj){
    'use strict';
    const geometry = new THREE.SphereGeometry( 1, 100, 100, 0, 360, 0, 180 );
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    firstBall4 = new THREE.Mesh( geometry, material );
    firstBall4.position.set(0,-3.5/2, 0);
    obj.add(firstBall4);
}

function createObject4() {
    'use strict';
    object4 = new THREE.Object3D();
    createRing4(object4);
    createFirstBall4(object4);

    //object4.position.z = 5;

    object4.add(ring4);
    object4.add(firstBall4);
    scene.add(object4);
}

let firstBall4y = 0
function animateObject4() {
    firstBall4y += 0.01;
    //firstBall4.position.y = 3.2 * Math.abs(Math.sin(firstBall4y)) - 1.7;
    firstBall4.position.y = 5 * Math.abs(Math.sin(firstBall4y));
    firstBall4.position.x = Math.sqrt(3 * 3 - (firstBall4.position.y * firstBall4.position.y));
}

//------------------------- SIXTH ----------------------------------
var ball6, firstRing6, secondRing6, atom, object6;

function createBall6(obj){
    'use strict';
    const geometry = new THREE.SphereGeometry( 1, 100, 100, 0, 360, 0, 180 );
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    ball6 = new THREE.Mesh( geometry, material );
    ball6.position.set(0,0,0);
    obj.add(ball6);
}

function createFirstRing6(obj) {
    'use strict';

    const geometry = new THREE.TorusGeometry(2,0.10,20,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    firstRing6 = new THREE.Mesh(geometry,material);

    firstRing6.rotation.x = -Math.PI;
    firstRing6.rotation.y = Math.PI / 4;
    firstRing6.rotation.z = - Math.PI;

    obj.add(firstRing6);
}

function createSecondRing6(obj) {
    'use strict';

    const geometry = new THREE.TorusGeometry(2.5,0.10,20,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x510391});

    secondRing6 = new THREE.Mesh(geometry,material);

    secondRing6.rotation.x = Math.PI / 2;
    obj.add(secondRing6);
}

function createAtom(obj) {

}

// --------------------------Second----------------------------------
var secondObject, secondSubObject1, secondSubObject2, secondRing1, secondBall1;
function createObject2(){
    'use strict'
    secondObject = new THREE.Object3D();
    secondSubObject1 = new THREE.Object3D();
    secondSubObject2 = new THREE.Object3D();

    secondObject.position.set(14, 15, -20);
    secondObject.add(secondSubObject1);
    secondObject.add(secondSubObject2);

    createSecondBall1();
    createSecondBall2();
    createSecondRing1();
    scene.add(secondObject);
}

function createSecondBall1(){
    'use strict';
    const geometry = new THREE.SphereGeometry(2, 100, 100, 0, 360, 0, 180);
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    secondBall1 = new THREE.Mesh( geometry, material );
    secondBall1.position.set(-4.1, 0, 0);
    secondSubObject1.add(secondBall1);
}

function createSecondBall2(){
    'use strict';
    const geometry = new THREE.SphereGeometry(2, 100, 100, 0, 360, 0, 180);
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    secondBall1 = new THREE.Mesh( geometry, material );
    secondBall1.position.set(-10.9, 0, 0);
    secondSubObject2.add(secondBall1);
}

function createSecondRing1(){
    'use strict';

    const geometry = new THREE.TorusGeometry(8, 1, 20, 360, 360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    secondRing1 = new THREE.Mesh(geometry,material);

    secondRing1.rotation.x = Math.PI/2;
    secondRing1.rotation.y = 0;
    secondRing1.rotation.z = 0;

    secondObject.add(secondRing1);
}

let secondSubObject1RotationSpeed = 0.04;
let secondSubObject2RotationSpeed = 0.015;

function animateSecondObject(){
    secondObject.rotation.x += 0.01;
    secondObject.rotation.z += 0.01;
    secondSubObject1.rotation.y += secondSubObject1RotationSpeed;
    secondSubObject2.rotation.y += secondSubObject2RotationSpeed;
}

function createObject6() {
    'use strict';

    object6 = new THREE.Object3D();
    atom = new THREE.Object3D();

    createBall6(atom);
    createFirstRing6(atom);
    createSecondRing6(atom);


    atom.position.x = 20;
    atom.position.y = 10;
    atom.position.z = 5;

    object6.add(atom);
    scene.add(object6);
}

function animateObject6() {

    object6.rotation.x += 0.005;
    object6.rotation.y += 0.005;

    firstRing6.rotation.x += 0.025;
    firstRing6.rotation.y += 0.025;

    secondRing6.rotation.z += 0.025;
    secondRing6.rotation.y += 0.025;
}



//-------------------------------Fourth------------------------------------
let fourthSpin, fourthPoll, fourthJumpingBall1, fourthJumpingBall2;
let fourthInicialJumpingBallPos, fourthSpinner;

function fourthCreateBall(radios = 1, color){
    const geometry = new THREE.SphereGeometry(radios,100,100,0,360,0,180);
    const material = new THREE.MeshToonMaterial({color: color});
    let ball = new THREE.Mesh(geometry,material);

    scene.add(ball);

    return ball;
}

function fourthCreatePoll(width = 1, height = 1,depth = 1){
    const geometry = new THREE.BoxGeometry(width,height,depth,1,1,1);
    const material = new THREE.MeshToonMaterial({color: 0x5bba1a});
    let poll = new THREE.Mesh(geometry, material);


    scene.add(poll);
    return poll;
}

function fourthCreateSpin(){
    fourthSpin = new THREE.Object3D();
    fourthSpin.add(fourthCreateBall(0.8, 0xffffff));
    fourthPoll = fourthCreatePoll(15,0.5, 0.5);

    fourthSpinner = new THREE.Object3D();

    fourthJumpingBall1 = fourthCreateBall(0.8, 0xe01f70);
    fourthJumpingBall1.position.x = -5;

    fourthSpinner.add(fourthJumpingBall1)

    fourthJumpingBall2 = fourthCreateBall(0.8, 0xe01f70);
    fourthJumpingBall2.position.x = 5;

    fourthSpinner.add(fourthJumpingBall2)



    fourthSpin.add(fourthPoll);

    fourthSpin.position.x = -10;
    fourthSpin.position.y = -5;
    fourthSpin.position.z = 10;

    fourthSpinner.position.x = -10;
    fourthSpinner.position.y = -5;
    fourthSpinner.position.z = 10;

    scene.add(fourthSpin);
    scene.add(fourthSpinner);
    fourthInicialJumpingBallPos = fourthJumpingBall1.position.y;

}

let fourthSpinRotationSpeed = .01;
let fourthJumping = 0;

function animateFourth(){
    fourthSpin.rotation.y += fourthSpinRotationSpeed;
    fourthJumping += 0.02;
    fourthJumpingBall1.position.y = (3 * Math.cos(fourthJumping)) +  fourthInicialJumpingBallPos;
    fourthJumpingBall2.position.y = (3 * Math.cos(fourthJumping)) +  fourthInicialJumpingBallPos;
    fourthSpinner.rotation.y += -fourthSpinRotationSpeed;


}



function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));

    //-----------------First--------------

    createObject1();
    //-------------------------------------
    createObject3();


    //-------------Fourth------------------
    //fourthCreateSpin();
    //-------------------------------------

    createObject6();

    createObject2();

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
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
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
    animateObject3();

    //animateFourth();


    animateObject6();

    
    animateSecondObject();

    render();
    
    requestAnimationFrame(animate);
}

