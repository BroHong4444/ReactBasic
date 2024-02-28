import { useState } from "react";

function HomePage (){

    const [x, setX] = useState(0);
    const [y, setY] = useState(100);
    const [count, setCount] = useState(0);
    const [arrName, setArrName] = useState(["Sok","San", "Tola", "MESA", "Vanda", "G-Devith", "G-dragon"]);

    const onIncrease  = () => {
        setCount(count+1);
    };

    const onDecrease = () => {
        setCount(count-1);
    };

    const onReset = () => {
        setCount(0);
    };

    const [arrayProduct, setArrayProduct] = useState([
        {
            id: 101,
            name: "Men Jean",
            full_price: 10,
            discount: 50,
            price: 5
        },
        {
            id: 102,
            name: "Men Tshirt",
            full_price: 10,
            discount: 50,
            price: 5
        },
        {
            id: 103,
            name: "Coca Cola",
            full_price: 10, 
            discount: 50,
            price: 5
        },
    ])

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center" }} className="text-4xl font-semibold text-red-500">HomePage</h1>
            <h1>X = {x}</h1>
            <h1>Y = {y}</h1>
            <h2>Count Number: {count}</h2>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "row", gap: 10 }}>
                <button className="buttonCount" onClick={onDecrease}>-</button>
                <button className="buttonCount" onClick={onIncrease}>+</button>
                <button className="buttonCount" onClick={onReset}>Reset Count</button>
            </div>

            <div>
                <h1>List Product</h1>
                { arrayProduct.map((item, index) =>{
                    return (
                        <div key={index}
                            style={{ 
                                padding: 10,
                                backgroundColor: "#eee",
                                width: 100,
                                height: 100,
                                margin: 10,
                            }}
                        >
                            <div>{item.name}</div>
                            <div>{item.full_price}</div>
                            <div><del>{item.discount}%</del></div>
                            <div>{item.price}</div>
                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}

export default HomePage