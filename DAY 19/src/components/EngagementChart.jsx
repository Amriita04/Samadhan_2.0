import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Engagement',
      data: [120, 190, 170, 220, 260],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.4,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
}

const EngagementChart = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-xl shadow-md transition hover:shadow-lg">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Engagement Over Time</h3>
    <Line data={data} options={options} />
  </div>
)

export default EngagementChart
