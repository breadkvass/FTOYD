import { FC } from 'react';
import styles from './skeleton.module.css';

type SkeletonProps = {
    length: number;
}

const Skeleton: FC<SkeletonProps> = ({length}) => {
    let arr: string[] = [];

    for (let i = 1; i<= length; i++) {
        if (arr.length < 6) {
            arr[i] = ''
        }
    }

    return arr.map((_, ind) => <div key={ind} className={styles.skeleton}></div>)
}

export default Skeleton;