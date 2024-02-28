import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function ProductPage (){
    const [barcode, setBarcode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState([]);
    const [idEdit, setIdEdit] = useState(null);

    const onBarcodeChange = (e) => {
        setBarcode(e.target.value);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onPriceChange = (e) => {
        setPrice(e.target.value);
    };

    const onAddProduct = () => {

        var item = {
            "barcode": barcode,
            "name": name,
            "price": price,
        }

        if(idEdit == null) {
            var productTmp = [...product, item];
            setProduct(productTmp);
        }else{
            productTmp = product;
            productTmp[idEdit].barcode = barcode;
            productTmp[idEdit].name = name;
            productTmp[idEdit].price = price;
            setProduct([...productTmp]);
        }
        onReset();
    }

    const onReset = () => {
        setBarcode('');
        setName("");
        setPrice('');
        setIdEdit(null);
    }

    const onRemove = (item, index) =>{
        var data = product.filter((item, i)=> i !== index);
        setProduct(data);
    }

    const onEidt = (item, index) =>{
        setBarcode(item.barcode)
        setName(item.name)
        setPrice(item.price)
        setIdEdit(index)
        // onReset();
    }   

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center" }} className="text-4xl font-semibold text-red-500">ProductPage</h1>

            <div className="space-y-4 max-w-screen-xs">
                <div className="flex flex-col">
                    <label>Barcode</label>
                    <input
                        value={barcode}
                        onChange={onBarcodeChange}
                        type='text' name ="name" placeholder='Enter Barcode'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                </div>
                <div className="flex flex-col">
                    <label>Name</label>
                    <input 
                        value={name}
                        onChange={onNameChange} type='text' 
                        placeholder='Enter Product'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                </div>
                <div className="flex flex-col">
                    <label>Price</label>
                    <input
                        value={price}
                        onChange={onPriceChange} type='text' 
                        placeholder='Enter Price' 
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                    />
                </div>
                <div className="flex justify-between space-x-4">
                    <button onClick={onAddProduct}
                            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                    >{idEdit == null ? "Add" : "Update"}</button>
                    <button
                        onClick={onReset}
                        className="text-white bg-gray-500 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                    >Reset</button>
                </div>
            </div>
            <table className="table-auto w-1/2 mt-4">
                <thead className="border">
                    <tr>
                        <th className="border p-3 text-left">No.</th>
                        <th className="border p-3 text-left">Product Code</th>
                        <th className="border p-3 text-left">Product Name</th>
                        <th className="border p-3 text-left">Price</th>
                        <th className="border p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="border">
                    {product.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td className="border p-3">{index+1}</td>
                                <td className="border p-3">{item.barcode}</td>
                                <td className="border p-3">{item.name}</td>
                                <td className="border p-3">{item.price}</td>
                                <td className="border p-3">
                                    <button 
                                        onClick={()=> onRemove(item, index)}
                                        className="bg-red-500 text-white rounded-full px-3 py-1">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    <button
                                        onClick={()=> onEidt(item, index)}
                                        className="bg-green-500 text-white rounded-full px-3 py-1 ml-4">
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ProductPage