export type TaskProps = {
    id: number;
    title: string;
    isDone: boolean;
    onDeleteTask?: (id: number)=>void;
    onChangeTaskStatus?: (id: number)=>void;
}

export type HeaderProps = {
    qtdTasks: number;
    onCreateTask: (task: TaskProps)=>void;
}

export type TaskListProps = {
    tasks: TaskProps[];
    finishedTasks: number;
    onDeleteTask: (id: number)=>void;
    onChangeTaskStatus: (id: number)=>void;
}