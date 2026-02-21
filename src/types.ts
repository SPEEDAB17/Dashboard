export interface Kpi {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export interface Alert {
  id: string;
  date: string;
  time: string;
  type: string;
  detection: string;
  location: string;
  image: string;
}
