"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GeodesicSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // ── 1. Renderer ────────────────────────────────────────────────────────
    // antialias only when pixel-ratio < 2 (high-DPR screens already
    // supersample, so MSAA wastes GPU cycles for no visible benefit)
    const dpr = Math.min(window.devicePixelRatio, 2);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: dpr < 2,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(dpr);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ── 2. Scene & Camera ──────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6.8);

    // ── 3. Responsive resize ───────────────────────────────────────────────
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = container.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height || 550;
        if (w === 0 || h === 0) continue;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    // ── 4. Lighting ────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xaaaaff, 0.6, 20);
    pointLight.position.set(-3, -2, 3);
    scene.add(pointLight);
    const rimLight = new THREE.PointLight(0xffffff, 0.3, 20);
    rimLight.position.set(0, -5, -3);
    scene.add(rimLight);

    // ── 5. Shared materials (NOT cloned per triangle — huge GPU savings) ───
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9,  roughness: 0.2 });
    const darkMat  = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8,  roughness: 0.3 });
    const lightMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.7,  roughness: 0.15 });
    const rodMat   = new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 0.95, roughness: 0.1 });
    const ballMat  = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, metalness: 0.95, roughness: 0.05 });
    // palette index cycles → same material instance is REUSED, not cloned
    const palette  = [darkMat, darkMat, darkMat, metalMat, metalMat, lightMat];

    // ── 6. Geometry build ──────────────────────────────────────────────────
    const group = new THREE.Group();
    scene.add(group);

    const icoGeo  = new THREE.IcosahedronGeometry(2.3, 2);
    const posAttr = icoGeo.attributes.position;
    const triCount = posAttr.count / 3;

    interface MeshUserData {
      homePos: THREE.Vector3;
      explodeDir: THREE.Vector3;
      phase: number;
    }

    const allObjects: THREE.Mesh[] = [];
    // Reuse a single low-poly ball geometry for every connector ball
    // (5×5 segments instead of 8×8 — ~60 % fewer verts, invisible at this scale)
    const sharedBallGeo = new THREE.SphereGeometry(0.05, 5, 5);
    const sharedRodGeo  = new THREE.CylinderGeometry(0.02, 0.02, 1, 6); // scaled per rod

    for (let i = 0; i < triCount; i++) {
      const ia = i * 3, ib = i * 3 + 1, ic = i * 3 + 2;
      const vA = new THREE.Vector3(posAttr.getX(ia), posAttr.getY(ia), posAttr.getZ(ia));
      const vB = new THREE.Vector3(posAttr.getX(ib), posAttr.getY(ib), posAttr.getZ(ib));
      const vC = new THREE.Vector3(posAttr.getX(ic), posAttr.getY(ic), posAttr.getZ(ic));

      const center = new THREE.Vector3().addVectors(vA, vB).add(vC).divideScalar(3);
      const normal = new THREE.Vector3()
        .crossVectors(
          new THREE.Vector3().subVectors(vB, vA),
          new THREE.Vector3().subVectors(vC, vA),
        )
        .normalize();

      const shrunken = [vA, vB, vC].map(v =>
        new THREE.Vector3().lerpVectors(v, center, 0.12)
      );

      // Triangle panel geometry
      const localA = shrunken[0].clone().sub(center);
      const localB = shrunken[1].clone().sub(center);
      const localC = shrunken[2].clone().sub(center);
      const verts = new Float32Array([
        localA.x, localA.y, localA.z,
        localB.x, localB.y, localB.z,
        localC.x, localC.y, localC.z,
        localA.x, localA.y, localA.z,
        localC.x, localC.y, localC.z,
        localB.x, localB.y, localB.z,
      ]);
      const triGeo = new THREE.BufferGeometry();
      triGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
      triGeo.computeVertexNormals();

      // Use shared material from palette — no clone()
      const mesh = new THREE.Mesh(triGeo, palette[i % palette.length]);
      mesh.position.copy(center);
      mesh.castShadow = true;
      mesh.userData = {
        homePos: center.clone(),
        explodeDir: normal.clone(),
        phase: Math.random() * Math.PI * 2,
      } satisfies MeshUserData;
      group.add(mesh);
      allObjects.push(mesh);

      // Rods & balls
      ([[shrunken[0], shrunken[1]], [shrunken[1], shrunken[2]], [shrunken[2], shrunken[0]]] as [THREE.Vector3, THREE.Vector3][]).forEach(([p1, p2]) => {
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        // Scale the shared 1-unit-long rod to the actual edge length
        const rod = new THREE.Mesh(sharedRodGeo, rodMat);
        rod.position.copy(mid);
        rod.scale.set(1, len, 1);
        rod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        rod.castShadow = true;
        rod.userData = {
          homePos: mid.clone(),
          explodeDir: mid.clone().normalize(),
          phase: Math.random() * Math.PI * 2,
        } satisfies MeshUserData;
        group.add(rod);
        allObjects.push(rod);

        [p1, p2].forEach(pt => {
          // Reuse shared ball geometry — just move position
          const ball = new THREE.Mesh(sharedBallGeo, ballMat);
          ball.position.copy(pt);
          ball.castShadow = true;
          ball.userData = {
            homePos: pt.clone(),
            explodeDir: pt.clone().normalize(),
            phase: Math.random() * Math.PI * 2,
          } satisfies MeshUserData;
          group.add(ball);
          allObjects.push(ball);
        });
      });
    }

    // ── 7. Animation — paused when off-screen ──────────────────────────────
    const clock = new THREE.Clock();
    let animationFrameId = 0;
    let isVisible = true; // assume visible on mount

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Skip render when sphere is scrolled out of view
      if (!isVisible) return;

      const dt = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      const loopFactor = 0.5 * (Math.sin(elapsedTime * 1.2) + 1);
      const e = loopFactor < 0.5
        ? 4 * loopFactor * loopFactor * loopFactor
        : 1 - Math.pow(-2 * loopFactor + 2, 3) / 2;

      const maxExplodeDistance = 0.3;

      allObjects.forEach(obj => {
        const { homePos, explodeDir: dir, phase } = obj.userData as MeshUserData;
        const wobble = Math.sin(elapsedTime * 1.5 + phase) * 0.008 * e;
        obj.position.copy(homePos).addScaledVector(dir, e * maxExplodeDistance + wobble);
      });

      group.rotation.y -= dt * 0.2;
      group.rotation.x = Math.sin(elapsedTime * 0.15) * 0.06;

      renderer.render(scene, camera);
    };

    // IntersectionObserver — stop RAF when sphere is out of viewport
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        // Resume the clock so elapsed time doesn't jump after re-entering
        if (isVisible) clock.getDelta(); // flush stale delta
      },
      { threshold: 0.05 },
    );
    visibilityObserver.observe(container);

    animate();

    // ── 8. Cleanup ─────────────────────────────────────────────────────────
    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose every triangle geometry
      allObjects.forEach(obj => {
        if (obj.geometry !== sharedBallGeo && obj.geometry !== sharedRodGeo) {
          obj.geometry.dispose();
        }
      });

      // Dispose shared geometries once
      sharedBallGeo.dispose();
      sharedRodGeo.dispose();
      icoGeo.dispose();

      // Dispose shared materials once
      metalMat.dispose();
      darkMat.dispose();
      lightMat.dispose();
      rodMat.dispose();
      ballMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[550px] sm:h-[600px] relative flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="w-full h-full block absolute top-0 left-0" />
    </div>
  );
}