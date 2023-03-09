// src/components/Counter.js

const Cake = ({title, ingredients, price, rating}) => {

    //Sell Button
    //const handleSell = () => {
        //onButtonClick(count + 1);
    //}

    return(
        <>
            <h3>{title} Cakes </h3>
            <p>Ingredients: {ingredients} </p>
            <p>Price: £{price} </p>
            <p>Rating: {rating} </p>
            <p>Current total: 0</p>
            <button>Sell Cake</button>
        </>
    )

}

export default Cake;