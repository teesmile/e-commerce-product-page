import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import { products } from "@/data/product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-6xl  mx-auto py-0 md:py-20">
       <div className="flex flex-col md:flex-row  ">
     <div className="md:px-6 md:w-1/2">
      <ProductGallery images={products.images} thumbnails={products.thumbnails} /> </div>
     <div className="md:px-6 md:w-1/2">
    <ProductInfo />
     </div>
        
       </div>
    
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </>
  );
}
