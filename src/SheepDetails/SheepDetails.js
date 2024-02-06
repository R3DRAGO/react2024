const SheepDetails = ({sheepDetails}) => {
    const {flight_number} = sheepDetails
    return (
        <div>
            <div>flight_number: {flight_number}</div>

        </div>
    );
};

export {SheepDetails};