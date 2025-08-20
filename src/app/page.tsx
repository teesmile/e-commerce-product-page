import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import { products } from "@/data/product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto py-0 md:py-20 md:border-t md:border-gray-200 md:flex md:justify-center md:items-center">
        <ProductGallery images={products.images} thumbnails={products.thumbnails} />
        <ProductInfo />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </>
  );
}
