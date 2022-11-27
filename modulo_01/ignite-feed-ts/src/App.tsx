import { useState } from 'react';

// Styles import
import './global.css';
import styles from './App.module.css';

// Components Import
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/50582067?v=4',
      name: 'Luan Santos',
      role: 'Fullstack Engenier'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-10-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/50582067?v=4',
      name: 'Linnidy Santos',
      role: 'Jornalist'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-10-30 22:45:00')
  }
];

export function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />

        <aside>
          {
            posts.map((post)=>(
              <Post 
                key={post.id}
                author={post.author.name}
                job={post.author.role}
                profilePic={post.author.avatarUrl}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            ))
          }
          
        </aside>
      </section>

    </>
  )
}


