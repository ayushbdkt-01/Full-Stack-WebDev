import Product from "./Product";

function ProductCard() {
    return (
        <div>
            <Product title='Laptop' description='This is a Laptop' price={50000} featuresArray={["f1", "f2"]} />
            <Product title='Phone' description='This is a Phone' price={20000} featuresArray={["f3", "f4"]}/>
            <Product title='Tablet' description='This is a Tablet' price={30000} featuresArray={["f5", "f6"]}/>
        </div>
    );
}

export default ProductCard;