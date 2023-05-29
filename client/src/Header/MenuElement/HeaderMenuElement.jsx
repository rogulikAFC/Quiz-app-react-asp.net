import './HeaderMenuElement.css'

function HeaderMenuElement({ children }) {
    return (
        <a href="." className="header__menu-element"> { children } </a>
    )
}

export default HeaderMenuElement