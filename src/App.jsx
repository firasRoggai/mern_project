import Navbar from './componenets/Navbar/Navbar'
import Button from './componenets/Button/Button'
import './style/main.scss'
import CategoryCards from './componenets/CategoryCards/CategoryCards'
import headphonesImg from './assets/headphones-img.png'

function App() {
	return (
		<>
    <Navbar />
		<CategoryCards img={headphonesImg} title="headphones" />
		</>
	)
}

export default App
