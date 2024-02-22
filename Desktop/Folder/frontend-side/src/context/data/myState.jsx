import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import { fireDB } from '../../server/server-side/firebase/FirebaseConfig';
import {Timestamp, collection, addDoc, onSnapshot, orderBy, query, setDoc, deleteDoc,doc, getDocs} from 'firebase/firestore'
import axios from 'axios';
import { toast } from 'react-toastify';


function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
      title : null,
      price: null,
      imageUrl: null,
      category: null,
      description: null,
      time : Timestamp.now(),
      date: new Date().toLocaleDateString(
           "en-US",
           {
            mont: "short",
            day: "2-digit",
            year: "numeric"
           }
      )
  });

  const toggleMode = () => {
        if(mode === 'light'){
           setMode('dark');
           document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }else{
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
  };
   
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      getProductData()
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800)

      // closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  const edithandle = (item) => {
      setProducts(item);
  }

  const updateProduct = async() => {
    setLoading(true)
       try{
        await setDoc(doc(fireDB, "products", products.id), products);
        toast.success("Product Updated successfully")
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 800)
        getProductData();
        setLoading(false)
     
       }catch(error){
        setLoading(false)
        console.log(error)
       }
       setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  const [order, setOrder] = useState([]);

  const getOrderData = async() => {
     setLoading(true);
     try{
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
         ordersArray.push(doc.data());
         setLoading(false);
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
     }catch(error){
     console.log(error)
     setLoading(false)
     }
  }

  useEffect(() => {
       getProductData();
       getOrderData();
  }, []);

  const[user, setUser] = useState([]);

  const getUserData = async() => {
       setLoading(true);
       try{
        const result = await getDocs(collection(fireDB, "user"))
        const usersArray = [];
       result.forEach((doc) => {
         usersArray.push(doc.data());
         setLoading(false)
       });
       setUser(usersArray);
       console.log(usersArray);
       setLoading(false);
       }catch(error){
         console.log(error);
         setLoading(false)
       }
  }
  useEffect(() => {
      getUserData();
  })

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <myContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct,product, edithandle, updateProduct, deleteProduct, order, user, searchkey, setFilterPrice,setSearchkey,filterPrice,setFilterType,filterType }}>
      {props.children}
    </myContext.Provider>
  );
}

function validateProduct(product) {
  return product.title && product.price && product.imageUrl && product.category && product.description;
}

export default MyState;