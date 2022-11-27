import { useState } from 'react';
import { TaskProps } from './types';

// Global Styles
import '@/styles/global.module.scss';

// Components Import
import { Header } from '@/components/Header';
import { TaskList } from '@/components/TaskList';

function App() {

  // Tasks Control
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [finishedTasks, setFinishedTasks] = useState(0);

  // Task Handlers
  const createTask = (task:TaskProps) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (id: number) => {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  const changeTaskStatus = (id: number) => {
    const updatedTask = tasks.filter(task => {
      if(task.id === id){
        task.isDone = !task.isDone;
      }
    });

    const handleFinishedTasks = tasks.filter(task => {
      return task.isDone === true;
    })
    setTasks(tasks);
    setFinishedTasks(handleFinishedTasks.length);
  }

  return (
    <>
      <Header 
        qtdTasks={tasks.length}
        onCreateTask={createTask}
      />
      <TaskList 
        tasks={tasks}
        finishedTasks={finishedTasks}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />
    </>
  )
}

export default App
