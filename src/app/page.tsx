"use client";

import ProductCard, { CardProps } from "@/components/ProductCard/productCard";
import Slider from "@/components/Slider";
import { DATA } from "@/lib/products";
import { fisherYatesShuffle } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState<CardProps[]>([]);
    useEffect(() => {
        if (!!document && !products.length) setProducts(fisherYatesShuffle(DATA));
    }, []);
    return (
        <div>
            <Slider />
            <section className="card-container">
                {products.map(item => (
                    <ProductCard key={item.title} data={item} />
                ))}
            </section>
        </div>
    );
}
