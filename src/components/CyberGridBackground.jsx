import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CyberGridBackground = () => {
  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('cyber-bg').appendChild(renderer.domElement);

    camera.position.z = 5;

    // Grid lines (hex effect)
    const gridHelper = new THREE.GridHelper(100, 200, '#B8EF43', '#B8EF43');
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;

    const animate = function () {
      requestAnimationFrame(animate);
      gridHelper.rotation.z += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      document.getElementById('cyber-bg').innerHTML = '';
    };
  }, []);

  return (
    <div id="cyber-bg" className="absolute inset-0 z-0 pointer-events-none" />
  );
};

export default CyberGridBackground;
