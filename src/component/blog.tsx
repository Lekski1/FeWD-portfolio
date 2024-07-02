import React from 'react';
import styles from '../css/css_index/blog.module.css';
import '../css/index.css'
import blogpost from '../json/blogpost.json'


interface BlogPost {
    id: number;
    foto: string;
    name: string;
    description: string;
    date: string;
}


const Blog: React.FC = () => {
    const posts: BlogPost[] = blogpost as BlogPost[];

    return (
        <div id={styles.content}>
            {posts.map((post) => (
                <div key={post.id} className={styles.post}>
                    <div className={styles.post_foto}>
                        <img src={post.foto} alt="blogpost" />
                    </div>
                    <div className={styles.post_text}>
                        <p id={styles.post_name}>{post.name}</p>
                        <p id={styles.post_description}>{post.description}</p>
                        <p id={styles.post_date}>{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;