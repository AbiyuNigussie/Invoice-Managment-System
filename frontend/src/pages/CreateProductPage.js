import React from "react";
import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";

const CreateProductPage = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="container bg-white pt-14 overflow-y-auto">
      <div className="container flex px-6 py-3 gap-2 items-center text-sky-500">
        <IoIosAdd className="h-10 w-10" />
        <p className="text-3xl font-serif">Add Product</p>
      </div>

      <form
        className="mx-5 my-2 px-4 py-5 border flex flex-col gap-y-10"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-800 inline-block font-sans w-20 text-right">
            NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter product name"
            className="h-10 w-1/3 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 px-3 text-lg font-serif"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-700 inline-block font-sans w-20 text-right">
            PRICE
          </label>
          <input
            type="text"
            name="price"
            placeholder="enter price in ETB"
            className="h-10 w-1/3 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 px-3 text-lg font-serif"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-700 inline-block font-sans w-20 text-right">
            QUANTITY
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="enter quantity"
            className="h-10 w-1/3 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 px-3 text-lg font-serif"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <input
            type="submit"
            value="SAVE"
            className="bg-green-400 px-6 py-1 border border-slate-400 rounded-md text-lg text-slate-700 hover:cursor-pointer font-serif"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
