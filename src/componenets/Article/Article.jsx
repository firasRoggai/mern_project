//style
import './Article.scss'

export default function Article() {
  return (
    <div className="article">
      {/* not sure what to name the following div */}
      <div className='article--left-width'>
        <h2 className="article__title">
          BRINGING YOU THE <span className="article__title--orange">BEST</span>{' '}
          AUDIO GEAR
        </h2>
        <p className="article__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="article__img"></div>
    </div>
  )
}
