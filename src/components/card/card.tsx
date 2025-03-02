import { FC, useEffect, useState } from 'react';
import { Match } from '../../utils/types';
import Command from './command/command';
import styles from './card.module.css';

type CardProps = {
    match: Match;
}

const Card: FC<CardProps> = ({match}) => {
    const [ status, setStatus ] = useState('');
    const [ statusStyle, setStatusStyle ] = useState('');
    const matchStatus = match.status;

    useEffect(() => {
        switch (matchStatus) {
            case 'Finished':
                setStatusStyle(styles.status + ' ' + styles.finished);
                setStatus('Finished')
                break;
            case 'Ongoing':
                setStatusStyle(styles.status + ' ' + styles.ongoing);
                setStatus('Live')
                break;
            case 'Scheduled':
                setStatusStyle(styles.status + ' ' + styles.scheduled);
                setStatus('Match preparing')
                break;
        }
    }, [match])

    return (
        <li className={styles.card}>
            <Command commandName={match.awayTeam.name} isReverse={false}/>
            <div className={styles.result}>
                <p className={styles.score}>{match.awayScore + ' : ' + match.homeScore}</p>
                <p className={statusStyle}>{status}</p>
            </div>
            <Command commandName={match.homeTeam.name} isReverse/>
        </li>
    )
}

export default Card;