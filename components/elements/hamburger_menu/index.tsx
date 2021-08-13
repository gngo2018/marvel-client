import hamburgerMenuCss from './hamburger_menu.module.css'

export default function HamburgerMenu(){
    return(
        <>
        <div className={hamburgerMenuCss.hamburger_menu_container}>
            <div className={hamburgerMenuCss.stripe}></div>
            <div className={hamburgerMenuCss.stripe}></div>
            <div className={hamburgerMenuCss.stripe}></div>
        </div>
        </>
    );
}