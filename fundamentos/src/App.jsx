import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'
import styles from './App.module.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gisellyreis.png',
      name: 'Giselly Reis',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},

      { type: 'link', content: '👉 jane.design/doctorcare',}

    ],
    publishedAt: new Date('2022-12-10')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/samuelRios.png',
      name: 'Samuel Rios',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},

      { type: 'link', content: '👉 jane.design/doctorcare',}

    ],
    publishedAt: new Date('2022-12-20')
  },
]
 
export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}