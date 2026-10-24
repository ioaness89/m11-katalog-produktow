
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productsApi';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Ładowanie...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid px-4 py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0">Nasze produkty</h2>
                <span className="text-secondary">
                    {products.length} produktów
                </span>
            </div>

            <div className="row g-4">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
