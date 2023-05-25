import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { DataList } from "react-datalist-field";

const AddProduct = (props) => {
  const [currentId, setCurrentId] = useState(0);
  const [total, settotal] = useState(0);
  const onAdd = () => {
    props.setSelectedProducts([
      ...props.selectedProducts,
      { ...props.selectedProduct, id: currentId },
    ]);
    setCurrentId(currentId + 1);
    console.log(props.selectedProduct);
    console.log(props.selectedProducts);
  };

  const onDelete = (event) => {
    const value = parseInt(event.target.id);
    console.log(value);
    props.setSelectedProducts((prevStates) =>
      prevStates.filter((item) => item.id !== value)
    );
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
  useEffect(() => {
    settotal(
      props.selectedProducts.reduce((a, b) => {
        return a + b.quantity * b.price;
      }, 0)
    );
  }, [props.selectedProducts]);

  return (
    <div className="flex flex-col gap-8 p-10 border-solid border border-sky-500 rounded-md mb-[100vh]">
      <div>
        <p className="text-2xl text-gray-500 font-sans">PRODUCTS</p>
      </div>
      <div className="flex flex-col gap-10 relative">
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
        <div className="flex flex-col border border-slate-300 rounded-sm h-80 max-h-80 overflow-y-scroll">
          <div className="flex t-head px-3 sticky top-0 bg-slate-50">
            <div className="container text-center font-bold py-3">
              Product Name
            </div>
            <div className="container text-center font-bold py-3">Price</div>
            <div className="container text-center font-bold py-3">Quantity</div>
            <div className="container text-center font-bold py-3">Actions</div>
          </div>
          {props.selectedProducts &&
            props.selectedProducts.map((item, id) => (
              <div key={id} className="flex border-t border-t-slate-300  px-3">
                <div key={id} className="container text-center py-3">
                  {item.name}
                </div>
                <div key={id + 1} className="container text-center py-3">
                  {item.price} Birr
                </div>
                <div key={id + 2} className="container text-center py-3">
                  {item.quantity}
                </div>
                <div key={id + 3} className="container text-center py-3">
                  <button
                    className="bg-red-600 text-slate-50 px-3 py-1 rounded-md"
                    onClick={onDelete}
                    id={item.id}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="container flex flex-col">
          <p>Total: {total.toFixed(2)} Birr</p>
          <p>Tax(15%): {(total * 0.15).toFixed(2)} Birr </p>
          <p className="font-bold">
            total: {(total - total * 0.15).toFixed(2)} Birr
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
