import styles from './WindowContainer.module.css'

import testIcon from '../../../assets/icons/notepad.png'
import Draggable from 'react-draggable';

const WindowContainer = (props) => {

    const visible = props.visible ? 'block' : 'none'

    const active = props.active ? styles.active_window : styles.inactive_window

    return(
        <Draggable defaultPosition={{x: props.coordinates, y: props.coordinates}} handle=".handle">
            <div className={`${styles.window} ${active}`} style={{display: visible}} onClick={props.setActive}>
                <header className={`handle ${styles.header}`}>
                    <img src={testIcon} className={styles.header_icon}/>
                    <p className={styles.window_name}>Window Name</p>
                    <div className={styles.controls}>
                        <button onClick={props.toggle}>MIN</button> 
                        <button onClick={props.toggle}>MAX</button> 
                        <button onClick={props.toggle}>EXIT</button> 
                    </div>
                </header>
                {props.children}
            </div>
        </Draggable>
    )
}

export default WindowContainer