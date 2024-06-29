import {format} from 'date-fns'




interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}





const getComicButton = document.getElementById('get_comic_button') as HTMLButtonElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const comic_response = document.getElementById('comic_response') as HTMLDivElement;
const comic_name = document.getElementById('comic_name') as HTMLHeadingElement;
const comic_description = document.getElementById('comic_description') as HTMLParagraphElement;
const comic_img = document.getElementById('comic_img') as HTMLImageElement;
const comic_date = document.getElementById('comic_date') as HTMLParagraphElement;

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


async function get_comic_id(email:string): Promise<string>{
    const emailSearchParams = new URLSearchParams({ email });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailSearchParams.toString()}`);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.body.textContent?.trim() || ''
}

async function get_comic(idForComic: string): Promise<Comic>{
    const comic_response = await fetch(`https://fwd.innopolis.university/api/comic?id=${idForComic}`);
    const comicData = await comic_response.json();
    return comicData as Comic;
}

function data_display(comicData: Comic): void{
    comic_name.textContent = comicData.safe_title;
    comic_description.textContent = comicData.alt;
    comic_img.src = comicData.img;
    comic_img.alt = comicData.alt;
    comic_date.textContent = `Date of publication: ${format(new Date(`${comicData.year}-${comicData.month}-${comicData.day}`), 'PPP')}`;
}

