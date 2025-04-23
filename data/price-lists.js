import * as XLSX from 'xlsx/xlsx.mjs';
import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
import * as fs from 'fs';
import { Readable } from 'stream';

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);
XLSX.set_cptable(cpexcel);

const defaultPriceListPath = `public/assets/price-lists/2025-04-22.xls`;

export const getLatestPriceList = () => {
    const files = fs.readdirSync('public/assets/price-lists');
    const latestPriceListFilename = files[files.length - 1];
    const latestPriceListDateString = latestPriceListFilename.split('.')[0];

    let workbook;
    try {
        const priceListPath = `public/assets/price-lists/${latestPriceListDateString}.xls`;
        workbook = XLSX.readFile(priceListPath);
    } catch (e) {
        console.info(`Error reading the today's file. Falling back to default.`, JSON.stringify(e));
        workbook = XLSX.readFile(defaultPriceListPath);
    }

    const sheets = workbook.SheetNames;
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheets[0]]);

    const data = sheetData.slice(0, -1).map((item, index) => {
        return {
            index: index + 1,
            name: item.NAZIV_ART,
            sellingPrice: item.PROD_CENA,
            singlePrice: item.PROD_CENA,
            description: item.NAZIV_ART,
            availability: 'Да',
            price: item.PROD_CENA
        };
    });
    return {
        data,
        latestPriceListDateString
    };
};
