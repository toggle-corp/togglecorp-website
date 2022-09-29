import { ReactNode } from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

export type ButtonVariant = (
    'primary'
    | 'default'
);

interface ButtonProps<N extends number | string | undefined> {
    variant?: ButtonVariant;
    className?: string;
    children?: ReactNode;
    default?: boolean;
    icons?: ReactNode;
    actions?: ReactNode;
    actionsClassName?: string;
}

type ButtonFeatureKeys = 'variant' | 'className' | 'actionsClassName' | 'default'| 'icons' | 'actions' | 'children';

export function useButtonFeatures(
    props: Pick<ButtonProps<string>, ButtonFeatureKeys>,
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

export function Button<N extends number | string | undefined>(props: ButtonProps<N>) {
    const {
        variant,
        className,
        children,
        icons,
        actions,

        ...otherProps
    } = props;

    const buttonProps = useButtonFeatures({
        variant,
        className,
        children,
        icons,
        actions,
    });

    return (
        <button
            // type={type}
            {...otherProps}
            {...buttonProps}
        >
        </button>
    );
}