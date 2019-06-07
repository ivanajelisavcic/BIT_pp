function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((dogData) => renderDogImage(dogData.message))
        
}


export {
fetchDogImage
}
