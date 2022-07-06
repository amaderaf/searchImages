import { Routes, Route } from "react-router-dom"
import { Div, Header } from "Components"
import { Home, ResultImages } from "Pages"


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
