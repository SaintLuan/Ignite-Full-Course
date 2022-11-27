import { InputHTMLAttributes } from 'react';

// Styles Import
import styles from './input.module.scss';


export const Input= ({ onChange, value, onInvalid} : InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <input  
            className={styles.inputWrapper}
            placeholder="Adicione uma nova tarefa"
            value={value}
            required
            onChange={onChange}
            onInvalid={onInvalid}
        />
    )
}