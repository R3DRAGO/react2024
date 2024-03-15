import {useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux/slices/carSlice";
import {Car} from "./Car";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const [expanded, setExpanded] = useState<string>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setExpanded={setExpanded} expanded={expanded}/>)}
        </div>
    );
};

export {Cars};