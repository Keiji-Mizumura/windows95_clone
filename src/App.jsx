import { useState } from 'react'
import styles from './App.module.css'

import desktopBackground from './assets/images/desktop-bg.jpg'
import WindowContainer from './components/ui/desktop/WindowContainer'
import Taskbar from './components/ui/taskbar/TaskbarMain'

const App = () => {
  const [windows, setWindows] = useState([])
  const [spawnCoordinates, setSpawnCoordinates] = useState(50)

  const addWindow = (jsx) => {
    const currentWindows = windows.slice()
    currentWindows.push({
      id: `windows@${spawnCoordinates}`,
      title: `windows@${spawnCoordinates}`,
      content: "check",
      coordinates: spawnCoordinates,
      visible: true,
      active: true,
      content: jsx,
    });
    setWindows(currentWindows);
    setSpawnCoordinates(spawnCoordinates+20);
  }

  const toggleWindow = (id) => {
    setWindows((win) =>
      win.map((window) => {
        if(window.id === id){
          if(window.visible)
            return {...window, visible: false, active: false}
          else
            return {...window, visible: true, active: true}
        }
        else{
          return {...window}
        }
      }
      )
    )
  }

  const setActiveWindow = (id) => {
    setWindows((win) =>
      win.map((window) => {
        if(window.id === id){
          return {...window, active: true}
        }
        else{
          return {...window, active: false}
        }
      }
      )
    )
  }

  return (
    <main className={styles.main} style={{ background: `url(${desktopBackground}`}}>
      {/* TODO: UI Area */}

      <div>
        {
          windows.map(window => 
            <WindowContainer setActive={() => setActiveWindow(window.id)} key={window.id} toggle={() => toggleWindow(window.id)} visible={window.visible} coordinates={window.coordinates}>{window.title}
              <>{window.content}</>
            </WindowContainer>
          )
        }
      
      </div>

      <Taskbar startClick={addWindow} windows={windows} toggle={toggleWindow}/>

    </main>
  )
}

export default App