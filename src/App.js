import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id:1,
            name:'Smith',
            img:'https://pm1.aminoapps.com/6878/fe74d47b261f536570f4a30da09f85e9af5fcf0br1-724-959v2_00.jpg'
        } ,
        {
            id:2,
            name:'Rick',
            img:'https://pm1.narvii.com/6821/35d5368cc28759b51ee08cbfb2c319da55c4ec72v2_00.jpg'
        },
        {
            id:3,
            name:'Jerry',
            img:'https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png'
        }
    ]
    return (
        <div>
            {characters.map(character=> <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};