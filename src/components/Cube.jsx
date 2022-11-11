import React from 'react'
import {useBox} from "@react-three/cannon"
import * as textures from "../assets/textures/textures"
import useStore from '../hooks/useStore';
function Cube({position, texture}) {
  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);
  const [ref] = useBox(() => ({
    type: "Static",
    position: position
  }));
  const activeTexture = textures[texture]
  return (
    <mesh ref={ref} onClick={
      (e) => {
        e.stopPropagation();
        const {x, y, z} = ref.current.position;
        const clickedFace = Math.floor(e.faceIndex / 2);
        // console.log("clied face: " + clickedFace);
        if(e.altKey){
          removeCube(x,y,z);
        }
        else if(clickedFace === 0){
          addCube(x+1, y, z);
          return;
        }
        else if (clickedFace === 1) {
					addCube(x - 1, y, z);
          return;
				}
        else if (clickedFace === 2) {
					addCube(x, y+1, z);
          return;
				}
        else if (clickedFace === 3) {
					addCube(x, y-1, z);
          return;
				}
        else if (clickedFace === 4) {
					addCube(x, y, z+1);
          return;
				}
        else {
					addCube(x , y, z-1);
          return
				}
        

      }
    }>
      <boxBufferGeometry attach="geometry"/>
      <meshStandardMaterial attach="material" map={activeTexture}/>
    </mesh>
  )
}

export default Cube