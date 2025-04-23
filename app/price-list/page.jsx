import DataTable from 'components/data-table';
import { getLatestPriceList } from 'data/price-lists';

export const metadata = {
    title: 'Ценовник'
};

export default async function Page() {
    const { data, latestPriceListDateString } = getLatestPriceList();
    const latestPriceListDate = new Date(latestPriceListDateString);
    latestPriceListDate.setHours(9);
    const subtitle = `Комерцијален ценовник - Аптека Ена-Фарм, ${latestPriceListDate.toLocaleTimeString('mk-MK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`;

    return (
        <>
            <h1 className="mb-8">Ценовник</h1>
            <p className="mb-4">{subtitle}</p>
            <div className="flex justify-center">
                <DataTable data={data} />
            </div>
        </>
    );
}
