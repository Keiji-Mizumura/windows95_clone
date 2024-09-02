import startIcon from '../../../../assets/icons/start.jpg'

import styles from './Start.module.css'

const Start = (props) => {
    return(
        <button onClick={props.onClick} className={styles.start_button}>
            <img src={startIcon} alt="Start" className={styles.start_button_image}/>
        </button>
    )
}

export default Start