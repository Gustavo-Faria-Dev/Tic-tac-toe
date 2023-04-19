import styles from './GameOption.module.css'
import Icon from '../icon/Icon'


const GameIcon = ({iconName}) => <Icon iconName = {iconName} size =  "25"/>

function GameOption({status}) {
    return(
        <div className={styles.gameOption}>
            {
                status === 1 && <Icon iconName = "circle" />

            }
            {
                status === -1 && <Icon iconName = "x" />

            }
            
        </div>
    )
}

export default GameOption