import { PencilLine } from 'phosphor-react';
import { ProfilePic } from './ProfilePic';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=45" 
                className={styles.cover}
                alt="Cover Profile" 
            />

            <section className={styles.profile}>
                <ProfilePic 
                    urlImage={"https://avatars.githubusercontent.com/u/50582067?v=4"}
                    altText="Luan Santos"
                />
                <h2>Luan Santos</h2>
                <span>Fullstack Engenier</span>
            </section>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}