import { Button } from "@/components/Button"
import { TaskProps } from "@/types";
import { Trash } from "phosphor-react"

import styles from './Task.module.scss';

export const Task = ({
    id, title, isDone, onDeleteTask, onChangeTaskStatus
}: TaskProps) => {
    const handleDeleteTask = () => {
        onDeleteTask!(id);
    }
    const handleStatusTask = () => {
        onChangeTaskStatus!(id);
    }
    return(
        <aside className={styles.taskContainer}>

            <fieldset>
                <input 
                    type="checkbox"
                    name={`taskCheck-${id}`}
                    id={`taskCheck-${id}`}
                    onChange={handleStatusTask}
                />
                <label htmlFor={`taskCheck-${id}`}>{title}</label>
            </fieldset>
            
            <button
                title="Deletar tarefa"
                onClick={handleDeleteTask}
            >
                <Trash size={14}/>
            </button>
        </aside>
    )
}