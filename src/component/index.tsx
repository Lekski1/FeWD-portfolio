import React from 'react';
import  styles  from '../css/css_index/index.module.css';
import indexpost from '../json/indexpost.json'

interface IndexPost {
    id: number; 
    foto: string; 
    description: string;
}


const Index: React.FC = () => {
    const posts: IndexPost[] = indexpost as IndexPost[]
    return (
        <div id={styles.content}>
            <h1 id={styles.content_title}>Hi! The text below will help you get to know me a little more and understand how I live</h1>
            {posts.map((post) => (
                <div key={post.id} className={styles.contents_block}>
                    <div className={styles.content_foto}>
                        <img id={styles.photo} src={post.foto} alt="#" />
                    </div>
                    <div className={styles.content_text}>
                        <p className={styles.description}>{post.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;