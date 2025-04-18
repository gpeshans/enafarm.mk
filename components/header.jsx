import Image from 'next/image';
import Link from 'next/link';
import enaFarmLogo from 'public/ena-farm-logo.svg';

const navItems = [
    { linkText: 'Дома', href: '/' },
    { linkText: 'Ценовник', href: '/price-list' },
    // { linkText: 'Revalidation', href: '/revalidation' },
    // { linkText: 'Image CDN', href: '/image-cdn' },
    // { linkText: 'Edge Function', href: '/edge' },
    // { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Контакт', href: '/contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12">
            <Link href="/">
                <Image src={enaFarmLogo} alt="Netlify logo" height={75} />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
