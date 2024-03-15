let generateImageForm = document.getElementById('generate-image-form');
let formInput = document.getElementById('input-value');
let imageContainerText = document.getElementById('imageContainerText');
let imageGenerated = document.getElementById('generated-image');
let imageContainer = document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        let response = await fetch(`use_an_api_endpoint_here/${category}`);
        if (!response.ok) {
            throw new Error('Unable to fetch the data');
        }
        let responseData = await response.json();
        imageContainerText.innerText = "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = responseData.url;
        console.log(responseData.url);
    } catch (error) {
        console.error(error);
    }
}

generateImageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText.trim() !== "") {
        await fetchImages(enteredText);
    } else {
        imageContainerText.innerText = "Input field cannot be empty!";
    }
});
