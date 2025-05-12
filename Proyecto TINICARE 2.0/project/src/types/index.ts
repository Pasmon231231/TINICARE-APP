export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  content: InfoCard[];
}

export interface InfoCard {
  title: string;
  content: string;
  color?: string;
}