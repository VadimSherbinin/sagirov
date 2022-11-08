import { MainLayout } from '../../components/MainLayout/MainLayout'
import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <MainLayout>
            <div className={styles.contacts}>
                Вадим Щербинин. Фронтенд-разработчик. <br />
                Телефон: +7-(961)-607-86-48<br />
                Телега: @Vadim_Sherbinin
            </div>
        </MainLayout>
    );
};

