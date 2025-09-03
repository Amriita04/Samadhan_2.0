const StatCard = ({ title, value, icon, color = "blue" }) => (
  <div className={`bg-white rounded-xl shadow-md p-5 transition hover:shadow-lg border-l-4 border-${color}-500`}>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`text-${color}-500 text-3xl`}>
        {icon}
      </div>
    </div>
  </div>
)

export default StatCard
