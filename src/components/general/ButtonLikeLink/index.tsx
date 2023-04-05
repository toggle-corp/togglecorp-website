import Link from 'next/link';

import { ButtonLikeProps, useButtonFeatures } from 'components/general/Button';

interface Props extends ButtonLikeProps {
    href: string;
}

function ButtonLikeLink(props: Props) {
    const {
        href,
        ...buttonLikeProps
    } = props;

    const {
        className,
        children,
    } = useButtonFeatures(buttonLikeProps);

    return (
        <Link
            href={href}
            passHref
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className={className}
                target="_blank"
            >
                {children}
            </a>
        </Link>
    );
}

export default ButtonLikeLink;
