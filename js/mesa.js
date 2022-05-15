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

//-----------------------------------Seventh---------------------------------------------------------
var seventhObject, seventhRing1, seventhBall1, seventhBall2;
function createObject7(){
    'use strict'
    seventhObject = new THREE.Object3D();
    seventhObject.position.set(-35, 10, -30);

    createSeventhRing1();
    createSeventhBall1();
    createSeventhBall2();
    scene.add(seventhObject);
}

function createSeventhRing1(){
    'use strict';

    const geometry = new THREE.TorusGeometry(8, 0.5, 20, 360, 360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    seventhRing1 = new THREE.Mesh(geometry,material);

    seventhRing1.rotation.x = Math.PI/2;
    seventhRing1.rotation.y = 0;
    seventhRing1.rotation.z = 0;

    seventhObject.add(seventhRing1);
}

function createSeventhBall1(){
    'use strict';
    const geometry = new THREE.SphereGeometry(1, 100, 100, 0, 360, 0, 180);
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    seventhBall1 = new THREE.Mesh( geometry, material );
    seventhBall1.position.set(-7.4, 1.3, 0);
    seventhObject.add(seventhBall1);
}

function createSeventhBall2(){
    'use strict';
    const geometry = new THREE.SphereGeometry(1, 100, 100, 0, 360, 0, 180);
    const material = new THREE.MeshToonMaterial( { color: 0xfc03c6 } );
    seventhBall2 = new THREE.Mesh( geometry, material );
    seventhBall2.position.set(7.4, 1.3, 0);
    seventhObject.add(seventhBall2);
}

let seventhObjectRotationSpeed = 0.05
function animateSeventhObject(){
    seventhObject.rotation.y += seventhObjectRotationSpeed
    seventhObject.rotation.z += seventhObjectRotationSpeed/1000
    seventhObject.rotation.x += seventhObjectRotationSpeed/1000
}

//----------------------------------Imposter---------------------------------------------
var imposterObject, imposterBelly, imposterHip, imposterBackPack, imposterLeg1, imposterLeg2, imposterVisor;
let imposterHight = 3, imposterRadious = 2, imposterColour = 0x800080 ;
function createImposter(){
    'use strinct'
    imposterObject = new THREE.Object3D();
    imposterObject.position.set(-65, 0, -20);
    imposterObject.rotation.x = -Math.PI/4;
    imposterObject.rotation.y = Math.PI/1.4;

    createImposterBelly();
    createImposterHip();
    createImposterLeg1();
    createImposterLeg2();
    createImposterVisor();
    createImposterBackpack();
    scene.add(imposterObject);
}

function createImposterBelly(){
    'use strinct'
    const geometry = new THREE.CapsuleGeometry(imposterRadious, imposterHight, 100, 100);
    const material = new THREE.MeshToonMaterial( { color: imposterColour } );
    imposterBelly = new THREE.Mesh(geometry, material);
    imposterBelly.position.set(0, 0, 0);
    imposterObject.add(imposterBelly);
}
function createImposterHip(){
    const geometry = new THREE.CylinderGeometry(imposterRadious, imposterRadious, imposterHight, 100, 100, false, 0, Math.PI*2);
    const material = new THREE.MeshToonMaterial( { color: imposterColour } );
    imposterHip = new THREE.Mesh(geometry, material);
    imposterHip.position.set(0, -imposterHight/2*1.4, 0);
    imposterObject.add(imposterHip);

}

function createImposterLeg1(){
    const geometry = new THREE.CapsuleGeometry(imposterRadious/2.8, imposterHight/1.5, 100, 100);
    const material = new THREE.MeshToonMaterial( { color: imposterColour } );
    imposterLeg1 = new THREE.Mesh(geometry, material);
    imposterLeg1.position.set(imposterRadious/1.55, -(imposterHight + imposterHight/2), 0);
    imposterObject.add(imposterLeg1);
}

function createImposterLeg2(){
    const geometry = new THREE.CapsuleGeometry(imposterRadious/2.8, imposterHight/1.5, 100, 100);
    const material = new THREE.MeshToonMaterial( { color: imposterColour } );
    imposterLeg2 = new THREE.Mesh(geometry, material);
    imposterLeg2.position.set(-imposterRadious/1.55, -(imposterHight + imposterHight/2), 0);
    imposterObject.add(imposterLeg2);
}

function createImposterVisor(){
    const geometry = new THREE.CylinderGeometry(imposterRadious*1.01, imposterRadious*1.01, imposterHight/2, 100, 100, true, -Math.PI/4, Math.PI/2);
    const material = new THREE.MeshToonMaterial( { color: 0x1ca8ff } );
    imposterVisor = new THREE.Mesh(geometry, material);
    imposterVisor.position.set(0, imposterHight/2.3, 0);
    imposterObject.add(imposterVisor);
}

function createImposterBackpack(){
    const geometry = new THREE.CapsuleGeometry(imposterRadious/1.5, imposterHight/1.5, 100, 100);
    const material = new THREE.MeshToonMaterial( { color: imposterColour } );
    imposterBackPack = new THREE.Mesh(geometry, material);
    imposterBackPack.position.set(0, -imposterHight/4, -imposterRadious);
    imposterObject.add(imposterBackPack);
}

let imposterSpeed = 0.01, imposterCosMoving = 0, imposterLegsMoving = 0;
function animateImposter(){
    'use strict';
    imposterCosMoving += imposterSpeed
    imposterLegsMoving += imposterSpeed*6
    imposterObject.position.x += Math.cos(imposterCosMoving)/20;
    imposterLeg1.position.z += Math.cos(imposterLegsMoving)/60;
    imposterLeg2.position.z += -Math.cos(imposterLegsMoving)/60;
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



function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));

    //-----------------First--------------
    firstCreateRing1();
    firstCreateRing2();
    firstCreateBall(0,0,0);
    //-------------------------------------
    createObject6();
    createObject2();
    createImposter();
    createObject7();
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
    animateObject6();
    atom.position.y += 0.01;
    animateSecondObject();
    animateSeventhObject();
    animateImposter();
    render();
    
    requestAnimationFrame(animate);
}

