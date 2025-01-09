import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import { Dashboard } from "@mui/icons-material"



function App() {
  

  return <div id="dashboard">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route path="/dashboard" element={<Dashboard />} />

          </Route>
        </Routes>
      </BrowserRouter>
  
  </div>
  
}

export default App
