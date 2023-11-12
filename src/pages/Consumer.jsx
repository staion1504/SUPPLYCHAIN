import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import '../Manufacturer.module.css'


const Consumer = ({ contractInstance, currentAccount }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [productArray, setProductArray] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState(null);

  useEffect(() => {
    showAllItemHandler();
  }, [contractInstance]);


  async function purchaseHistoryHandler({ productCode1 }) {
    try {
      console.log(contractInstance)
      const res = await contractInstance.PurchaseHistory(productCode1);
      setPurchaseHistory(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching productArray:", error);
    }
  }

  async function showAllItemHandler() {
    try {
      console.log(contractInstance)
      const res = await contractInstance.getProductsArray();
      setProductArray(res);
    } catch (error) {
      console.error("Error fetching productArray:", error);
    }
  }

  async function purchaseItemHandler({ productCode, Amount }) {

    try {
      let res = await contractInstance.purchaseItemByConsumer(productCode, { value: Amount });

      alert("purchased Product");
    }
    catch (error) {
      console.log("Error in purchasing Item", error);
    }


  }



  async function addConsumerHandler() {
    try {
      let res = await contractInstance.addConsumer(currentAccount);

      alert("added", res);
    }
    catch (error) {
      console.log("Error in adding Consumer", error);
    }


  }

  async function checkConsumerHandler() {

    let res = await contractInstance.isConsumer(currentAccount);

    if (res) {
      toast.success("Consumer!!")
    } else {
      toast.warning("Not a consumer!!")
    }
  }



  return (
    <div className='bg-[#081229]  text-white '>
      <div>
        <h1 className='font-extrabold text-3xl'>Consumer Functions</h1>
      </div>
      <div className='mt-10 '>
        <button onClick={addConsumerHandler} className=" bg-[#ec5990] rounded-lg p-4 text-white font-bold">
          Add Account
        </button>

        <button onClick={checkConsumerHandler} className=" bg-[#ec5990] rounded-lg m-3 p-4 text-white font-bold">
          is  Customer Account
        </button>

        <div className='List flex'>
          <div class="flex-auto w-50 ">
            <h2 className='font-extrabold text-3xl'>Available Product List</h2>
            <ul>
              {productArray
                .filter((product) => product.itemState.toString() == 3)
                .map((product, index) => (

                  <li key={index}>
                    {index + 1}{')'}
                    Product Code: {product.productCode.toString()},
                    Product Name: {product.productName},
                    Product Price: {product.productPrice.toString()}
                  </li>

                ))}
            </ul>
          </div>
        </div>

        <div className='flex'>
          <div class="flex-auto w-50 ">
            <form onSubmit={handleSubmit(purchaseItemHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem]'>
              <h1 className='text-xl font-medium text-white'>Purchase Items</h1>
              <input type="text" className="p-2 rounded-md" placeholder="Product Code"  {...register("productCode", {})} />
              <input type="text" className="p-2 rounded-md" placeholder="Amount"  {...register("Amount", {})} />
              <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold'>Submit</button>
            </form>
          </div>
        </div>


        <div className='mt-5'>
          <h2 className='font-extrabold text-3xl'>Your Purchased List</h2>
          <ul>
            { }
            {productArray
              .filter((product) => product.itemState.toString() == 4)
              .map((product, index) => (
                <li key={index}>
                  {index + 1}{')'}
                  Product Code: {product.productCode.toString()},
                  Product Name: {product.productName},
                  Product Price: {product.productPrice.toString()}
                </li>
              ))}
          </ul>
        </div>




        <div className='flex'>
          <div className="flex-auto w-1/2">
            <form onSubmit={handleSubmit(purchaseHistoryHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem]'>
              <h1 className='text-xl font-medium text-white'>Item Purchase History</h1>
              <input type="text" className="p-2 rounded-md bg-gray-200" placeholder="Product Code" {...register("productCode1", {})} />
              <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold hover:bg-[#d53f70]'>Submit</button>
            </form>
          </div>

          <div className="flex-auto w-1/2 p-4">
            <div className="bg-slate-100 rounded-xl p-4 w-[47vw] mr-3">
              <div className="font-bold text-lg mb-2">
                {purchaseHistory ? (
                  <div className="mx-auto min-w-[45vw] bg-slate-100 p-8 rounded-xl shadow-2xl">
                    <h1 className="text-2xl text-black font-bold mb-4">Purchase History</h1>

                    <table class="w-full">
                      <tbody>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Product Code :</td>
                          <td className="text-pink-500">{purchaseHistory.itemproductCode.toNumber()}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Product Name :</td>
                          <td className="text-pink-500">{purchaseHistory.productName}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Product Price :</td>
                          <td className="text-pink-500">{purchaseHistory.productPrice.toNumber()}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Provider ID :</td>
                          <td className="text-pink-500">{purchaseHistory.ProviderID}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Provider Temperature :</td>
                          <td className="text-pink-500">{purchaseHistory.temperature_Provider.toNumber()}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Manufacturer ID :</td>
                          <td className="text-pink-500">{purchaseHistory.ManufacturerID}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Manufacturer Temperature :</td>
                          <td className="text-pink-500">{purchaseHistory.temperature_Manufacture.toNumber()}</td>
                        </tr>
                        <tr>
                          <td className="font-bold pr-4 text-slate-700">Consumer ID : </td>
                          <td className="text-pink-500">{purchaseHistory.ConsumerID}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
                  : <div className='text-gray-800'> No record Found...</div>
                }
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Consumer
