import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function Dashboard() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('/api/dashboard')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);

    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
            label: 'Expenses',
            data: data.map(item => item.expenses),
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
    },
        ],
    };

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <Line data={chartData} />
        </div>
    );
    }
    export default Dashboard;