import { MainLayout } from '../../components/MainLayout/MainLayout';
import styles from './guarantees.module.scss'

export const Guarantees = () => {
    return (
        <MainLayout>
            <div className={styles.guarantees}>
                Гарантии 50%, но от Илона Маска
            </div>
        </MainLayout>
    );
}