import * as ui from "./ui.js";
import * as data from "./data.js";

data.fetchDogImage()
console.log(data.fetchDogImage());

function init() {
ui.$button.addEventListener("click", data.fetchDogImage);
}


export {
    init
}