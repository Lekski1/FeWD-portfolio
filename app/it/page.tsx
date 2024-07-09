import styles from '../../styles/css_index/it.module.css';
import React from 'react';

export default function It() {
    return (
        <div id={styles.content}>
            <div id={styles.main_block}>
                <div id={styles.left_block}>
                    <div id={styles.foto}>
                        <img id={styles.my_foto} src="/img/it/it_foto1.jpg" alt="my foto" />
                    </div>
                    <div id={styles.skills}>
                        <p id={styles.technical_skills}>Technical skills:</p>
                        <p id={styles.all_skills}>
                            OSI model, Linux, Python, Golang, SQL, Flutter, Dart, HTML, CSS, PHP,
                            PhpMyAdmin, Oracle, Excel, Grafana Loki, Promtail, Microsoft Access,
                            Trello, Notion, Figma
                        </p>
                    </div>
                    <div id={styles.skills} style={{ marginTop: '20px' }}>
                        <p id={styles.technical_skills}>Soft skills:</p>
                        <p id={styles.all_skills}>
                            Teamwork <br />
                            Fast learning <br />
                            Communicativeness <br />
                            Leadership qualities
                        </p>
                    </div>
                    <div id={styles.skills} style={{ marginTop: '20px' }}>
                        <p id={styles.technical_skills}>Knowledge of languages:</p>
                        <p id={styles.all_skills}>
                            English B1 <br />
                            Polish language B2 <br />
                            Russian language <br />
                            Lezgian language
                        </p>
                    </div>
                    <div id={styles.skills} style={{ marginTop: '20px' }}>
                        <p id={styles.technical_skills}>Technical profiles:</p>
                        <a
                            href="https://leetcode.com/eldart98764/"
                            className={styles.technical_profiles_link}
                        >
                            <img src="/icon/leetcode.png" alt="Contact" /> Leetcode
                        </a>
                        <a
                            href="https://github.com/Mametov23"
                            className={styles.technical_profiles_link}
                        >
                            <img src="/icon/github.png" alt="Contact" /> GitHub
                        </a>
                    </div>
                </div>
                <div id={styles.right_bloc}>
                    <div id={styles.experience_block}>
                        <p id={styles.my_name}>Mametov Eldar Robertovich</p>
                        <div id={styles.birth_and_residence}>
                            <p id={styles.birth_and_residence_text}>Birth day: 04 july 2003</p>
                            <p id={styles.birth_and_residence_text}>City of residence: Innopolis</p>
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <p className={styles.main_title}>Work experience:</p>
                        <p className={styles.submain_title}>Telegram Bot</p>
                        <p className={styles.experience_description}>
                            {' '}
                            I wrote a telegram bot that edits an excel file and outputs it in txt
                            format in python for a company providing proxy and vpn services. I used
                            numpy, pandas, csv, telebot, os libraries, etc.
                        </p>
                    </div>
                    <div className={styles.experience}>
                        <p className={styles.main_title}>Education:</p>
                        <p className={styles.submain_title}>Innopolis University 2022-2024</p>
                        <p className={styles.experience_description}>
                            The training was conducted in English. The subjects that were important
                            to me were operating system, machine learning, system and network
                            administration, distributed and network programming, and others.
                        </p>
                        <p className={styles.submain_title}>
                            {' '}
                            Wyższa Szkoła Informatyki Stosowanej i Zarządzania pod auspicjami
                            Polskiej Akademii Nauk (WIT) 2021-2022
                        </p>
                        <p className={styles.experience_description}>
                            The training was conducted in Polish. My main disciplines were python,
                            algorithm construction and analysis, computer technology and networking,
                            java, databases, organizational psychology and operating systemsd
                        </p>
                    </div>
                    <div className={styles.experience}>
                        <p className={styles.main_title}>About me:</p>
                        <p className={styles.experience_description}>
                            Since 4th grade (when minecraft didn not start on my old PC and I
                            decided to make my own game by downloading the game maker studio game
                            engine), I was interested in programming, and already at a more mature
                            age I decided that this is exactly what I want to do in my life.
                            <br />
                            Studying has never been a problem for me, I am easy to learn and grasp
                            learning material on the fly. I am a sociable and responsible person, I
                            easily join the team, and I also have some skills in organizing a team
                            in the company, thanks to the material studied at the university.
                            <br />
                            At the moment, I am looking for my first official job to gain more
                            serious experience in the IT field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
