import styles from './WindowContainer.module.css'

import testIcon from '../../../assets/icons/notepad.png'
import Draggable from 'react-draggable';

const WindowContainer = (props) => {

    const visible = props.visible ? 'block' : 'none'

    const active = props.active ? styles.active_window : styles.inactive_window

    const isFullScreen = props.isFullScreen ? styles.fullScreen : ''

    const xLocation = props.coordinates

    const yLocation = props.coordinates

    return(
        <Draggable defaultPosition={{x: xLocation, y: yLocation}} handle=".handle">
            <div className={`${styles.window} ${active} ${isFullScreen}`} style={{display: visible, zIndex: props.zIndex}} onMouseDown={props.setActive}>
                <header className={`handle ${styles.header}`}>
                    <img src={testIcon} className={styles.header_icon}/>
                    <p className={styles.window_name}>Window Name</p>
                    <div className={styles.controls}>
                        <button onClick={props.toggle}>MIN</button> 
                        <button onClick={props.fullScreen}>MAX</button> 
                        <button onClick={props.close}>EXIT</button> 
                    </div>
                </header>
                {props.children}
            </div> 
        </Draggable>
    )
}

export default WindowContainer