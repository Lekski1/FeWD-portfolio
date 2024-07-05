import React, { useState } from 'react';
import { format } from 'date-fns';
import styles from '../css/css_index/comic.module.css';

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

const getComicId = async (email: string): Promise<string> => {
  const emailSearchParams = new URLSearchParams({ email });
  const response = await fetch(
    `https://fwd.innopolis.university/api/hw2?${emailSearchParams.toString()}`
  );
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  return doc.body.textContent?.trim() || '';
};

const getComic = async (idForComic: string): Promise<Comic> => {
  const comic_response = await fetch(
    `https://fwd.innopolis.university/api/comic?id=${idForComic}`
  );
  return await comic_response.json() as Comic;
};

const Comic: React.FC = () => {
  const [comicData, setComicData] = useState<Comic | null>(null);
  const [email, setEmail] = useState('');
  const [displayComic, setDisplayComic] = useState<'none' | 'flex'>('none');

  const getComicHandler = async () => {
    try {
      const idForComic = await getComicId(email);
      const comicData = await getComic(idForComic);
      setComicData(comicData);
      setDisplayComic('flex');
    } catch (error) {
      console.error('Error fetching comic:', error);
    }
  };

  return (
    <div id={styles.content}>
      <h1 id={styles.content_title}>Here you can relax a bit by getting jokes using your Innopolis mail</h1>
      <div className={styles.main_comic_block}>
        <div id={styles.comic_request}>
          <label className={styles.title_request} htmlFor="email">
            Enter Innopolis email:
            <input type="email" id={styles.email} className={styles.input_email} placeholder="e.example@innopolis.university" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button id={styles.get_comic_button} className={styles.button_comic_request} type="submit">
            Get comic
          </button>
        </div>
        <div id={styles.comic_response} style={{ display: displayComic }} >
          {comicData && (
            <>
              <img id={styles.comic_img} src={comicData.img} alt={comicData.alt} />
              <p id={styles.comic_name}>{comicData.safe_title}</p>
              <p id={styles.comic_description}>{comicData.alt}</p>
              <p id={styles.comic_date}>
                Date of publication:{' '}
                {format(new Date(`${comicData.year}-${comicData.month}-${comicData.day}`), 'PP')}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comic;
