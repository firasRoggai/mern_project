import './Button.scss'

export default function Button({buttonBgColor}) {
  const classes = `button ${buttonBgColor}`
  return (
      <a href="#" className={classes}>see product</a>
  )
}
