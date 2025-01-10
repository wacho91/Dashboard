import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import { Dashboard } from "./Pages/Dashboard/Dashboard"
import { Calendar } from "./Pages/Calendar/Calendar"



function App() {
  

  return <div id="dashboard">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />

          </Route>
        </Routes>
      </BrowserRouter>
  
  </div>
  
}

export default App
