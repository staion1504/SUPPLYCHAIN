import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ethers } from 'ethers';
import '../Manufacturer.module.css'


const Manufacturer = ({ contractInstance, currentAccount }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [productArray, setProductArray] = useState([]);
      
    useEffect(() => {
        showAllItemHandler();
    }, [contractInstance]);
     
    async function showAllItemHandler() {
        try {
            // console.log(contractInstance)
            const res = await contractInstance.getProductsArray();
            setProductArray(res);
        } catch (error) {
            console.error("Error fetching productArray:", error);
        }
    }

    async function sellItemHandler({ productCode2, Price }) {

        try {
            let res = await contractInstance.sellItemByManufacturer(productCode2, Price);
            alert("Product Kept for sell");
        }
        catch (error) {
            console.log("Error in selling Item", error);
        }


    }

    async function processItemHandler({ productCode1, ChnageName, Temperature }) {

        try {
            let res = await contractInstance.processedItemByManufacturer(productCode1, ChnageName, Temperature);
            alert("Product Processed");
        }
        catch (error) {
            console.log("Error in Processing Item", error);
        }


    }


    async function purchaseItemHandler({productCode,Amount}) {

        // console.log(props);

        
        try {
            console.log(productCode);
            console.log(Amount);
            
            let res = await contractInstance.purchaseItemByManufacturer(productCode,{value: Amount} );
                
           toast.success("Purchased Product")
        }
        catch (error) {
            console.log("Error in purchasing Item", error);
        }


    }



    async function addManufacturerHandler() {
        try {
            let res = await contractInstance.addManufacturer(currentAccount);

            if(res){
                toast.success("Added successfully")
            }
        }
        catch (error) {
            console.log("Error in adding Manufacturer", error);
        }


    }

    async function checkManufacturerHandler() {

        let res = await contractInstance.isManufacturer(currentAccount);
        if (res) {
            toast.info("Manufacturer!!")
        } else {
            toast.warning("Not a manufacturer..");
        }

    }

    // console.log(productArray);


    return (
        <div className='bg-[#081229]  text-white '>
            <div>
                <h1 className='font-extrabold text-3xl'>Laboratory Functions</h1>
            </div>
            <div className='mt-10 '>
                <button onClick={addManufacturerHandler} className=" bg-[#ec5990] rounded-lg p-4 text-white font-bold">
                    Add Account
                </button>

                <button onClick={checkManufacturerHandler} className=" bg-[#ec5990] rounded-lg m-3 p-4 text-white font-bold">
                    is  Laboratory Account
                </button>
                <hr className='bg-white'></hr>

                <div className='List flex items-center p-4'>
                    <div className="flex-auto w-[60vw]">
                        <h2 className='font-extrabold text-3xl'>Available Product List</h2>
                        <div className='flex flex-wrap gap-6'>
                            {productArray
                                .filter((product) => product.itemState.toString() == 0)
                                .map((product, index) => (
                                    <div className="bg-[#ec5990] p-3 min-w-[26vw] rounded-lg">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Code :</td>
                                                    <td className="text-white">{product.productCode.toString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Name :</td>
                                                    <td className="text-white">{product.productName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Price :</td>
                                                    <td className="text-white">{product.productPrice.toString()}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div class="flex-auto w-[40vw]">
                        <form onSubmit={handleSubmit(purchaseItemHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem]'>
                            <h1 className='text-xl font-medium text-white'>Purchase Items</h1>
                            <input type="text" className="p-2 rounded-md" placeholder="Product Code"  {...register("productCode", {})} />
                            <input type="text" className="p-2 rounded-md" placeholder="Amount"  {...register("Amount", {})} />
                            {/* <input type="text" className="invisible p-2 rounded-md"  /> */}

                            <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold'>Submit</button>
                        </form>
                    </div>
                </div>
                <br></br>

                <hr className='bg-white'></hr>



                <div className='List flex items-center p-4'>
                    <div class="flex-auto w-[60vw]">
                        <h2 className='font-extrabold text-3xl'>Your Purchased List</h2>
                        <div className='flex flex-wrap gap-6'>
                            {/* {console.log(productArray)} */}
                            {productArray
                                .filter((product) => product.itemState.toString() == 1)
                                .map((product, index) => (
                                    <div className="bg-[#ec5990] p-3 min-w-[26vw] rounded-lg">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Code :</td>
                                                    <td className="text-white">{product.productCode.toString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Name :</td>
                                                    <td className="text-white">{product.productName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Price :</td>
                                                    <td className="text-white">{product.productPrice.toString()}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                ))}

                        </div>
                    </div>

                    <div class="flex-auto w-[40vw]">
                        <form onSubmit={handleSubmit(processItemHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem]'>
                            <h1 className='text-xl font-medium text-white'>Process Items</h1>
                            <input type="text" className="p-2 rounded-md" placeholder="Product Code"  {...register("productCode1", {})} />
                            <input type="text" className="p-2 rounded-md" placeholder="Chnage Name"  {...register("ChnageName", {})} />
                            <input type="text" className="p-2 rounded-md" placeholder="Temperature" {...register("Temperature", {})} />
                            <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold'>Submit</button>
                        </form>
                    </div>
                </div>

                <br></br>
                <br></br>

                <hr className='bg-white'></hr>

                <div className='List flex items-center p-4'>
                    <div class="flex-auto w-[60vw]">
                        <h2 className='font-extrabold text-3xl'>Your Processed List</h2>
                        <div className='flex flex-wrap gap-6'>
                            {/* {console.log(productArray)} */}
                            {productArray
                                .filter((product) => product.itemState.toString() == 2)
                                .map((product, index) => (
                                    <div className="bg-[#ec5990] p-3 min-w-[26vw] rounded-lg">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Code :</td>
                                                    <td className="text-white">{product.productCode.toString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Name :</td>
                                                    <td className="text-white">{product.productName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-4 text-white">Product Price :</td>
                                                    <td className="text-white">{product.productPrice.toString()}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                ))}

                        </div>
                    </div>

                    <div class="flex-auto w-[40vw]">
                        <form onSubmit={handleSubmit(sellItemHandler)} className='flex flex-col gap-4 text-black bg-slate-700 rounded-xl p-10 max-w-[40rem]'>
                            <h1 className='text-xl font-medium text-white'>Sell an Item</h1>
                            <input type="text" className="p-2 rounded-md" placeholder="Product Code"  {...register("productCode2", {})} />
                            <input type="text" className="p-2 rounded-md" placeholder="Price"  {...register("Price", {})} />
                            <button type="submit" className='bg-[#ec5990] rounded-lg p-4 text-white font-bold'>Submit</button>
                        </form>
                    </div>
                </div>

                <hr className='bg-white'></hr>
            </div>
        </div>
    )
}

export default Manufacturer
