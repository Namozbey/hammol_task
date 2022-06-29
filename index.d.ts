declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.webp";

interface Item {
  id?: number;
  title?: string;
  description?: string;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
}

interface Product {
  id?: number;
  title?: string;
  description?: string;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
}

type Params = {
  [key: string]: string | number;
};

interface DropdownOption {
  label: string;
  value: string;
  sortOrder: string;
}

interface Option {
  label: string;
  value: string;
}
