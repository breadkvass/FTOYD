import { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { getMatches } from '../../utils/api';
import { MatchesContext } from '../../utils/matchesContext';
import Card from '../../components/card/card';
import AlertIcon from '../../components/icons/alertIcon';
import RefreshIcon from '../../components/icons/refreshIcon';
import Skeleton from '../../components/skeleton/skeleton';
import styles from './mainPage.module.css';

const MainPage = () => {
    const {
        state: { matches, isLoading, isError},
        actions: {setMatches, setIsLoading, setIsError}
    } = useContext(MatchesContext);

    useEffect(() => {
        setIsLoading(true);
        getAllMatches();
    }, [])

    const getAllMatches = () => {
        getMatches()
            .then(data => setMatches(data.data.matches))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }

    const onRefresh = () => {
        setIsLoading(true);
        getAllMatches();
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Match Tracker</h1>
                <div className={styles.update}>
                    {isError && 
                        <div className={styles.warning}>
                            <AlertIcon />
                            <p className={styles.error}>Ошибка: не удалось загрузить информацию</p>
                        </div>
                    }
                    <button className={styles.refresh} onClick={() => onRefresh()} disabled={isLoading}>
                        <p>Обновить</p>
                        <RefreshIcon />
                    </button>
                </div>
            </div>
            <ul className={styles.cards}>
                {isLoading ? (
                    <Skeleton length={5} />
                ) : (
                    matches && matches.map((match) => 
                        <Card key={uuid()} match={match} />
                    )
                )}
            </ul>
        </div>
    )
}

export default MainPage;