import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const productPricesByLocation = {
  tomatoes: { default: 30, city: 25, village: 35 },
  apples: { default: 50, city: 45, village: 55 },
  milk: { default: 60, city: 55, village: 65 },
  bread: { default: 40, city: 38, village: 45 },
  cheese: { default: 120, city: 110, village: 130 },
  eggs: { default: 30, city: 28, village: 35 },
  carrots: { default: 25, city: 22, village: 28 },
  onions: { default: 20, city: 18, village: 23 },
};

const FreshDeals = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationType = position.coords.latitude > 20 ? 'city' : 'village';
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          type: locationType,
        });

        if (selectedProduct) {
          setProductPrice(
            productPricesByLocation[selectedProduct][locationType] ||
            productPricesByLocation[selectedProduct].default
          );
        }
      },
      () => {
        setError('Unable to retrieve your location');
      }
    );
  }, [selectedProduct]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    if (location) {
      const locationType = location.type;
      setProductPrice(
        productPricesByLocation[product][locationType] ||
        productPricesByLocation[product].default
      );
    }
  };

  const productButtons = Object.keys(productPricesByLocation);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-success">Fresh Deals 🥦</h1>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {location ? (
        <>
          <p className="text-center text-muted">
            Showing deals near <strong>Lat:</strong> {location.lat.toFixed(2)}, <strong>Lon:</strong> {location.lon.toFixed(2)}
          </p>

          <div className="text-center mt-4">
            <h4>Select a Product to View Price</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              {productButtons.map((product, index) => (
                <button
                  key={product}
                  className={`btn btn-outline-${['primary', 'danger', 'success', 'warning', 'info'][index % 5]}`}
                  onClick={() => handleProductSelect(product)}
                >
                  {product.charAt(0).toUpperCase() + product.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {selectedProduct && (
            <div className="text-center mt-4">
              <h5 className="text-capitalize">{selectedProduct}</h5>
              <p className="fs-5">Price: ₹{productPrice}</p>
            </div>
          )}

          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>
              🔙 Back to Products
            </button>
          </div>
        </>
      ) : (
        !error && <p className="text-center text-info">Getting your location...</p>
      )}
    </div>
  );
};

export default FreshDeals;
