'use client';
import Header from '@/components/Header'
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-cusomWhite">
      <Header />
      <ProductList /> 
      <Footer />
    </div>
  );
}
