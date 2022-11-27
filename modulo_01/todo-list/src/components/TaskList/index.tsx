import { ClipboardText } from "phosphor-react";
import { Task } from "@/components/Task";

import styles from './List.module.scss';
import { TaskListProps } from "@/types";

export const TaskList = ({ 
    tasks, finishedTasks, onDeleteTask, onChangeTaskStatus
}: TaskListProps) =>{

    return(
        <section className={styles.listContainer}>
            <header className={styles.listHeader}>
                <h2>
                    Tarefas criadas
                    <span>{tasks.length}</span>
                </h2>

                <h2>
                    Concluídas
                    <span>{finishedTasks} de {tasks.length}</span>
                </h2>
            </header>

            {
                tasks.length > 0 ?
                    <article>
                        {
                            tasks.map((task)=>(
                                <Task 
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    isDone={task.isDone}
                                    onDeleteTask={onDeleteTask}
                                    onChangeTaskStatus={onChangeTaskStatus}
                                />
                            ))
                        }
                    </article>
                :
                <article className={styles.emptyList}>
                    <ClipboardText />

                    <h2>Você ainda não tem tarefas cadastradas</h2>
                    <h3>Crie tarefas e organize seus itens a fazer</h3>
                </article>
            }

        </section>
    );
}