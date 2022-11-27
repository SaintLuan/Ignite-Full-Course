import styles from './Comment.module.css';


// Icons Import
import { Trash, ThumbsUp } from 'phosphor-react';
import { ProfilePic } from './ProfilePic';
import { useState } from 'react';


interface CommentProps{
    id: number;
    content: string;
    onDeleteComment: (idComment: number)=>void;
}

export function Comment({ id, content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = (commentId: number) => {
        onDeleteComment(id);
    }

    const handleLikeCount = () =>{
        setLikeCount((state) => {
            return state+1;
        });
    }

    return(
        <section className={styles.comment}>
            <ProfilePic 
                src="https://avatars.githubusercontent.com/u/50582067?v=4" 
                alt="Luan Santos"
                hasBorder={false}
            />

            <article className={styles.commentBox}>
                <aside className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <h3>Luan Santos</h3>
                            <time title='11 de maio as 07:25' dateTime='2022-05-11 07:25:35'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={()=>{handleDeleteComment(id)}} title='Excluir comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </aside>    

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </article>
        </section>
    );
}