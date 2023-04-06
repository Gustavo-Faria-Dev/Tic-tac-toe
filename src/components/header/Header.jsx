import styles from './header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/SubTitle"

function Header (){
    return(
        <div className={styles.header}>
            <Title>Jogo da velha</Title>
            <Subtitle>Criado por Gustavo Faria</Subtitle>
        </div>
    )
    
}

export default Header