import { useState } from 'react';
import { BarChart, Users, Video, Clock, AlertTriangle, Menu, X } from 'lucide-react';
import Header from './components/Header';
import KpiCard from './components/KpiCard';
import AlertsTable from './components/AlertsTable';
import Sidebar from './components/Sidebar';

const kpis = [
  { title: "Today's Footfall", value: '88', icon: <Users className="text-blue-500" /> },
  { title: 'Conversion', value: '31%', icon: <BarChart className="text-green-500" /> },
  { title: 'Current Occupancy', value: '22', icon: <Video className="text-yellow-500" /> },
  { title: 'Average Dwell Time', value: '10 mins', icon: <Clock className="text-purple-500" /> },
  { title: "Today's Camera Alerts", value: '3', icon: <AlertTriangle className="text-red-500" /> },
];

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-gray-100">
      <div className="flex">
        {/* Sidebar for mobile and desktop */}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
          <Sidebar />
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 z-30 bg-black/30 md:hidden"
                onClick={() => setSidebarOpen(false)}
            ></div>
        )}

        <main className="flex-1 p-4 md:p-6">
          <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen}/>
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </div>
          <AlertsTable />
        </main>
      </div>
    </div>
  );
}
