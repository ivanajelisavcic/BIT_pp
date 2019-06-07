
const $body = document.querySelector(".container");
const $button = document.querySelector("#button");

function renderDogImage(imageUrl) {
   const $image = document.createElement("img");
    $image.setAttribute("src", imageUrl);

    $body.appendChild($image);
}



export {
    $button,
    renderDogImage
}