import React from 'react'
import {useFrame } from "@react-three/fiber";
import {useSphere} from "@react-three/cannon"
import {marsTexture, sunTexture, earthTexture} from "./../assets/planetTextures/images"

function Mars() {
  const [ref, api] = useSphere(()=> ({
    type: "Static",
    mass: 10,
    position: [-30,25,-60],
    
  }))
  useFrame(({clock}) => {
    api.rotation.set(0, clock.elapsedTime * 1.25, 0);
  })
  return (
    <mesh ref={ref} scale={10}>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={earthTexture}/>
    </mesh>
  )
}

export default Mars