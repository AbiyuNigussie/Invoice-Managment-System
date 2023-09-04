import React from "react";
import { FaFileInvoice } from "react-icons/fa";

const InvoicePrintPreview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-4xl flex gap-x-3 bg-green-400 p-5">
        <FaFileInvoice />
        <h1>Sells Invoice</h1>
      </div>
      <div className="p-5 text-left">
        <table>
          <tr>
            <th className="w-42">Customer Name:</th>
            <td>{props.data.c_name}</td>
          </tr>
          <tr>
            <th className="w-42">Customer Address:</th>
            <td>{props.data.c_address}</td>
          </tr>
          <tr>
            <th className="w-42">Customer Contact:</th>
            <td>{props.data.c_contact}</td>
          </tr>
        </table>
      </div>
      <div className="p-5 w-full">
        <table className="w-full text-center">
          <tr className="h-9">
            <th className="border-solid border border-black">Product Name</th>
            <th className="border-solid border border-black">Quantity</th>
            <th className="border-solid border border-black">Price</th>
            <th className="border-solid border border-black">Amount</th>
          </tr>
          {props.data.selected_products &&
            props.data.selected_products.map((item) => (
              <tr className="h-9">
                <td className="border-solid border-x border-black">
                  {item.name}
                </td>
                <td className="border-solid border-x border-black">
                  {item.quantity}
                </td>
                <td className="border-solid border-x border-black">
                  {item.price}
                </td>
                <td className="border-solid border-x border-black">
                  {(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}

          <tr className="border-t border-solid border-black">
            <th></th>
            <th></th>
            <th className="border border-solid border-black">Sub Total: </th>
            <th className="border border-solid border-black">
              {props.data.total}
            </th>
          </tr>
          <tr>
            <th></th>
            <th></th>

            <th className="border border-solid border-black">Tax: </th>
            <th className="border border-solid border-black">15%</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th className="border border-solid border-black">Total: </th>
            <th className="border border-solid border-black">
              {props.data.sub_total}
            </th>
          </tr>
        </table>
        <table className="flex flex-col items-end mr-10"></table>
      </div>
    </div>
  );
});

export default InvoicePrintPreview;
