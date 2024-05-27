import { useEffect, useState } from 'react';
import axios from 'axios';

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/api/transactions')
        .then(response => setTransactions(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className='p-4'>
            <h1 className='text-2cl front-bold mb-4'>Transactions</h1>
            <ul className='space-y-2'>
            { transactions.map(transaction => (
                <li key={transaction.id} className='bg-white p-4 rounded shadow'>
                {transaction.date} - {transaction.description} - {transaction.amount}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Transactions;
