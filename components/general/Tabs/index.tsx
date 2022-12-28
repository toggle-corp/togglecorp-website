import React from 'react';
import { _cs } from '@togglecorp/fujs';
import { IoEllipseSharp } from 'react-icons/io5';

import Button from 'components/general/Button';

import styles from './styles.module.css';

interface Props<V extends string, O> {
    options: O[];
    value: V;
    onChange: (newValue: V) => void;
    keySelector: (option: O) => V;
    labelSelector: (option: O) => React.ReactNode;
    className?: string;
}

function Tabs<V extends string, O>(props: Props<V, O>) {
    const {
        className,
        options,
        value,
        onChange,
        keySelector,
        labelSelector,
    } = props;

    return (
        <div className={_cs(styles.tabs, className)}>
            {options.map((option, i) => {
                const key = keySelector(option);

                return (
                    <React.Fragment key={key}>
                        <Button
                            name={key}
                            onClick={onChange}
                            variant={value === key ? 'tab-active' : 'tab'}
                        >
                            {labelSelector(option)}
                        </Button>
                        {i < options.length - 1 && (
                            <IoEllipseSharp className={styles.dot} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Tabs;
