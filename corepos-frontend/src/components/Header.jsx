
import { useContext } from 'react';
import Context from './Context';

export default function Header() {
    const userData = useContext(Context);
    return (
        <nav className='nav-bar' style={{ background: '#0687c6' }}>
            <p><a href='/'><img src='logo' alt='logo' height={50}></img></a>
            </p>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/inventory'>Inventory</a></li>
                <li><a href='/sales'>Sales</a></li>
            </ul>
        </nav>
    );
}