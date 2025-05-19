import "./Product.css";

function Product({title, description, price, featuresArray}) {

    // if(price > 20000){
    //     return(
    //         <div className="myClass">
    //             <h1>{title}</h1>
    //             <h2>{description}</h2>
    //             <h3>Price is: {price}/-</h3>
    //             <p>Discount = 5%</p>
    //             <h4>{featuresArray.map((element) => (
    //                 <li>{element}</li>
    //             ))}</h4> 
    //         </div>
    //     );
    // }

    // else {
    //     return(
    //         <div className="myClass">
    //             <h1>{title}</h1>
    //             <h2>{description}</h2>
    //             <h3>Price is: {price}/-</h3>
    //             <p>No Discount</p>
    //             <h4>{featuresArray.map((element) => (
    //                 <li>{element}</li>
    //             ))}</h4> 
    //         </div>
    //     );
    // }

    let styles={backgroundColor : price>20000 ? "pink" : ""};
    return (
        <div className="myClass" style={styles}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>Price is: {price}/-</h3>
            { price>20000 ? <p>"Discount = 5%"</p> :null}
            <h4>{featuresArray.map((element) => (
                <li>{element}</li>
            ))}</h4> 
        </div>
    );
    
}
 
export default Product;