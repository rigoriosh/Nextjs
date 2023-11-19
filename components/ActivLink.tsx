import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface misProps {
    text: string;
    href: string;
}

export const ActivLink: FC<misProps> = ({href, text}) => {
    console.log(href, text);
    const router = useRouter();
    const {asPath} = router;
    console.log(router);
    return (
        <Link href={href} style={asPath === href ? style : undefined}>{text}</Link>
    )
}
