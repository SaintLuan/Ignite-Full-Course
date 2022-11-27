import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { ProfilePic } from './ProfilePic';
import { Comment } from './Comment';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    job: string;
    profilePic: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface CommentProps{
    id: number;
    content: string;
}

export function Post({ 
    author, publishedAt, content
}:PostProps){

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState<CommentProps[]>([]);
    const [commentText, setCommentText] = useState('');

    const handleCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('');
        setCommentText(event.target.value);
    }

    const handleCreateComment = (event: FormEvent) =>{
        event.preventDefault();
        const comment = {
            id: comments.length+1,
            content: commentText
        }
        setComments([...comments, comment]);
        setCommentText('');
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('O campo de comentário, não pode ser vazio!')
    }

    const deleteComment = (idCommentToDelete: number) => {
        const commentsWithouDeletedOne = comments.filter(comment => {
            return comment.id !== idCommentToDelete;
        });
        setComments(commentsWithouDeletedOne);
    }

    // Condicionais para os componentes
    const isCommentTextEmpty = commentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <ProfilePic 
                        src={author.profilePic}
                        alt={author.name}
                    />

                    <div className={styles.authorInfo}>
                        <h2>{author.name}</h2>
                        <span>{author.job}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <section className={styles.content}>
                
                {
                    content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }
                        else{
                            if(line.type === 'link'){
                                return(
                                    <p key={line.content}>
                                        <a href="">{line.content}</a>
                                    </p>
                                );
                            }
                        }
                    })
                }

                <p>
                    <a href="#">#novoprojeto </a>
                    <a href="#">#nlw </a>
                    <a href="#">#rocketseat</a>
                </p>
            </section>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <h3>Deixe seu Feedback</h3>
                <textarea
                    name='comment'
                    onChange={handleCommentText}
                    value={commentText}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isCommentTextEmpty}>
                        Publicar
                    </button>
                </footer>                
            </form>

            <aside className={styles.commentList}>
                {
                    comments.map((comment: CommentProps)=>(
                        <Comment 
                            id={comment.id}
                            content={comment.content}
                            onDeleteComment={deleteComment} 
                        />
                    ))
                }
            </aside>
        </article>
    );
}