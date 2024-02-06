import {useEffect, useState} from "react";
import {Sheep} from "../Sheep/Sheep";
import {SheepDetails} from "../SheepDetails/SheepDetails";
import {sheepService} from "../services/sheepService";
const Sheeps = () => {
    const [sheepDetails, setSheepDetails] = useState(null);
    const [filteredSheeps, setFilteredSheeps] = useState([]);

    useEffect(() => {
        sheepService.getAll().then(({ data }) => {
            const filteredData = data.filter(item => item.launch_year !== '2020');
            setFilteredSheeps(filteredData);
        });
    }, []);

    const getCurrentSheep = (sheep) => {
        setSheepDetails(sheep)
    }

    return (
        <div>
            {filteredSheeps.map(sheep => <Sheep key={sheep.flight_number} sheep={sheep} getCureentSheep={getCurrentSheep}/>)}
            <hr/>
            {sheepDetails && <SheepDetails sheepDetails={sheepDetails}/>}

        </div>
    );
};

export {Sheeps};