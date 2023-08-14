import Navbar from './componenets/Navbar/Navbar'
import './style/main.scss'
import CategoryCards from './componenets/CategoryCards/CategoryCards'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CategoryCards />
      </div>
    </>
  )
}

export default App
