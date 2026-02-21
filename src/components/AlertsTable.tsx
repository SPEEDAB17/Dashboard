import { Filter, Download, ChevronDown } from 'lucide-react';

const alerts = [
  {
    id: 'Alert ID - 10',
    date: '22-Oct-2024',
    time: '15:30:12',
    type: 'Crowding',
    detection: 'Person = 20',
    location: 'Cam 1_Reception',
    image: 'https://picsum.photos/seed/1/200/200',
  },
  {
    id: 'Alert ID - 08',
    date: '20-Oct-2024',
    time: '18:30:12',
    type: 'Fire',
    detection: 'Fire /Smoke',
    location: 'Cam 1_First Floor',
    image: 'https://picsum.photos/seed/2/200/200',
  },
  {
    id: 'Alert ID - 05',
    date: '22-Oct-2024',
    time: '15:30:12',
    type: 'Staff Missing',
    detection: 'Person = 0',
    location: 'Cam 1_Shipping Area',
    image: 'https://picsum.photos/seed/3/200/200',
  },
];

const getAlertTypeClass = (type: string) => {
    switch (type) {
        case 'Crowding': return 'bg-yellow-100 text-yellow-800';
        case 'Fire': return 'bg-red-100 text-red-800';
        case 'Staff Missing': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

export default function AlertsTable() {
  return (
    <div className="p-4 mt-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Camera Alerts</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:space-x-4">
            {/* Alert Type Dropdown */}
            <div className="flex-1 min-w-[150px]">
                <label htmlFor="alertType" className="block text-sm font-medium text-gray-600">Alert Type</label>
                <div className="relative mt-1">
                    <select id="alertType" className="w-full px-3 py-2 pr-10 text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>All Types</option>
                        <option>Crowding</option>
                        <option>Fire</option>
                        <option>Staff Missing</option>
                    </select>
                    <ChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={20}/>
                </div>
            </div>
            {/* Cam Code Dropdown */}
            <div className="flex-1 min-w-[150px]">
                <label htmlFor="camCode" className="block text-sm font-medium text-gray-600">Cam Code</label>
                <div className="relative mt-1">
                    <select id="camCode" className="w-full px-3 py-2 pr-10 text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>All Cameras</option>
                        <option>Cam 1_Reception</option>
                        <option>Cam 1_First Floor</option>
                        <option>Cam 1_Shipping Area</option>
                    </select>
                    <ChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={20}/>
                </div>
            </div>
            {/* Date Picker */}
            <div className="flex-1 min-w-[150px]">
                <label htmlFor="date" className="block text-sm font-medium text-gray-600">Date</label>
                <input type="date" id="date" className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            {/* Export Button */}
            <div>
                <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Download size={16} />
                    <span>Export</span>
                </button>
            </div>
        </div>
      </div>
      <div className="overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block">
            <table className="w-full text-left">
            <thead>
                <tr className="text-sm font-semibold text-gray-500 border-b border-gray-200/50">
                <th className="p-3">Image</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Alert Type</th>
                <th className="p-3">Detection Info</th>
                <th className="p-3">Camera & Location</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
                {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-500/10">
                    <td className="p-3">
                    <img src={alert.image} alt={alert.id} className="object-cover w-16 h-12 rounded-md" referrerPolicy="no-referrer"/>
                    </td>
                    <td className="p-3 text-sm text-gray-700">
                    <div>{alert.date}</div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                    </td>
                    <td className="p-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getAlertTypeClass(alert.type)}`}>
                            {alert.type}
                        </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700">{alert.detection}</td>
                    <td className="p-3 text-sm text-gray-700">{alert.location}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
            {alerts.map((alert) => (
                <div key={alert.id} className="p-4 bg-white rounded-lg shadow">
                    <div className="flex flex-col gap-4">
                        <img src={alert.image} alt={alert.id} className="object-cover w-full h-32 rounded-md" referrerPolicy="no-referrer"/>
                        <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getAlertTypeClass(alert.type)}`}>
                                {alert.type}
                            </span>
                            <div className="text-sm text-right text-gray-700">
                                <div>{alert.date}</div>
                                <div className="text-xs text-gray-500">{alert.time}</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p><strong className="font-medium text-gray-800">Detection:</strong> {alert.detection}</p>
                            <p><strong className="font-medium text-gray-800">Location:</strong> {alert.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
