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
import Mars from "./components/Mars";
import BuilderistanMain from "./components/BuilderistanMain";
import EarthMoon from "./components/earthNMoon/EarthMoon";
function App() {
	// console.log("textur ", texture);
	return (
		<div>
			<BuilderistanMain />
			{/* <EarthMoon /> */}
		</div>
	);
}

export default App;
