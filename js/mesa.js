/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

var ball;

var testi, testi2, leBall1;


function addTableLeg(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CubeGeometry(2, 6, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    
    ball.add(mesh);
    ball.position.set(x, y, z);
    
    scene.add(ball);
}


function createTable(x, y, z) {
    'use strict';
    
    var table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, -1, -8);
    addTableLeg(table, -25, -1, 8);
    addTableLeg(table, 25, -1, 8);
    addTableLeg(table, 25, -1, -8);
    
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}


function createTesti(){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0x1ca8ff});

    testi = new THREE.Mesh(geometry,material);
    testi.rotation.x = Math.PI / 2;
    testi.rotation.y = 0;
    testi.rotation.z = 0;


    scene.add(testi);
}


function createBall1(x, y ,z){
    'use strict';

    const geometry = new THREE.SphereGeometry(1,100,100,0,360,0,180);
    const material = new THREE.MeshNormalMaterial({color: 0x5bba1a});
    leBall1 = new THREE.Mesh(geometry,material);

    leBall1.position.x = x;
    leBall1.position.y = y;
    leBall1.position.z = z;


    scene.add(leBall1);

}

function createTesti2(){
    'use strict';

    const geometry = new THREE.TorusGeometry(1.24,0.20,8,360,360);

    const material = new THREE.MeshToonMaterial({color: 0xde28db});

    testi2 = new THREE.Mesh(geometry,material);
    testi2.rotation.x = Math.PI / 2;
    testi2.rotation.y = 0;
    testi2.rotation.z = 0;


    scene.add(testi2);
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));

    //createTable(0, 8, 0);
    //createBall(0, 0, 15);
    createTesti();
    createTesti2();
    createBall1(0,0,0);

}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 10;
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


var loler = 0;
var heyo = 0;
var leBallSpeed = 0;
function animate() {

    'use strict';
    loler += 0.007;
    heyo += 0.002;
    leBallSpeed += 0.05;
    let lol = 3 * (Math.cos(loler));
    testi.scale.set(lol,lol,lol);
    testi.position.y = Math.abs(3 * Math.sin(loler));
    let lol1 = 5 * (Math.sin(loler));
    testi2.scale.set(lol1,lol1,lol1);
    testi2.position.y = Math.abs(5 * Math.cos(loler));

    //---------------------------------------------------------------------
    leBall1.position.y = 4 * Math.sin(leBallSpeed);
    //---------------------------------------------------------------------




    /*if (ball.userData.jumping) {
        ball.userData.step += 0.04;
        ball.position.y = Math.abs(30 * (Math.sin(ball.userData.step)));
        ball.position.z = 15 * (Math.cos(ball.userData.step));
    }*/
    render();
    
    requestAnimationFrame(animate);
}

