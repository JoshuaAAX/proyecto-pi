import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Modelo = (props) => {
  const { nodes, materials } = useGLTF(
    "../../assets/egypt_-_small_decorative_statue.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
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
      </group>
    </group>
  );
};

useGLTF.preload("../../assets/egypt_-_small_decorative_statue.glb");

export default Modelo;