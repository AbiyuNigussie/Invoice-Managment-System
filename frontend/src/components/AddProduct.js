import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { DataList } from "react-datalist-field";

const AddProduct = (props) => {
  const [currentId, setCurrentId] = useState(1);
  const onAdd = () => {
    props.setSelectedProducts([
      ...props.selectedProducts,
      { ...props.selectedProduct, id: currentId },
    ]);
    setCurrentId(currentId + 1);
    console.log(props.selectedProduct);
    console.log(props.selectedProducts);
  };

  const handleChange = (event) => {
    const selectedElement = document.getElementsByName("selectedCard")[0];
    const updatedValue = {};

    if (event) {
      const name = event.target.name || "";
      const value = event.target.value || "";
      updatedValue[name] = value;
    }

    props.setSelectedProduct({
      ...props.selectedProduct,
      ...props.products[selectedElement.value - 1],
      ...updatedValue,
    });
  };

  return (
    <div className="flex flex-col gap-8 p-10 border-solid border border-sky-500 rounded-md mb-[100vh]">
      <div>
        <p className="text-2xl text-gray-500 font-sans">PRODUCTS</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-y-2">
          <p className="pl-4 text-xl text-slate-800 inline-block font-sans">
            Add Products
          </p>
          <div className="flex gap-4">
            <DataList
              options={props.products}
              id="id"
              left="name"
              selectedId=""
              selectedIdName="selectedCard"
              onOptionChange={handleChange}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="h-10 border px-3"
              value={props.selectedProduct.quantity || ""}
              onChange={handleChange}
            />

            <button
              className="h-10 px-5 bg-blue-500 border-r border-y border-slate-900 rounded-md "
              onClick={onAdd}
            >
              <IoIosAdd className="text-slate-100 text-3xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col border border-slate-800 rounded-md">
          <div className="flex t-head px-3">
            <div className="container text-center font-bold border-r border-r-slate-500 py-3">
              Product Name
            </div>
            <div className="container text-center font-bold border-r border-r-slate-500 py-3">
              Price
            </div>
            <div className="container text-center font-bold py-3">Quantity</div>
          </div>
          {props.selectedProducts &&
            props.selectedProducts.map((item, id) => (
              <div key={id} className="flex border-t border-t-slate-500  px-3">
                <div
                  key={id}
                  className="container text-left border-r border-r-slate-500"
                >
                  {item.name}
                </div>
                <div
                  key={id + 2}
                  className="container text-center border-r border-r-slate-500"
                >
                  {item.price}
                </div>
                <div key={id + 1} className="container text-center">
                  {item.quantity}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
