// icons
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/icon-cart.svg';
import menuIcon from '../../assets/icon-hamburger.svg';
// style
import './Navbar.scss';

const Navbar = () => {
    const navItems = [
        { name: "home", link: "#" },
        { name: "headphones", link: "#" },
        { name: "speakers", link: "#" },
        { name: "earphones", link: "#" },
    ]
    return (
        <nav>
            <div className="menu-icon__container">
                <img src={menuIcon} alt="" />
            </div>
            <div className="nav__logo">
               <img src={logo} alt="" />
            </div>
            <ul className="nav__items">
                {navItems.map((item, index) => {
                    return (
                        <li key={index}><a className='nav__item' href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
            <div className="cart-icon__container">
                <img src={cartIcon} alt="" />
            </div>
        </nav>
    );
}

export default Navbar;