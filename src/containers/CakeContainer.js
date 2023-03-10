//src/containers/CakeContainer.js
import {useState} from 'react';
import Cake from "../components/Cake";



const CakeContainer = () => {

    const [victoriaSpongeCount, setVictoriaSpongeCount] = useState(0);
    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCakeCount, setCarrotCakeCount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const sellCake = (price) => {
        setTotalValue(totalValue + price);
      };

    return(
        <>
            <h2>Cakes: </h2>
            <Cake title={"Victoria Sponge"} ingredients={"butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5} sellCake={sellCake}/>       
            <Cake title={"Tea Loaf"} ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3} sellCake={sellCake}/>      
            <Cake title={"Carrot Cake"} ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5} sellCake={sellCake}/>
            <p>Total Cakes Sold: {victoriaSpongeCount + teaLoafCount + carrotCakeCount}</p>
            <p>Total Value of Cakes: {totalValue}</p>
            <p>Total Average Ratings: Coming soon!</p>
        </>
    )

}

//Extensions
//track the total value of the cakes sold.
//Add a "sell cake" button to each cake - when the button is clicked the total sale value should update appropriately.


export default CakeContainer

