import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">Copyright © Ena-Farm {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    );
}
