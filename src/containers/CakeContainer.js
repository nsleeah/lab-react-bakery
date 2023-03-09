//src/containers/CakeContainer.js
import {useState} from 'react';


const CakeContainer = () => {

    const [victoriaSpongeCount, setVictoriaSpongeCount] = useState(0);
    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCakeCount, setCarrotCakeCount] = useState(0);

    return(
        <>
            <h2>Activities:</h2>
            <p>Total Sign-ups: Coming soon!</p>
        </>
    )

}

export default CakeContainer