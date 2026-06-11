'use client'

import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

const o = new THREE.Object3D();

export function Bubbles({
  count = 600,
  speed = 0.8,
  bubbleSize = 0.025,
  opacity = 0.2,
  repeat = true,
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const bubbleSpeed = useRef(new Float32Array(count));
  const bubbleXSpeed = useRef(new Float32Array(count));
  const bubbleZSpeed = useRef(new Float32Array(count));
  const minSpeed = speed * 0.0004;
  const maxSpeed = speed * 0.0012;

  const geometry = new THREE.SphereGeometry(bubbleSize, 6, 6);
  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity,
    color: '#aaddff',
    emissive: '#224466',
    emissiveIntensity: 0.05,
  });

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    for (let i = 0; i < count; i++) {
      // Espalha por TODO o espaço da tela
      o.position.set(
        gsap.utils.random(-8, 8),   // X: cobre toda a largura
        gsap.utils.random(-5, 6),   // Y: cobre toda a altura
        gsap.utils.random(-10, 10)  // Z: profundidade
      );
      o.updateMatrix();
      mesh.setMatrixAt(i, o.matrix);
      
      bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
      bubbleXSpeed.current[i] = gsap.utils.random(-0.003, 0.003);
      bubbleZSpeed.current[i] = gsap.utils.random(-0.003, 0.003);
    }
    mesh.instanceMatrix.needsUpdate = true;

    return () => {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    };
  }, [count, minSpeed, maxSpeed]);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      meshRef.current.getMatrixAt(i, o.matrix);
      o.position.setFromMatrixPosition(o.matrix);
      
      // Movimento principal: sobe
      o.position.y += bubbleSpeed.current[i];
      
      // Movimento lateral aleatório
      o.position.x += bubbleXSpeed.current[i];
      o.position.z += bubbleZSpeed.current[i];

      // Reset quando sai da tela
      if (o.position.y > 6 && repeat) {
        o.position.y = -5;
        o.position.x = gsap.utils.random(-8, 8);
        o.position.z = gsap.utils.random(-10, 10);
        bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
        bubbleXSpeed.current[i] = gsap.utils.random(-0.003, 0.003);
        bubbleZSpeed.current[i] = gsap.utils.random(-0.003, 0.003);
      }
      
      // Reposiciona se sair lateralmente
      if (Math.abs(o.position.x) > 9) {
        o.position.x = gsap.utils.random(-8, 8);
        o.position.y = gsap.utils.random(-5, 6);
      }
      
      if (Math.abs(o.position.z) > 12) {
        o.position.z = gsap.utils.random(-10, 10);
        o.position.y = gsap.utils.random(-5, 6);
      }

      o.updateMatrix();
      meshRef.current.setMatrixAt(i, o.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      position={[0, 0, 0]}
      material={material}
      geometry={geometry}
    />
  );
}