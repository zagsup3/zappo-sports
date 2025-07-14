import { DATA } from "@/lib/products";
import Link from "next/link";
import Product from "@/components/Product";
import { use } from "react";

export async function generateStaticParams() {
    try {
        return DATA.map(product => ({
            id: product.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching product IDs:", error);
        return [];
    }
}
const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const product = DATA.find(item => item.id === id);
    if (!product)
        return (
            <div>
                <p>No product found!!</p>
                <Link href="/">Go Back</Link>
            </div>
        );
    return <Product product={product} />;
};
export default ProductPage;
