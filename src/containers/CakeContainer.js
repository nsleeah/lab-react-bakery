//src/containers/CakeContainer.js
import {useState} from 'react';
import Cake from "../components/Cake";



const CakeContainer = () => { //Return JSX Inside..
    //Declaring States.
    const [victoriaSpongeCount, setVictoriaSpongeCount] = useState(0);
    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCakeCount, setCarrotCakeCount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [totalCakesSold, setTotalCakesSold] = useState(0);

    //Logic - Extension
    //Update Total Cakes Sold & Total Value Cakes
    const sellCake = (price, title) => {
        if (title === 'Victoria Sponge') {
          setVictoriaSpongeCount(victoriaSpongeCount + 1);
        } else if (title === 'Tea Loaf') {
          setTeaLoafCount(teaLoafCount + 1);
        } else if (title === 'Carrot Cake') {
          setCarrotCakeCount(carrotCakeCount + 1);
        }
        setTotalCakesSold(totalCakesSold + 1);
        setTotalValue(totalValue + price);
      };

    return(
        <>
            <h2>Cakes: </h2>
            <Cake title={"Victoria Sponge"} ingredients={"butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5} sellCake={(price) => sellCake(price, 'Victoria Sponge')}/>       
            <Cake title={"Tea Loaf"} ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3} sellCake={(price) => sellCake(price, 'Tea Loaf')}/>      
            <Cake title={"Carrot Cake"} ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5} sellCake={(price) => sellCake(price, 'Carrot Cake')}/>
            <p>Total Cakes Sold: {victoriaSpongeCount + teaLoafCount + carrotCakeCount}</p>
            <p>Total Value of Cakes: {totalValue}</p>
            <p>Total Average Ratings: Coming soon!</p>
        </>
    )

}


export default CakeContainer

