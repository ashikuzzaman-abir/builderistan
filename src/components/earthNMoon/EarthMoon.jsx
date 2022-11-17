import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";

import { useGLTF, OrbitControls } from "@react-three/drei";

const Box = () => {
  const box = useRef();
  return (
		<mesh ref={box} position={[0, 0, 0]} rotation={[10,35,0]}>
			<boxBufferGeometry attach='geometry' args={[1,1,1]} />
			<meshStandardMaterial attach='material' color='hotpink' />
		</mesh>
	);
}

const Model = () => {
  const { nodes, materials } = useGLTF(
		"https://api.readyplayer.me/v1/avatars/637659e1152ef07e24263c84.glb"
	);
  const ref = useRef();
  console.log();
    return (
      <>
      
        <primitive object={nodes.Scene} position={[0,-2,0]} scale={2} />
      </>
    )

}

function EarthMoon() {

	return (
		<div className='relative w-screen h-screen'>
			<Canvas
				camera={{
					fov: 50,
					position: [0, 1, 5],
				}}
			>
				<OrbitControls></OrbitControls>
				<ambientLight intensity={0.8} />
				<pointLight />

				{/* <Box></Box> */}
				<Model />
			</Canvas>
		</div>
	);
}

export default EarthMoon;
