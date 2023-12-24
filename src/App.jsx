import Navbar from "./components/NavBar"
import MintingSection from "./components/MintingSection"
import StatusSection from "./components/StatusSection"
import config from "../config"
import Holdings from "./components/Holdings"

function App() {

  return (
    <>
      <Navbar name={config.name} />
      <div style={{ 'display': 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <MintingSection />
        <StatusSection />

      </div>
      <Holdings />

    </>

  )
}

export default App
