import { ReactNode, useCallback } from 'react';
import {
    _cs,
    isDefined,
    isNotDefined,
} from '@togglecorp/fujs';

import styles from './styles.module.css';

export type ButtonVariant = (
    'primary'
    | 'default'
);

type ButtonProps<N> = {
    variant?: ButtonVariant;
    className?: string;
    children?: ReactNode;
    default?: boolean;
    icons?: ReactNode;
    actions?: ReactNode;
    actionsClassName?: string;
    name: N;
    onClick?: (name: N) => void;
}

type ButtonFeatureKeys = 'variant' | 'className' | 'actionsClassName' | 'default'| 'icons' | 'actions' | 'children';

export function useButtonFeatures(
    props: Pick<ButtonProps<unknown>, ButtonFeatureKeys>,
) {
    const {
        variant = 'primary',
        className: classNameFromProps,
        icons,
        children,
        actions,
    } = props;

    const buttonClassName = _cs(
        classNameFromProps,
        styles.button,
        variant === 'default' && styles.default,
        variant === 'primary' && styles.primary,
    );

    const buttonChildren = (
        <>
            {icons && (
                <div className={styles.icons}>
                    {icons}
                </div>
            )}
            {children && (
                <div className={styles.children}>
                    {children}
                </div>
            )}
            {actions && (
                <div className={styles.actions}>
                    {actions}
                </div>
            )}
        </>
    );

    return {
        className: buttonClassName,
        children: buttonChildren,
    }
}

export function Button<N>(props: ButtonProps<N>) {
    const {
        variant,
        className,
        children,
        icons,
        actions,
        name,
        onClick,

        ...otherProps
    } = props;

    const buttonProps = useButtonFeatures({
        variant,
        className,
        children,
        icons,
        actions,
    });

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(name);
        }
    }, [name, onClick]);

    return (
        <button
            // type={type}
            {...otherProps}
            {...buttonProps}
            onClick={handleClick}
        >
        </button>
    );
}
