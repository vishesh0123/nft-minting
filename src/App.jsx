import Navbar from "./components/NavBar"
import MintingSection from "./components/MintingSection"
import StatusSection from "./components/StatusSection"
import Footer from "./components/Footer"
import config from "../config"

function App() {

  return (
    <>
      <Navbar name={config.name} />
      <div style={{ 'display': 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <MintingSection />
        <StatusSection />
      </div>

      {/* <Footer/> */}
    </>

  )
}

export default App
