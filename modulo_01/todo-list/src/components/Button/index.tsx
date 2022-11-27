
// Icons Import
import { PlusCircle } from 'phosphor-react';

// Import Styles
import styles from './button.module.scss';

export const Button =  () => {
    return(
        <button className={styles.buttonWrapper}>
            Criar
            <PlusCircle />
        </button>
    )
}