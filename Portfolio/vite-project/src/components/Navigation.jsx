import { Link, useLocation } from 'react-router-dom';
import '../style/navigation.css';

function Navigation() {
    const { pathname } = useLocation();

    const navItems = [
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' }
    ];

    return (
        <>
            <h1>Wade Buchanan</h1>
            <nav className="navbar">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link
                                to={item.path}
                                className={pathname === item.path ? 'nav-link active' : 'nav-link'}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
