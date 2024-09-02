import { useState } from 'react'
import styles from './App.module.css'

import desktopBackground from './assets/images/desktop-bg.jpg'
import WindowContainer from './components/ui/desktop/WindowContainer'
import Taskbar from './components/ui/taskbar/TaskbarMain'

const App = () => {
  const [windows, setWindows] = useState([])
  const [spawnCoordinates, setSpawnCoordinates] = useState(50)
  const [zIndex, seTZIndex] = useState(50)

  const addWindow = (jsx) => {
    const currentWindows = windows.slice()
    currentWindows.push({
      id: `windows@${spawnCoordinates}`,
      title: `windows@${spawnCoordinates}`,
      content: "check",
      coordinates: spawnCoordinates,
      visible: true,
      active: false,
      isFullScreen: false,
      content_jsx: jsx,
      priority: zIndex
    });
    setWindows(currentWindows)
    setSpawnCoordinates(spawnCoordinates + 20)
    seTZIndex(zIndex + 1)
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
          return {...window, active: false}
        }
      }
      )
    )
  }

  const closeWindow = (id) => {
    setWindows((win) =>
      win.filter((window) => {
        return window.id !== id
      }
      )
    )
  }

  const fullScreenWindow = (id) => {
    setWindows((win) => 
      win.map((window) => {
        if(window.id === id){
          return {...window, active: true, coordinates: 0, fullScreen: true}
        }
        else{
          return {...window, active: false}
        }
      })
    )
  }

  const setActiveWindow = (event, id) => {
    event.stopPropogation()
    setWindows((win) =>
      win.map((window) => {
        if(window.id === id){
          seTZIndex(zIndex + 1)
          return {...window, active: true, priority: zIndex}
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
            <WindowContainer 
              setActive={(e) => setActiveWindow(e, window.id)} 
              key={window.id} 
              toggle={() => toggleWindow(window.id)} 
              close={() => closeWindow(window.id)}
              fullScreen={() => fullScreenWindow(window.id)}
              isFullScreen={window.fullScreen}
              visible={window.visible} 
              active={window.active} 
              coordinates={window.coordinates}
              zIndex={window.priority}
              >
              <>{window.content_jsx}</>
            </WindowContainer>
          )
        }
      
      </div>

      <Taskbar startClick={addWindow} windows={windows} toggle={toggleWindow}/>

    </main>
  )
}

export default App