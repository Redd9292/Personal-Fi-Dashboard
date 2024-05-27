// Frontend - src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../services/api';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5006/api/data/dashboard') // Ensure the port matches your backend
      .then(response => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;




