import copy from '../logos/copy.png';
import check from '../logos/check.png';
import React, { useState } from 'react';

const data = {
    'Nombre': 'Federico Taladriz',
    'RUT': '19519358-4',
    'Banco': 'Banco de Chile',
    'Tipo': 'Cuenta Corriente',
    'Número': '8240115504',
    'Email': 'federicotaladriz@gmail.com'
}

const allData = Object.values(data).join('\n');

const DataRow = ({ label, value }) => {
    const [copyIcon, setCopyIcon] = useState(copy);
    const handleCopyButtonClick = () => {
        navigator.clipboard.writeText(value);
        setCopyIcon(check);
        setTimeout(() => setCopyIcon(copy), 1500);
    }

    return (
        <tr className="border-b flex justify-between items-center inline-block overflow-hidden">
            <td className="pl-4 py-2 text-gray-700 inline">
                <span className='font-bold'>
                    {label}{": "}
                </span>
                <span>
                    {value}
                </span>
            </td>
            <td className="px-4 py-2 right-0 shrink-0">
                <button onClick={handleCopyButtonClick}>
                    <img src={copyIcon} className="h-5 w-5 fill-white color-[#FFFFFF]" alt='copy' />
                </button>
            </td>
        </tr>
    )
}

const CopyAllButton = () => {
    const [copyIcon, setCopyIcon] = useState(copy);

    const handleCopyAll = () => {
        navigator.clipboard.writeText(allData);
        setCopyIcon(check);
        setTimeout(() => setCopyIcon(copy), 1500);
    }

    return (
        <button className='bg-gray-200 hover:bg-gray-400 py-1 px-2 rounded mt-6' onClick={handleCopyAll}>
            Copiar todo
            <img src={copyIcon} className="h-5 w-5 fill-white color-[#FFFFFF] float-right ml-2" alt='copy' />
        </button>
    );
}

const BankData = () => (
    <div className="flex flex-col justify-center items-center m-auto max-w-xl">
        <div className='text-xl mt-4 text-white'>
            Mis datos 🏦
        </div>

        <table className="mt-4 px-4 bg-white shadow-md rounded-lg overflow-hidden">
            {Object.entries(data).map(([key, value]) => (
                <DataRow key={key} label={key} value={value} />
            ))}
        </table>
        <CopyAllButton />
        
        <div className='text-l mt-4 text-white'>
            También me puedes pagar con ₿itcoin mediante Lightning Network ⚡ siguiendo
            {' '}
            <a className='underline' href='https://www.buda.com/link/fede'>este link</a>
            .
        </div>

    </div>
);

export default BankData;
