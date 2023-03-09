// src/components/Counter.js

const Cake = ({title, ingredients, price, rating}) => {

    return(
        <>
            <h3>{title} Cakes </h3>
            <p>Ingredients: {ingredients} </p>
            <p>Price: {price} </p>
            <p>Rating: {rating} </p>
            <p>Current total: 0</p>
        </>
    )

}

export default Cake;