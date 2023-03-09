//src/containers/CakeContainer.js
import {useState} from 'react';
import Cake from "../components/Cake";

//Function CakeSalesTotal

const CakeContainer = () => {

    const [victoriaSpongeCount, setVictoriaSpongeCount] = useState(0);
    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCakeCount, setCarrotCakeCount] = useState(0);
    const [cakeSalesTotal, setCakeSalesTotal] = useState(0);


    return(
        <>
            <h2>Cakes: </h2>
            <Cake title={"Victoria Sponge"} ingredients={"butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5}/>       
            <Cake title={"Tea Loaf"} ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3}/>      
            <Cake title={"Carrot Cake"} ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5}/>
            <p>Total Cakes Sold: {victoriaSpongeCount + teaLoafCount + carrotCakeCount}</p>
            <p>Total Value of Cakes: {cakeSalesTotal}</p>
            <p>Total Average Ratings: Coming soon!</p>
        </>
    )

}

export default CakeContainer

