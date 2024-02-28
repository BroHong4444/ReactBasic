import { useState } from "react";

function AboutPage (){
    var cat = [
        // "MackBook",
        // "Lenevo",
        // "Dell Latitude",
        // "Asus Gaming",
    ]

    const [category, setCategory]  = useState(cat);
    const [txtCat, setTxtCat] = useState("");

    const onChangeCat = (event) => {
        setTxtCat(event.target.value);
    }
    
    const onClickAdd = () => {
        // Way1
            // var data = category;
            // data.push(txtCat)
            // setCategory([...data])
        //Way2
            // setCategory([...category, txtCat]);

        //Way3
            // var data = category.concat(txtCat);
            // setCategory([...data]);

        // Way4
            var data = [...category, txtCat];
            setCategory(data);

        setTxtCat("")
    }

    const onRemove = (item, index) =>{
        //way1
            // category.splice(index, 1);
            // setCategory([...category]);

        //way2
            // var data = category;
            // data.splice(index, 1);
            // setCategory([...data]);

        // way3
            var data = category.filter((item, i) => i != index);
            setCategory([...data]);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center" }} className="text-4xl font-semibold text-red-500">About Page</h1>
            {/* <div>{txtCat}</div> */}
            <div style={{
                display: "flex",
                gap: 5,
            }}>
                <input
                    value={txtCat}
                    placeholder="Category"
                    style={{ 
                        padding: 10,
                        border: "1px solid #ccc",
                        fontSize: "18px",
                        outline: "none",
                        borderRadius: "5px",
                    }}
                    onChange={onChangeCat}
                />
                <button type="button"
                    className="!bg-primary text-white"
                    style={{ 
                        padding: "10px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }}
                    onClick={onClickAdd}
                >Add Category</button>
            </div>
            <div style={{ marginTop: "10px" }}>
                <h1>List Category</h1>
                <div style={{ marginTop:"5px" }}>
                    {category.map((item, index) => {
                        return (
                            <div style={{ 
                                padding: "10px 0px",
                            }}>
                                <div key={index} style={{ 
                                    display: "flex",
                                    gap: "10px",
                                }}>
                                    <span key={index}>{index+1}. {item}</span>
                                    <button className="bg-secondary text-white py-0.5 px-1 rounded-sm" onClick={()=> onRemove(item,index)}>Remove</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutPage