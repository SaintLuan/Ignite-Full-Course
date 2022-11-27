import { ImgHTMLAttributes } from 'react';

import styles from './ProfilePic.module.css';

interface PicProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function ProfilePic({ src, alt, hasBorder = true }: PicProps){
    
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt} 
        />
    );
}