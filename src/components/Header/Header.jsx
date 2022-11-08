import Logo from '../../assets/images/Logo.png'
import { Link } from "react-router-dom"
import styles from './header.module.scss'
import { useEffect, useState } from 'react';
import { useResizing } from "../../hooks/useResize"

export const Header = () => {

    const [menu, setMenu] = useState(true);
    const { widthWindow } = useResizing();

    console.log(widthWindow);

    useEffect(() => {
        if (widthWindow > 960) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }, [widthWindow]);

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} />
                </div>
                {menu ?
                    (<div className={styles.links}>
                        <Link to="/sagirov">Главная</Link>
                        <Link to="/tehnology">Технология</Link>
                        <Link to="/chart">График полетов</Link>
                        <Link to="/guarantees">Гарантии</Link>
                        <Link to="/about">О компании</Link>
                        <Link to="/contacts">Контакты</Link>
                        <div
                            className={styles.close}
                            onClick={(menu) => setMenu(!menu)}
                        >
                            <span></span>
                            <span></span>
                        </div>
                    </div>) :
                    (<div className={styles.burger} onClick={(menu) => setMenu(menu)}>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </div>)}
            </div>
        </div>
    );
}



