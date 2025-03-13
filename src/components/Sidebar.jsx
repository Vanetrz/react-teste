import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1739279479894-71d500e7886d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://media.istockphoto.com/id/1399395748/pt/foto/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile-in.jpg?s=612x612&w=0&k=20&c=V2hdZm-cPTPXYT4U7VEsXr9M4CR3QqxOCMY_2qqJQAI="/>
            <strong>Vanessa Trezena</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#"><PencilLine size={20}/> Editar Perfil</a>
        </footer>
        </aside>
    );
}