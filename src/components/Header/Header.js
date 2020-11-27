import React,{useState} from 'react'
import './header.scss'
import { GiHamburgerMenu} from 'react-icons/gi';
import { GrClose} from 'react-icons/gr';

const Header = () => {
    const [hambug, sethambug] = useState(true);
    const handleClick =()=>{
        sethambug(!hambug);
    }
    return (
        <div className="header">
            <div className="logo">
                <h1>This Interior</h1>
            </div>
            <ul onClick={handleClick} style={{left: hambug  ? -500 : 0}}>
                <li><a>Home</a></li>
                <li><a>Collection</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
            <div className="hambuger" onClick={handleClick}>
              {hambug ? <GiHamburgerMenu/>: <GrClose />}
            </div>
        </div>
    )
}

export default Header
