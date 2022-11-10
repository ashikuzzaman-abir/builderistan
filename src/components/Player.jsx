import React, { useEffect, useRef } from 'react'
import {useThree, useFrame} from "@react-three/fiber"
import {useSphere} from "@react-three/cannon";
import { Vector3 } from 'three';
import useKeyboard from '../hooks/useKeyboard';

const JUMP_FORCE = 4;
const SPEED= 4;

function Player() {
  const {camera} = useThree()
  const [ref, api] = useSphere(() => ({
    mass:1,
    type: 'Dynamic',
    position: [0,1,0]
  }))
  const {moveBackward,moveForward,moveLeft,moveRight,jump} = useKeyboard();

  // console.log('actions', Object.entries(actions).filter(([k, v]) => v))

  useEffect(()=> {
    api.position.subscribe((p)=>{
      pos.current = p
    })
    api.velocity.subscribe((v)=>{
      vel.current = v
    })
  }, [api.position, api.velocity])

  const pos = useRef([0, 0, 0]);
  const vel = useRef([0, 0, 0]);


  useFrame(()=> {
    camera.position.copy( new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    // api.velocity.set(0,0,0)
    const direction = new Vector3()
    const frontVector = new Vector3(
			0,
			0,
			(moveForward ? 0 : 1) - (moveBackward ? 0 : 1)
		);
    const sideVector = new Vector3(
			(moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
			0,
			0
		);

    direction
    .subVectors(frontVector, sideVector)
    .normalize()
    .multiplyScalar(SPEED)
    .applyEuler(camera.rotation)
    
    api.velocity.set(direction.x, vel.current[1], direction.z)
    if (jump && Math.abs(vel.current[1]) < 0.05){
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  })
  return (
    <mesh ref={ref}>

    </mesh>
  )
}

export default Player