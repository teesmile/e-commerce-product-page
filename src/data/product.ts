import { Product } from "@/types";

export const products: Product = {
  id: "fall-ltd-sneakers",
  title: "Fall Limited Edition Sneakers",
  company: "Sneaker Company",
  price: 250.0,
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    discount: 0.5,
    original: 250.0,
    count: 0,
  images: [
    "/images/image-product-1.jpg", 
    "/images/image-product-2.jpg", 
    "/images/image-product-3.jpg", 
    "/images/image-product-4.jpg"
  ],
  thumbnails: [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg"
  ],
  category: "sneakers",

};
