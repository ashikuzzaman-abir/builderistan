import React from 'react'
import {useBox} from "@react-three/cannon"
import * as textures from "../assets/textures/textures"
function Cube({position, texture}) {
  const [ref] = useBox(() => ({
    type: "Static",
    position: position
  }));
  const activeTexture = textures[texture]
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry"/>
      <meshStandardMaterial attach="material" map={activeTexture}/>
    </mesh>
  )
}

export default Cube