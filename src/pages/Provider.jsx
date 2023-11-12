import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Provider = ({ contractInstance, currentAccount }) => {
  const [result, setResult] = useState(false);
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [temperature, setTemperature] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function addProviderHandler() {
    try {
      let res = await contractInstance.addProvider(currentAccount);
      alert(res);
    } catch (error) {
      console.log("Error in adding provider", error);
    }
  }

  async function checkProviderHandler() {
    let res = await contractInstance.isProvider(currentAccount);
    if (res) {
      toast.success("Provider!!!");
    } else {
      toast.error("Not a provider");
    }
  }

  async function produceItemHandler() {
    try {
      console.log(productCode, productName, price, temperature);
      let res = await contractInstance.produceItemByProvider(productCode, productName, price, temperature);
      let tx = res.wait();
      if (tx) {
        toast.info(`${productName} produced`);
      }
      setPrice("");
      setProductCode("");
      setProductName("");
      setTemperature("");
    } catch (error) {
      toast.error("Something went wrong , item not produced..")
    }
  }

  return (
    <div className='bg-[#081229] text-white h-screen'>
      <div>
        <h1 className='font-extrabold text-3xl'>Material Provider Functions</h1>
      </div>
      <div className='mt-10'>
        <button onClick={addProviderHandler} className=" bg-[#ec5990] rounded-lg p-4 text-white font-bold">
          Add Account
        </button>
        <button onClick={checkProviderHandler} className=" bg-[#ec5990] rounded-lg m-3 p-4 text-white font-bold">
          is  Provider Account
        </button>
        <form onSubmit={handleSubmit(produceItemHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem] m-auto'>
          <h1 className='text-xl font-medium m-auto text-slate-50'>Produce Items</h1>
          <input type="text" className="p-2 rounded-md" placeholder="Product Code" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
          <input type="text" className="p-2 rounded-md" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          <input type="text" className="p-2 rounded-md" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="text" className="p-2 rounded-md" placeholder="Temperature" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
          <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Provider;
