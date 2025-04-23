'use client';

import { useState, useMemo } from 'react';

export default function DataTable({ data }) {
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => {
        if (!search) {
            return data;
        }
        return data.filter((row) => {
            return Object.values(row).join('').toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    if (!data.length) {
        return <div>Не се пронајдени резултати.</div>;
    }

    const valueKeys = Object.keys(data[0]);
    const headers = [
        '#',
        'Назив на производ',
        'Продажна цена',
        'Единична цена',
        'Опис на производот',
        'Достапност',
        'Редовна цена'
    ];

    return (
        <div className="min-w-full">
            <input
                type="text"
                className="border p-2 mb-4 min-w-full"
                placeholder="Пребарувај..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-auto h-100">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead>
                        <tr>
                            {headers.map((header) => (
                                <th key={header} className="border px-2 py-1 bg-gray-100">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((row, idx) => (
                            <tr key={idx}>
                                {valueKeys.map((key) => {
                                    const value = row[key];
                                    return (
                                        <td
                                            key={key}
                                            className={`border px-2 py-1 ${
                                                typeof value === 'number' ? 'text-right' : ''
                                            }`}
                                        >
                                            {value?.toString() ?? ''}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
