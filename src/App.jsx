import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import { lazy } from "react"
import { Toaster } from "sonner"

const Home = lazy(() => import("./pages/Home"))
const BreedsList = lazy(() => import("./pages/BreedsList"))
const Dedication = lazy(() => import("./pages/Dedication"))
const Page404 = lazy(() => import("./pages/Page404"))

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breedList" element={<BreedsList />} />
          <Route path="/dedication" element={<Dedication />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors />
    </>
  )
}

export default App