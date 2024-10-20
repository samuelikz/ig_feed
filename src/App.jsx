import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Samuel Nunes"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a voluptatum consectetur. Sit quasi eveniet molestias provident repudiandae consequatur dignissimos praesentium nobis deleniti? In labore ad, voluptas illum nobis odio."
          />

          <Post
            author="Lucca"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, voluptatem! Corporis eveniet quod possimus maxime, vitae excepturi soluta incidunt modi voluptates hic saepe, porro dolore. Cumque illo sapiente voluptates praesentium?"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
