import React from 'react'
import {usePlane} from "@react-three/cannon";
import {groundTexture} from "./../assets/textures/textures"
import { NearestFilter, RepeatWrapping } from 'three';
import useStore from '../hooks/useStore';
function Ground() {
  const [ref] = usePlane(()=>({
    rotation: [-Math.PI / 2 ,0,0], position:[0,-0.5,0]
  }))

  const [addCube] = useStore((state)=> [state.addCube])
  
  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(1000,1000)
  return (
    <mesh ref={ref} onClick={(e) => {
      e.stopPropagation();
      const [x, y, z] = Object.values(e.point).map(val=> Math.ceil(val));
      addCube(x,y,z);
    }}>
      <planeBufferGeometry attach='geometry' args={[1000,1000]}/>
      <meshStandardMaterial attach='material' map={groundTexture}/>
    </mesh>
  )
}

export default Ground