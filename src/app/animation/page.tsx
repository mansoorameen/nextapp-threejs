"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    rotatingCube();
  }, []);

  function rotatingCube() {
    // initialize
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({});
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);
    camera.position.z = 5;

    // create object/mesh and add to scene
    const geometry = new THREE.BoxGeometry();
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff5252 }), // Red
      new THREE.MeshBasicMaterial({ color: 0x29b6f6 }), // Blue
      new THREE.MeshBasicMaterial({ color: 0x4caf50 }), // Green
      new THREE.MeshBasicMaterial({ color: 0xffeb3b }), // Yellow
      new THREE.MeshBasicMaterial({ color: 0xff6e40 }), // Orange
      new THREE.MeshBasicMaterial({ color: 0x7e57c2 }), // Purple
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Render the scene and camera
    const renderScene = () => {
      const targetPosition = 2;
      const bounceDuration = 8000;
      const t = (Date.now() % bounceDuration) / bounceDuration;
      const bounce = targetPosition * Math.abs(Math.sin(Math.PI * 2 * t)); // absolute value to make it bounce

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.y = bounce;

      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };

    renderScene();
  }

  return <div ref={containerRef} />;
};

export default ThreeScene;
