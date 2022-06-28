import { Routes, Route } from "react-router-dom"
import Header from "./Components/Organisms/Header"
import { Div } from "./Components/Layout/styles"
import Home from "./Pages/Home"
import ResultImages from "./Pages/ResultImages"


function App(): React.ReactElement {
  return (
    <Div textAlign="center">
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:tag" element={<ResultImages />} />
      </Routes>
    </Div>
  )
}

export default App
