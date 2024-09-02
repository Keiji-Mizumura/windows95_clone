import styles from './TaskbarMain.module.css'

import Start from "./start/Start"

import testIcon from "../../../assets/icons/notepad.png"

const Taskbar = (props) => {
    return (
        <nav className={styles.navigation}>
            <Start onClick={() => props.startClick(<button>CLICK ME</button>)}/>
            <div className={styles.taskbar_nav}>
                {props.windows.map(window => 
                    <button key={window.id} onClick={() => props.toggle(window.id)} className={styles.taskbar_item}>
                        <img src={testIcon} alt={window.title} className={styles.taskbar_icon} />
                        {window.title}
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Taskbar