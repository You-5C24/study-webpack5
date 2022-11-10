import { helloWorld } from "./hello-world";
import imgsrc from "../assets/01.png";
import svgSrc from "../assets/02.svg";
import txt from "../assets/demo.txt";
import jpgSrc from "../assets/03.jpeg";

helloWorld();

const img = document.createElement("img");
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.src = svgSrc;
img2.style.cssText = "width:300px;height:300px";
document.body.appendChild(img2);

const block = document.createElement("div");
block.textContent = txt;
block.style.cssText = "width: 300px;height: 300px;background-color:pink;";
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.src = jpgSrc;
document.body.appendChild(img3);
