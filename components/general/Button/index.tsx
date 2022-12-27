import { ReactNode, useCallback } from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

export type ButtonVariant = (
    'primary' | 'default' | 'outline' | 'outline-active' | 'tab' | 'transparent'
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
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
};

type ButtonFeatureKeys = 'variant' | 'className' | 'actionsClassName' | 'default' | 'icons' | 'actions' | 'children';

export function useButtonFeatures(
    props: Pick<ButtonProps<unknown>, ButtonFeatureKeys>,
) {
    const {
        variant = 'default',
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
        variant === 'tab' && styles.tab,
        variant === 'outline' && styles.outline,
        variant === 'outline-active' && styles.outlineActive,
        variant === 'transparent' && styles.transparent,
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
    };
}

function Button<N>(props: ButtonProps<N>) {
    const {
        variant,
        className,
        children,
        icons,
        actions,
        name,
        onClick,
        type,
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
            // eslint-disable-next-line react/button-has-type
            type={type}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...buttonProps}
            onClick={handleClick}
        />
    );
}

export default Button;
