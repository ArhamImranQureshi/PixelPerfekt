"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RotatingSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    // 2. Lighting (Scene ko lit up karne ke liye)
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const light = new THREE.DirectionalLight(0x00ffff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);

    // 3. Sphere Creation
    const geometry = new THREE.SphereGeometry(1.6, 64, 64);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x008080, 
      metalness: 0.7, 
      roughness: 0.2,
      wireframe: false 
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere; // Ref mein save kar diya

    // 4. Resize Handling
    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    const animate = () => {
      const id = requestAnimationFrame(animate);
      
      // Check kar rahe hain ki sphere load hua ya nahi
      if (sphereRef.current) {
        sphereRef.current.rotation.y += 0.01; // Spinning speed
      }
      
      renderer.render(scene, camera);
      return id;
    };

    const animationId = animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#020a0a]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}