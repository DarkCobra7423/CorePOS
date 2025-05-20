import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    datasets: [
        {
            label: 'Ventas',
            data: [120, 190, 300],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Ventas Semanales' },
    },
};

function GBar() {
    return <Bar options={options} data={data} />;
}

export default GBar;
