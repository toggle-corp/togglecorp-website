import { ReactNode } from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

export type ButtonVariant = (
    'primary'
    | 'secondary'
    | 'disabled'
);

const buttonVariantToVariableNameMap: {
    [key in ButtonVariant]: string;
} = {
    primary: '--color-primary',
    secondary: '--color-secondary',
    disabled: '--color-disabled',
}

interface ButtonProps<N extends number | string | undefined> {
    variant?: ButtonVariant;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    transparent?: boolean;
    icons?: ReactNode;
    actions?: ReactNode;
}

type ButtonFeatureKeys = 'variant' | 'className' | 'disabled' | 'transparent' | 'icons' | 'actions' | 'children';

export function useButtonFeatures(
    props: Pick<ButtonProps<string>, ButtonFeatureKeys>,
) {
    const {
        variant = 'primary',
        className: classNameFromProps,
        disabled,
        transparent = false,
        icons,
        children,
        actions,
    } = props;

    const buttonClassName = _cs(
        classNameFromProps,
        variant,
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
        disabled,
    }
}
export function Button<N extends number | string | undefined>(props: ButtonProps<N>) {
    const {
        variant,
        className,
        transparent = false,
        children,
        icons,
        actions,
        disabled,

        ...otherProps
    } = props;

    const buttonProps = useButtonFeatures({
        variant,
        className,
        transparent,
        children,
        icons,
        actions,
        disabled,
    });

    return (
        <button
            // type={type}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...buttonProps}
        >
        </button>
    );
}