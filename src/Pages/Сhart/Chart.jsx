import { MainLayout } from '../../components/MainLayout/MainLayout'
import styles from './chart.module.scss'

export const Chart = () => {
    return (
        <MainLayout>
            <div className={styles.chart}>
                Ультрагибкий график полетов от Илона Маска
            </div>
        </MainLayout>
    );
}