import marsImg from "./mars.jpg"
import sunImg from "./sun.jpg"
import earthImg from "./earth.jpg";


import { NearestFilter, TextureLoader } from "three"

const marsTexture = new TextureLoader().load(marsImg)
const sunTexture = new TextureLoader().load(sunImg);
const earthTexture = new TextureLoader().load(earthImg);

marsTexture.magFilter = NearestFilter;
sunTexture.magFilter = NearestFilter;
earthTexture.magFilter = NearestFilter;

export {marsImg, marsTexture, sunImg, sunTexture, earthImg, earthTexture};