import Navbar from "../src/components/navbar"
import Section1 from "./components/section1"
import Main from "../src/components/main"
import Hand from "./components/hand"
import Footer from "../src/components/footer"
import Category from "../src/components/category"
import Sales from "../src/components/sales"

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Main></Main>
      <Sales></Sales>
      <Hand></Hand>
      <Category></Category>
      <Footer></Footer>

    </div>
  )
}

export default App