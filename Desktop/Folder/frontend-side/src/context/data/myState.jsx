import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../helper';

function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'white' : 'rgba(17, 24, 39)';
  };

  const addProduct = async () => {
    if (!validateProduct(products)) {
      return toast.error('All fields are required');
    }
    try {
      const response = await axios.post(`${BASE_URL}/products/add`, products);
      if (response.status === 200) {
        toast.success('Product added successfully');
        setProducts([]);
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while adding the product');
    }
  };

  // const getProduct = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5050/products/product');
  //     if (response.status === 200) {
  //       setProducts(response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('An error occurred while fetching products');
  //   }
  // };

  const updateProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/products/update/${products._id}`, products);
      if (response.status === 200) {
        toast.success('Product updated successfully');
      } else {
        toast.error('Failed to update product');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while updating the product');
    }
    setLoading(false);
  };

  // const deleteProduct = async (product) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.delete('http://localhost:4500/products/delete/product');
  //     if (response.status === 200) {
  //       toast.success('Product deleted successfully');
  //       setProducts(products.filter(product => product._id !== id));
  //     } else {
  //       toast.error('Failed to delete product');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('An error occurred while deleting the product');
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <myContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, updateProduct }}>
      {props.children}
    </myContext.Provider>
  );
}

function validateProduct(product) {
  return product.title && product.price && product.imageUrl && product.category && product.description;
}

export default MyState;