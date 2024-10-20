import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "@phosphor-icons/react";
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male"/>
                <strong>Samuel</strong>
                <span>Web Develop</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil</a>
            </footer>
        </aside>
    )
}