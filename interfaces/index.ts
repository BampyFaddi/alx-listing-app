export interface CardProps {
  title: string;
  description: string;
  image: string; // path relative to /public folder
}
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[];
  reviews: Review[];
  price: number;
}
