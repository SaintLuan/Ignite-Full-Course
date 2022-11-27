import styles from './ProfilePic.module.css';

export function ProfilePic({ urlImage, altText, hasBorder = true }){
    
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={urlImage}
            alt={altText} 
        />
    );
}