import { MainLayout } from '../../components/MainLayout/MainLayout';
import styles from './mainPage.module.scss'

export const MainPage = () => {
    return (
        <MainLayout>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <p>ПУТЕШЕСТВИЕ</p>
                            <span>на красную планету</span>
                        </div>
                        <div className={styles.toRocket}>
                            <button className={styles.button}>
                                <svg>
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </svg>
                                <span>Начать путешествие</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.benefits}>
                        <div className={styles.item}>
                            <p>мы</p>
                            <span>1</span>
                            <p>на рынке</p>
                        </div>
                        <div className={styles.item}>
                            <p>гарантируем</p>
                            <span>50%</span>
                            <p>безопасность</p>
                        </div>
                        <div className={styles.item}>
                            <p>календарик за</p>
                            <span>2001г</span>
                            <p>в подарок</p>
                        </div>
                        <div className={styles.item}>
                            <p>путешествие</p>
                            <span>597</span>
                            <p>дней</p>
                        </div>
                    </div>
                    <div className={styles.mobile}>
                        <button className={styles.mobileButton}>
                            <svg>
                                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                            </svg>
                            <span>Начать путешествие</span>
                        </button>
                    </div>
                </div >
            </div>
        </MainLayout >
    );
}

// width="180px" height="60px" viewBox="0 0 180 60"