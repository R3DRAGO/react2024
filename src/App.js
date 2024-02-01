import {Character} from "./Character/Character";

const App = () => {
    const characters = [
        {
            id:1,
            name:'Homer',
            status: "Alive",
            species: "Human",
            gender: "Male",
            img:'https://ew.com/thmb/lW3I9ZLdQWyOldzLZw7P0vejsmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homer-simpson_235-b7d6e76b96bd4ec885e63745c626dd25.jpg'
        },
        {
            id:2,
            name:'Marge',
            status: "Alive",
            species: "Human",
            gender: "Female",
            img:'https://i.pinimg.com/564x/6d/99/26/6d9926fa54bc3650acf9295d997fc72c.jpg'
        },
        {
            id:3,
            name:'Bart',
            status: "Alive",
            species: "Human",
            gender: "Male",
            img:'https://i.pinimg.com/736x/2e/1f/b1/2e1fb1449cb81363338af29cb2093816.jpg'
        },
        {
            id:4,
            name:'Lisa',
            status: "Alive",
            species: "Human",
            gender: "Female",
            img:'https://facts.net/wp-content/uploads/2023/09/24-facts-about-lisa-simpson-the-simpsons-1693830278.jpg'
        },
        {
            id:5,
            name:'Meggy',
            status: "Alive",
            species: "Human",
            gender: "Female",
            img:'https://images2.alphacoders.com/467/467171.jpg'
        },
        {
            id: 6,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            id: 7,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 8,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 9,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 10,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            img: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 11,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            img: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }
    ]
    return (
        <div>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};