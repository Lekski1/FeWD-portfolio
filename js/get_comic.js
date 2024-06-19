const getComicButton = document.getElementById('get_comic_button');
const emailInput = document.getElementById('email');
const comic_response = document.getElementById('comic_response');
const comic_name = document.getElementById('comic_name');
const comic_description = document.getElementById('comic_description');
const comic_img = document.getElementById('comic_img');
const comic_date = document.getElementById('comic_date');

getComicButton.addEventListener('click', async () => {
const email = emailInput.value;
comic_response.style.display = 'none';

try {
    const idForComic = await get_comic_id(email);
    const comicData = await get_comic(idForComic);
    data_display(comicData);
    comic_response.style.display = 'flex';
} catch (error) {
    console.error('Error fetching comic:', error);
}
});

async function get_comic_id(email) {
    let emailSearchParams = new URLSearchParams({ email });
    let response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailSearchParams}`);
    let pars = await response.text();
    let parser = new DOMParser();
    let doc = parser.parseFromString(pars, 'text/html');
    return doc.body.textContent.trim();
}

async function get_comic(idForComic) {
    let comic_response = await fetch(`https://fwd.innopolis.university/api/comic?id=${idForComic}`);
    return await comic_response.json();
}

function data_display(comicData) {
    comic_name.textContent = comicData.safe_title;
    comic_description.textContent = comicData.alt;
    comic_img.src = comicData.img;
    comic_img.alt = comicData.alt;
    comic_date.textContent = `Data of publication: ${new Date(`${comicData.year}-${comicData.month}-${comicData.day}`).toLocaleDateString()}`;
}