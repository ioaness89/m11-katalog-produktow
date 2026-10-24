
import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="d-flex align-items-center justify-content-center p-3 bg-white" style={{ height: '190px' }}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid h-100"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <span className="badge text-bg-light text-secondary align-self-start mb-2 text-capitalize">
                        {product.category}
                    </span>

                    <h6 className="card-title fw-semibold">
                        {product.title}
                    </h6>

                    <div className="d-flex align-items-center gap-1 mb-3">
                        <span className="text-warning">★</span>
                        <span className="text-secondary small">
                            {product.rating}
                        </span>
                    </div>

                    <div className="mt-auto">
                        <p className="fs-5 fw-bold mb-3">
                            ${product.price.toFixed(2)}
                        </p>

                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-outline-danger"
                                aria-label="Dodaj do ulubionych">
                                ♥
                            </button>

                            
                            <Link className="btn btn-dark flex-grow-1" to={`/products/${product.id}`}>
                            Szczegóły
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
