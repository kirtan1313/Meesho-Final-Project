/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../Services/Action/action';



const Men = () => {

  const { allproducts } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  console.log('datatatata', allproducts);

  const menProduct = allproducts.filter(
    pro => pro.category.toLowerCase() === 'men'
  )

  console.log('menProduct',menProduct);

  useEffect(() => {
    dispatch(getProductsAsync())
  }, [dispatch])


  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    productType: [],
    size: [],
  });

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      return {
        ...prev,
        [type]: value
      };
    });
  };

  const filteredProducts = menProduct.filter(product => {
    const isWithinPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesProductType = filters.productType.length === 0 || filters.productType.includes(product.type);
    const matchesSize = filters.size.length === 0 || filters.size.some(size => product.size.includes(size));
    return isWithinPriceRange && matchesProductType && matchesSize;
  });

  return (
    <>


      <div className="product-listing container">
        <div className="filters pt-5">
          <h4 className='py-3 welcome-font fw-bold'>Filters</h4>
          <div className="filter-section py-2">
            <h5 className='welcome-font fw-bold fs-3'>Price</h5>
            <input
              type="range"
              min="0"
              max="2000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], e.target.value])}
            />
            <div>₹ {filters.priceRange[0]} To ₹ {filters.priceRange[1]}</div>
          </div>

          <div className="filter-section py-5">
            <h5 className='welcome-font fw-bold fs-3'>Product Type</h5>

            <div><label className='welcome-font fs-4'><input type="checkbox" value="Shirts" onChange={(e) => handleFilterChange('productType', e.target.checked ? [...filters.productType, e.target.value] : filters.productType.filter(type => type !== e.target.value))} /> Shirts</label></div>
          </div>

          <div className="filter-section">
            <h5 className='welcome-font fw-bold fs-3' fw-bold>Size</h5>
            <div><label className='welcome-font fs-4'><input type="checkbox" value="S" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> S</label></div>
            <div><label className='welcome-font fs-4'><input type="checkbox" value="M" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> M</label></div>
            <div><label className='welcome-font fs-4'><input type="checkbox" value="L" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> L</label></div>
          </div>
        </div>

        <div className="product-grid justify-content-center">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card col-3 pb-3 ">
              <img src={product.image} className='w-100 p-3 womens-imgSet' />
              <h5 className='welcome-font fw-bold fs-5 pt-2'>{product.productName}</h5>
              <p className='welcome-font fs-6'>₹{product.price}</p>
              <button className='py-1 px-2 border-0 rounded-2 text-white women-addto-cart-btn p-font'>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
