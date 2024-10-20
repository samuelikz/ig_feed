import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female"/>
                    <div className={styles.authorInfo}>
                        <strong>Sofiah</strong>
                        <span>UX Designer</span>
                    </div>
                </div>
                <time title='11 de maio ás 08:13h' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href='#'>jane.design/doctorcare</a></p>

                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentario...'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}