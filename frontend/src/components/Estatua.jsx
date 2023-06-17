import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Estatua(props) {
  const { nodes, materials } = useGLTF("/estatua.gltf");
  return (
    
    <group {...props} dispose={null} scale={0.80}>
      <group
        position={[5.4, -9.13, 14.53]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/estatua.gltf");