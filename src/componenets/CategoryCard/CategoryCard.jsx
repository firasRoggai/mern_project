import './CategoryCard.scss'

export default function CategoryCard({ img, title }) {
  return (
    <div className='category-card__container'>
      <div className="category-card">
        <img
          className="category-card__img"
          src={img}
          alt=""
        />
        <h3 className="category-card__title">{title}</h3>
        <a
          className="category-card__link"
          href="#"
        >
          SHOP{' '}
          <i
            className="fa fa-angle-right category-card__link__icon"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  )
}
