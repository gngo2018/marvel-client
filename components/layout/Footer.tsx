import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerCss from './footer.module.css'

export default function Header() {
    return (
        <>
            <div className={footerCss.footer_container}>
                <FontAwesomeIcon icon={['fab', 'facebook']} className={footerCss.icon} />
                <FontAwesomeIcon icon={['fab', 'twitter']} className={footerCss.icon}/>
                <FontAwesomeIcon icon={['fab', 'instagram']} className={footerCss.icon}/>
                <FontAwesomeIcon icon={['fab', 'youtube']} className={footerCss.icon}/>
                <FontAwesomeIcon icon={['fab', 'github']} className={footerCss.icon}/>
            </div>
        </>
    );
}