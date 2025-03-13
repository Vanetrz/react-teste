import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './style.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post
            author="Vanessa Lopes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos veritatis eum, dicta nesciunt dolore numquam saepe odio fugiat dolorem inventore, molestias maiores doloremque, culpa commodi quo ab ducimus. Odit."
          />

          <Post
            author="Vanessa Mendes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio assumenda harum quas voluptates exercitationem? Incidunt facilis placeat provident deserunt dolorem unde, quo architecto itaque aliquid voluptas quia, repellendus tempore!"
          />
        </main>
      </div>
    </div>
  )
}