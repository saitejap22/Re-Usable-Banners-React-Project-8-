import './index.css'

const Banners = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={`${className} cards`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="matter">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default Banners
