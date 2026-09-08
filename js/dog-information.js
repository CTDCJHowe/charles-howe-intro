const imageButton = document.getElementById('image-button');
const breedsButton = document.getElementById('breeds-button');
const imageView = document.getElementById('image-view');
const breedsView = document.getElementById('breeds-view');
const dogImage = document.getElementById('dog-image');
const breedsList = document.getElementById('breeds-list');
const status = document.getElementById('status');

function showStatus(message) {
	status.textContent = message;
}

function showView(viewToShow) {
	const showingImage = viewToShow === imageView;
	imageView.hidden = !showingImage;
	breedsView.hidden = showingImage;
}

async function loadRandomDog() {
	showView(imageView);
	showStatus('Loading a random dog...');

	try {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		const data = await response.json();
		dogImage.src = data.message;
		dogImage.alt = 'A randomly selected dog';
		dogImage.hidden = false;
		showStatus('Random dog loaded.');
	} catch (error) {
		dogImage.hidden = true;
		showStatus('Sorry, the random dog could not be loaded. Please try again.');
		console.error(error);
	}
}

async function loadBreeds() {
	showView(breedsView);
	showStatus('Loading dog breeds...');
	breedsList.replaceChildren();

	try {
		const response = await fetch('https://dog.ceo/api/breeds/list/all');
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		const data = await response.json();
		Object.keys(data.message).sort().forEach((breed) => {
			const breedItem = document.createElement('li');
			breedItem.textContent = breed;
			breedsList.appendChild(breedItem);
		});
		showStatus('Dog breeds loaded.');
	} catch (error) {
		showStatus('Sorry, the dog breeds could not be loaded. Please try again.');
		console.error(error);
	}
}

imageButton.addEventListener('click', loadRandomDog);
breedsButton.addEventListener('click', loadBreeds);
