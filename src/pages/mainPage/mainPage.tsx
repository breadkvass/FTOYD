import { useContext, useEffect, useMemo } from 'react';
import { getMatches } from '../../utils/api';
import { MatchesContext } from '../../utils/matchesContext';
import Card from '../../components/card/card';
import AlertIcon from '../../components/icons/alertIcon';
import RefreshIcon from '../../components/icons/refreshIcon';
import Skeleton from '../../components/skeleton/skeleton';
import styles from './mainPage.module.css';

const MainPage = () => {
    const [ matches, { setMatches, setIsLoading, setIsError } ] = useContext(MatchesContext);

    useEffect(() => {
        getAllMatches()
    }, [])

    const visibleMatches = useMemo(() => {
        return matches.matches
    }, [matches.isLoading])

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
                    {matches.isError && 
                        <div className={styles.warning}>
                            <AlertIcon />
                            <p className={styles.error}>Ошибка: не удалось загрузить информацию</p>
                        </div>
                    }
                    
                    <button className={styles.refresh} onClick={() => onRefresh()} disabled={matches.isLoading}>
                        <p>Обновить</p>
                        <RefreshIcon />
                    </button>
                </div>
            </div>
            <ul className={styles.cards}>
                {matches.isLoading ? (
                    <Skeleton length={5} />
                ) : (
                    visibleMatches && visibleMatches.map((match, ind) => 
                        <Card key={ind} match={match} />
                    )
                )}
            </ul>
        </div>
    )
}

export default MainPage;