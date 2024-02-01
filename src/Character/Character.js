const Character = ({character}) => {
    const {name, img, status, species, gender} = character;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <img
                src={img}
                alt={name}
            />
        </div>
    );
};

export {Character};