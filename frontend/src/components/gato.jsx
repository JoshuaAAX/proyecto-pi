import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Gato(props) {
  const { nodes, materials } = useGLTF("/gato.glb");
  return (
    <group {...props} dispose={null} scale={3}>
      <group position={[-1.3, 0, 0]} rotation={[-0.58, 0.54, -0.8]}>
        <group position={[0,0, 0.0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gato.glb");
