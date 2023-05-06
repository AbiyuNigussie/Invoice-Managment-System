import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { getAllProducts } from "../services/ProductService";
import AddProduct from "../components/AddProduct";

const CreateInvoicePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleChange = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    let res = getAllProducts();
    res.then((r) => {
      r.map((item) => (item.quantity = 0));
      setProducts(r);
    });
  }, []);
  return (
    <div className="container bg-white pt-14 overflow-y-auto h-full">
      <div className="container flex px-6 py-3 gap-2 items-center text-sky-500">
        <IoIosAdd className="h-10 w-10" />
        <p className="text-3xl font-serif">Create Invoice</p>
      </div>
      <form
        className="mx-5 my-2 px-4 py-5 border flex flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-8 p-10 border-solid border border-sky-500 rounded-md">
          <div>
            <p className="text-2xl text-gray-500 font-sans">CUSTOMER INFO</p>
          </div>
          <div className="flex flex-col gap-1 w-1/3">
            <label className="pl-4 text-l text-slate-800 inline-block font-sans">
              CUSTOMER NAME
            </label>
            <input
              type="text"
              name="c_name"
              placeholder="Enter name"
              className="h-10 outline-none rounded-md border-solid border-slate-950 border focus:border-sky-300 px-3 text-lg font-serif"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/3">
            <label className="pl-4 text-l text-slate-800 inline-block font-sans">
              CUSTOMER ADDRESS
            </label>
            <input
              type="text"
              name="c_address"
              placeholder="Enter address"
              className="h-10 outline-none rounded-md border-solid border-slate-950 border focus:border-sky-300 px-3 text-lg font-serif"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/3">
            <label className="pl-4 text-l text-slate-800 inline-block font-sans">
              CUSTOMER CONTACT
            </label>
            <input
              type="text"
              name="c_contact"
              placeholder="Enter contact"
              className="h-10 outline-none rounded-md border-solid border-slate-950 border focus:border-sky-300 px-3 text-lg font-serif"
              onChange={handleChange}
            />
          </div>
        </div>
        <AddProduct
          products={products}
          setProducts={setProducts}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </form>
    </div>
  );
};

export default CreateInvoicePage;
