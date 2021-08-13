import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons'
import headerCss from './header.module.css'
import HamburgerMenu from '../elements/hamburger_menu';

export default function Header(){
    return(
        <>
            <div className={headerCss.header_container}>
                <div className={headerCss.mobile_nav_menu}>
                    <HamburgerMenu />
                </div>
                <div>Some Logo</div>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </>
    );
}