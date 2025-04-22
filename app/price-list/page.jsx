export const metadata = {
    title: 'Ценовник'
};

const currentDate = new Date();
currentDate.setHours(9);

const subtitle = `Комерцијален ценовник - Аптека Ена-Фарм, ${currentDate.toLocaleTimeString('mk-MK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})}`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Ценовник</h1>
            <p className="mb-4">{subtitle}</p>
            <div className="flex justify-center">
                <embed
                    src="assets/commercial-price-list-22042025.pdf"
                    type="application/pdf"
                    width="100%"
                    height="700px"
                />
            </div>
        </>
    );
}
