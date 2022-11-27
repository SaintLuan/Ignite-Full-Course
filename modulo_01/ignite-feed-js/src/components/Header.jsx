import styles from './Header.module.css';

// image imports
import igniteIcon from '../assets/ignite-icon.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteIcon} alt="Ignite Feed" />
            <strong>Ignite Feed</strong>
        </header>
    );
}