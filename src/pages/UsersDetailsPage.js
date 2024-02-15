import {useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UserContainer/UserDetails";

const UsersDetailsPage = () => {
    // const [userDetails, setUserDetails] = useState(null)
    // const {id} = useParams();
    // const {state} = useLocation()
    const {data} = useLoaderData();

    // useEffect(() => {
    //     if (state?.user){
    //         setUserDetails(state.user)
    //     }else{
    //         userService.getById(id).then(({data})=>setUserDetails(data))
    //     }
    // }, [id, state.user]);

    return (
        <div>
            <UserDetails userDetails={data}/>
        </div>
    );
};

export {UsersDetailsPage};