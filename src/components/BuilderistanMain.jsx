import React from "react";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Player";
import Cubes from "./Cubes";
import TextureSlector from "./TextureSlector";
import useStore from "../hooks/useStore";
import Mars from "./Mars";

function BuilderistanMain() {
	return (
		<div className='App relative w-screen h-screen'>
			<Canvas>
				<Sky sunPosition={[1000, 100, -1000]}></Sky>
				<ambientLight intensity={0.7} />
				<FPV />
				<Physics gravity={[0, -9.8, 0]}>
					<Ground />
					<Player />
					<Mars />
					<Cubes />
				</Physics>
			</Canvas>
			<div className='curser absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-800  text-3xl select-none'>
				+
			</div>
			<TextureSlector />
		</div>
	);
}

export default BuilderistanMain;
