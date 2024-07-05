import { format } from 'date-fns';
import styles from '@/styles/css_index/comic.module.css';
import fetch from 'node-fetch';
import cheerio from 'cheerio';


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

async function getComicId(email: string): Promise<string> {
  const emailSearchParams = new URLSearchParams({ email });
  const response = await fetch(
    `https://fwd.innopolis.university/api/hw2?${emailSearchParams.toString()}`,
  );
  const text = await response.text();
  const $ = cheerio.load(text);
  return $('body').text().trim();
}


async function getComic(idForComic: string): Promise<Comic> {
  const comicResponse = await fetch(
    `https://fwd.innopolis.university/api/comic?id=${idForComic}`,
  );
  return await comicResponse.json() as Comic;
}

export default async function ComicPage({ searchParams }: { searchParams: { email?: string } }) {
  const email = searchParams.email || '';
  let comicData: Comic | null = null;
  let displayComic = 'none';

  if (email) {
    try {
      const idForComic = await getComicId(email);
      comicData = await getComic(idForComic);
      displayComic = 'flex';
    } catch (error) {
      console.error('Error fetching comic:', error);
    }
  }

  return (
    <div id={styles.content}>
      <h1 id={styles.content_title}>
        Here you can relax a bit by getting jokes using your Innopolis mail
      </h1>
      <div className={styles.main_comic_block}>
        <form action="/comic" method="get">
          <div id={styles.comic_request}>
            <label className={styles.title_request} htmlFor="email">
              Enter Innopolis email:
              <input
                type="email"
                id={styles.email}
                className={styles.input_email}
                placeholder="e.example@innopolis.university"
                name="email"
                defaultValue={email}
              />
            </label>
            <button id={styles.get_comic_button} className={styles.button_comic_request} type="submit">
              Get comic
            </button>
          </div>
        </form>
        <div id={styles.comic_response} style={{ display: displayComic }}>
          {comicData && (
            <>
              <img id={styles.comic_img} src={comicData.img} alt={comicData.alt} />
              <p id={styles.comic_name}>{comicData.safe_title}</p>
              <p id={styles.comic_description}>{comicData.alt}</p>
              <p id={styles.comic_date}>
                Date of publication: {format(new Date(`${comicData.year}-${comicData.month}-${comicData.day}`), 'PP')}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}