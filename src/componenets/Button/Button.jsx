import './Button.scss'
export default function Button(props) {
  const classes = `button ${props.buttonBgColor}`
  return (
      <a href="#" className={classes}>see product</a>
  )
}
