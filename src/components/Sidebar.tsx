import { LayoutDashboard, BarChart2, Settings, LifeBuoy } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Analytics', icon: BarChart2 },
  { name: 'Settings', icon: Settings },
  { name: 'Support', icon: LifeBuoy },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 p-4 bg-white/5 backdrop-blur-lg md:block rounded-r-2xl shadow-lg border-l border-white/10">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 mr-3 bg-blue-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-gray-800">Sentinel</h2>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href="#" className="flex items-center p-3 my-1 text-gray-600 rounded-lg hover:bg-blue-500/10 hover:text-blue-600">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
