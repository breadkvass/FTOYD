import { FC } from 'react';
import commandIcon from '../../../assets/icons/command-icon.png'
import styles from './command.module.css';

type CommandProps = {
    commandName: string;
    isReverse: boolean;
}

const Command: FC<CommandProps> = ({commandName, isReverse}) => {
    const style = !isReverse ? styles.command : styles.command + ' ' + styles.reverse;

    return (
        <div className={style}>
            <img className={styles.img} src={commandIcon} />
            <p className={styles.name}>{commandName}</p>
        </div>
    )
}

export default Command;