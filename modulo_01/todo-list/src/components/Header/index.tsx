import { useState, ChangeEvent, InvalidEvent } from 'react';

// Types Imports
import { FormEvent } from 'react';
import { HeaderProps } from '@/types';

// Components Imports
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

// Image Imports
import logo from '../../assets/logo.svg';

// Styles Imports
import styles from './header.module.scss';



export const Header = ({
    qtdTasks, onCreateTask,
}: HeaderProps) =>{

    const [textTitle, setTextTitle] = useState('');

    const handleInvalidText = ( event: InvalidEvent<HTMLInputElement> ) => {
        event.target.setCustomValidity('O título da tarefa deve ser inserido!');
    }
    const handleTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('');
        setTextTitle(event.target.value);
    }

    const createTask = ( event: FormEvent ) => {

        event.preventDefault();

        let task = {
            id: Date.now(),
            title: textTitle,
            isDone: false
        }
        setTextTitle('');
        onCreateTask(task);
    }

    return(
        <header className={styles.headerContainer}>
            <figure className={styles.logo}>
                <img src={logo} alt="ToDo Lis | Luan Santos Dev" />
            </figure>

            <section className={styles.formTask}>
                <form onSubmit={createTask}>
                    <Input 
                        onChange={handleTextTitle}
                        value={textTitle}
                        onInvalid={handleInvalidText}
                    />
                    <Button />
                </form>
            </section>
        </header>
    );
}