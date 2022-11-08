import { Header } from '../Header/Header'
import styles from './mainLayout.module.scss'


export const MainLayout = ({children}) => {

    return (
        <>
            <div className={styles.layout}>
                <Header />
                <div className={styles.content}>{children}</div>
            </div>
        </>
    );
};
