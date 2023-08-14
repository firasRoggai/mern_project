import Navbar from './componenets/Navbar/Navbar'
import './style/main.scss'
import CategoryCards from './componenets/CategoryCards/CategoryCards'
import Article from './componenets/Article/Article'

function App() {
  return (
    <>
    {/* temporary fix for black background for the navbar*/}
      <div style={{backgroundColor: "black"}}>
        <Navbar />
      </div>
      <div className="container">
        <CategoryCards />
        <Article />
      </div>
    </>
  )
}

export default App
