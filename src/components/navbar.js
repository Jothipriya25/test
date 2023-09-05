import './navbar.css';
export default function navbar(){
    return <nav className="nav">
        <img src='https://cdn.dribbble.com/users/5976/screenshots/3394063/omg.gif' className="site-title" alt="logo"></img>
        <ul className="nav-list">
            <li>
            <a href="/" className="home"><h3>Home</h3></a>
            </li>
            <li>
            <a href="/about" className="about"><h3>About</h3></a>
            </li>
            {/* <li>
            <a href="/menu" className="menu"><h3>Menu</h3></a>
            </li> */}
            <li>
            <a href="/help" className="help"><h3>Help</h3></a>
            </li>
            <li>
            <a href="/dialog" className="dialog"><h3>Products</h3></a>
            </li>
        </ul>
    </nav>
}



