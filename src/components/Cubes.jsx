import React from 'react'
import Cube from './Cube';
import useStore from '../hooks/useStore'
function Cubes() {
  const [cubes] = useStore((state) => ([
    state.cubes
  ]))
  // console.log(cubes);
  return cubes?.map(({key, pos, texture}) => (
    <Cube key={key} position={pos} texture={texture}/>
  ))
}

export default Cubes