import React, {useEffect, useState} from 'react'
import useKeyboard from '../hooks/useKeyboard';
import useStore from '../hooks/useStore';
import {dirtImg, glassImg, grassImg, woodImg, logImg} from "../assets/textures/images"

const textureImages = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg
}

function TextureSlector() {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => ([
    state.texture,
    state.setTexture
  ]));
  const {dirt, grass, glass, log, wood} = useKeyboard();
  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    const pressedTextures = Object.entries(textures).find(([k, v]) => v)
    if(pressedTextures){
      setTexture(pressedTextures[0])
    }
  }, [dirt, grass, glass, log, wood])

  useEffect(() => {
      const visibilityTimeout = setTimeout(()=> {
          setVisible(false)
      }, 2000)
        setVisible(true)
        return () => {
          clearTimeout(visibilityTimeout)
        }
  }, [activeTexture])
  return visible && (
    <div className=' absolute flex top-[80%] left-[50%] translate-x-[-50%] translate-y-[-20%] '>{
      Object.entries(textureImages).map(([k, src]) => {
        return <img key={k} alt={k} src={src} className={`${k === activeTexture ? " scale-125 border-[2px]": ""} w-12 h-12`}/>
      })
    }</div>
  )
}

export default TextureSlector