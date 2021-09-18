/* eslint-disable react/display-name */
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ForwardedRef } from 'react';

interface NextComposedProps extends NextLinkProps {
    className?: string;
}

const NextComposed = React.forwardRef(function NextComposed(
    props: NextComposedProps,
    ref: ForwardedRef<HTMLAnchorElement>
) {
    const { as, href, ...other } = props;

    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...other} />
        </NextLink>
    );
});

type OurLinkProps = MuiLinkProps &
    NextLinkProps & {
        activeClassName?: string;
        naked?: boolean;
    };

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: OurLinkProps) {
    const {
        href,
        activeClassName = 'active',
        className: classNameProps,
        ref,
        naked,
        ...other
    } = props;

    const router = useRouter();
    const pathname = getPathnameIn(href);

    const isCurrentPath = router.pathname === pathname;

    const className = clsx(classNameProps, {
        [activeClassName]: isCurrentPath && activeClassName,
    });

    if (naked) return <NextComposed className={className} ref={ref} href={href} {...other} />;

    const color = isCurrentPath ? 'primary' : 'inherit';
    return (
        <MuiLink
            component={NextComposed}
            color={color}
            className={className}
            ref={ref}
            href={href}
            {...other}
        />
    );
}

export default React.forwardRef<HTMLAnchorElement, OurLinkProps>((props, ref) => (
    <Link {...props}  ref={ref} />
));

function getPathnameIn(href: NextLinkProps['href']) {
    return typeof href === 'string' ? href : href.pathname;
}
