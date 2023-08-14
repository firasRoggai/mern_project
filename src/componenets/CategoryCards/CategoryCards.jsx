//card component
import CategoryCard from '../CategoryCard/CategoryCard'
//images
import earphonesImg from '../../assets/earphones-img.png'
import headphonesImg from '../../assets/headphones-img.png'
import speakersImg from '../../assets/speakers-img.png'
//style
import './CategoryCards.scss'

export default function CategoryCards() {
  const categories = [
    {
      img: headphonesImg,
      title: 'headphones',
    },
    {
      img: speakersImg,
      title: 'speakers',
    },
    {
      img: earphonesImg,
      title: 'earphones',
    },
  ]
  const children = categories.map((category, index) => (
    <CategoryCard
      img={category.img}
      title={category.title}
      key={index}
    />
  ))
  return <div className="category-cards__container">{children}</div>
}
