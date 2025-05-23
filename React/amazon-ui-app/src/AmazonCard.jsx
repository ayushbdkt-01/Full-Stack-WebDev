import "./AmazonCard.css";

function AmazonCard({title, description, feature, oldPrice, newPrice}){
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{feature}</p>
            <p style={textDecoration="lineThrough"}>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    )
}

export default AmazonCard;