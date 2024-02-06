const Sheep = ({sheep}) => {
    const {mission_name, launch_year, mission_path_small, links} = sheep;


    return (
        <div>>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div>mission_path_small: {mission_path_small}</div>
            <div>links :{links.mission_patch_small}</div>
        </div>
    );
};

export {Sheep};