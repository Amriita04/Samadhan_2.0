import StatCard from "../components/StatCard"
import EngagementChart from "../components/EngagementChart"
import { FaUsers, FaHeart, FaComments } from "react-icons/fa"

const Dashboard = () => (
  <div className="p-6 space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Followers" value="12.4K" icon={<FaUsers />} color="indigo" />
      <StatCard title="Likes" value="8.2K" icon={<FaHeart />} color="rose" />
      <StatCard title="Comments" value="1.9K" icon={<FaComments />} color="emerald" />
    </div>
    <EngagementChart />
  </div>
)

export default Dashboard
