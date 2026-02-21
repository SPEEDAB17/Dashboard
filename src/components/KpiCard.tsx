interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function KpiCard({ title, value, icon }: KpiCardProps) {
  return (
    <div className="p-5 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 transition-all duration-300 hover:shadow-xl hover:bg-white/30">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white/30 rounded-xl">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
