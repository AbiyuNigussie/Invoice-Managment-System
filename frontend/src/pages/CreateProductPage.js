import React from "react";
import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";

const CreateProductPage = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = () => {};
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(inputs);
  // }, [inputs]);
  return (
    <div className="container bg-slate-300 pt-24 overflow-y-auto">
      <div className="container flex px-6 py-3 gap-2 items-center text-sky-500">
        <IoIosAdd className="h-10 w-10" />
        <p className="text-3xl font-serif">Add Product</p>
      </div>

      <form
        className="mx-5 my-2 px-4 py-5 border flex flex-col gap-y-10"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-800 inline-block font-serif w-20 text-right">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            className="h-10 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 pl-3 text-lg"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-800 inline-block font-serif w-20 text-right">
            NAME
          </label>
          <input
            type="text"
            className="h-10 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 pl-3 text-lg"
          />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-l text-slate-700 inline-block font-serif w-20 text-right">
            PRICE
          </label>
          <input
            type="text"
            className="h-10 outline-none rounded-md border-solid border-slate-400 border-2 focus:border-sky-300 pl-3 text-lg"
          />
        </div>
        <div className="flex items-center">
          <input
            type="submit"
            value="Save"
            className="bg-green-400 px-6 py-1 rounded-md text-lg text-slate-600 hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
