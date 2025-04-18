import Image from 'next/image';

export const metadata = {
    title: 'Во изработка'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <figure>
                    <div className="relative overflow-hidden rounded-lg aspect-3/2">
                        <Image
                            src="/images/coming-soon.png"
                            priority
                            fill={true}
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Во изработка"
                        />
                    </div>
                </figure>
            </section>
        </div>
    );
}
