import { Routes, Route } from "react-router-dom"
import { Div, Header, HotTags } from "Components"
import { Home, ResultImages } from "Pages"


function App(): React.ReactElement {
  return (
    <Div textAlign="center">
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:tagUrl" element={<ResultImages />} />
      </Routes>

      <HotTags />
    </Div>
  )
}

export default App
