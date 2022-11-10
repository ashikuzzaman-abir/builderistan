import { dirtImg, logImg, glassImg, grassImg, woodImg } from "./images";
import { NearestFilter, TextureLoader } from "three";

const dirt = new TextureLoader().load(dirtImg);
const log = new TextureLoader().load(logImg);
const glass = new TextureLoader().load(glassImg);
const grass = new TextureLoader().load(grassImg);
const wood = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirt.magFilter = NearestFilter
grass.magFilter = NearestFilter
glass.magFilter = NearestFilter
wood.magFilter = NearestFilter
log.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

export {
	dirt,
	log,
	glass,
	grass,
	wood,
	groundTexture,
};
