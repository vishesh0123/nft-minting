import Navbar from "./components/NavBar"
import MintingSection from "./components/MintingSection"
import StatusSection from "./components/StatusSection"
import config from "../config"
import Holdings from "./components/Holdings"
import { useState } from "react"
import LaunchPad from './components/LaunchPad'
import Runes from './components/Runes'

function App() {
  const [route, setRoute] = useState({ route: false, path: '' })
  const [mintp, setmintp] = useState(0.0)

  return (
    <>
      <Navbar name={config.name} state={setRoute} />
      {!route.route && <>
        <div style={{ 'display': 'flex', flexDirection: 'row', marginTop: '20px' }}>
          <MintingSection progress={mintp} />
          <StatusSection state={setmintp} />

        </div>
        <Holdings /></>}

      {route.route && (route.route && route.path === 'Launchpad' ? <LaunchPad /> : <Runes state={setRoute} />)}




    </>

  )
}

export default App
