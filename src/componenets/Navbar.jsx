// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
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
            <div className="logo">
                <h1>audiophile</h1>
            </div>
            <ul className="nav__items">
                {navItems.map((item, index) => {
                    return (
                        <li><a href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
            <div className="cart-icon__container">
                <AiOutlineShoppingCart />
            </div>
            <p>run free </p>
        </nav>
    );
}

export default Navbar;