import AlertIcon from '../../components/icons/alertIcon';
import RefreshIcon from '../../components/icons/refreshIcon';
import styles from './mainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Match Tracker</h1>
                <div className={styles.update}>
                    <div className={styles.warning}>
                        <AlertIcon />
                        <p className={styles.error}>Ошибка: не удалось загрузить информацию</p>
                    </div>
                    <button className={styles.refresh}>
                        <p>Обновить</p>
                        <RefreshIcon />
                    </button>
                </div>
            </div>
            <div className={styles.matches}></div>
        </div>
    )
}

export default MainPage;