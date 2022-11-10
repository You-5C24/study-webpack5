import { helloWorld } from "./hello-world";
import imgsrc from "../assets/01.png";
import svgSrc from "../assets/02.svg";
import txt from "../assets/demo.txt";
import jpgSrc from "../assets/03.jpeg";
import "./style.css";
import "./style.less";
import Data from "../assets/data.xml";
import Note from "../assets/note.csv";
import _ from "lodash";
import "./async-module.js";

console.log(_.join(["index", "module", "bundle"], " "));

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
block.classList.add("block-bg");
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.src = jpgSrc;
document.body.appendChild(img3);

document.body.classList.add("hello");

console.log(Data);
console.log(Note);

const button = document.createElement("button");
button.textContent = "click";
button.addEventListener("click", () => {
  import(
    /* webpackChunkName: 'math', webpackPrefetch: true */ "./math.js"
  ).then(({ add }) => {
    console.log(add(4, 5));
  });
});
document.body.appendChild(button);
