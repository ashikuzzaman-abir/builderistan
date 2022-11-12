import { useState } from "react";
import "./App.css";
import gameCfg from "./configs/game.config";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./components/FPV";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubes from "./components/Cubes";
import TextureSlector from "./components/TextureSlector";
import useStore from "./hooks/useStore";
function App() {
	const [texture] = useStore((state) => [state.texture])

	// console.log("textur ", texture);
	return (
		<div className='App relative w-screen h-screen'>
			<Canvas>
				<Sky sunPosition={gameCfg.sunPosition} />
				<ambientLight intensity={0.5} />
				<FPV />
				<Physics gravity={[0, -9.8, 0]}>
					<Ground/>
					<Player/>
					<Cubes/>
				</Physics>
			</Canvas>
			<div className="curser absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-800  text-3xl select-none">+</div>
			<TextureSlector />
		</div>
	);
}

export default App;
