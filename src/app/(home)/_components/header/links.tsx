import React, {FC} from 'react';
import Link from "next/link";

type IAppNavbarLinks = {
    onClick?: ()=>void,
    className: string,
    textClassName?: string
}
const AppNavbarLinks: FC<IAppNavbarLinks> = ({onClick, className, textClassName}) => {
    const LINKS = [
        {
            href:'/#services',
            name: 'Services'
        },{
            href:'/#strategy',
            name: 'Strategy'
        },{
            href:'/#about',
            name: 'About Us'
        }
        ,{
            href:'/#faq',
            name: 'FAQ'
        },{
            href:'/#testimonials',
            name: 'Testimonials'
        },{
            href:'/#contact',
            name: 'Contact Us'
        },
    ]
    return (
        <ul className={className}>
            {LINKS.map((el, index)=> (
                <li key={index} onClick={onClick} className={textClassName}>
                    <Link href={el.href} scroll={true}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default AppNavbarLinks;