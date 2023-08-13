//card component
import CategoryCard from "../CategoryCard/CategoryCard";
//images
import earphonesImg from '../../assets/earphones-img.png'
import headphonesImg from '../../assets/headphones-img.png'
import speakersImg from '../../assets/speakers-img.png'
//style
import './CategoryCards.scss'

export default function CategoryCards() {
  return (
    <div className="category-cards__container">
      <CategoryCard img={headphonesImg} title='headphones' />
      <CategoryCard img={speakersImg} title='speakers' />
      <CategoryCard img={earphonesImg} title='earphones' />
    </div>
  )
}