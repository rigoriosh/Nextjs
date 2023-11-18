import Link from "next/link";
import { useRouter } from "next/router";

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}
export const ActivLink = ({href, text}) => {
    console.log(href, text);
    const router = useRouter();
    const {asPath} = router;
    console.log(router);
    return (
        <Link href={href} style={asPath === href ? style : null}>{text}</Link>
    )
}
