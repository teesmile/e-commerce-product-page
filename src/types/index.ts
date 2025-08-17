export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  company: string;
  discount?: number;
  original?: number;
  category: string;
  images: string[];
  thumbnails: string[];
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};
