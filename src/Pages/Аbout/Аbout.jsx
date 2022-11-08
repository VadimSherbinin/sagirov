import { MainLayout } from '../../components/MainLayout/MainLayout';
import styles from './about.module.scss'

export const Аbout = () => {
    return (
        <MainLayout>
        <div className={styles.аbout}>
            Вы и так все знаете
        </div>
        </MainLayout>
    );
}