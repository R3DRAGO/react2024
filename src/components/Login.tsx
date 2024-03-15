import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IAuth} from "../interfaces";
import {useAppDispatch, useAppLocation, useAppSelector} from "../hooks";
import {authActions} from "../redux/slices/authSlice";
import {Button, TextField} from "@mui/material";

const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loginError} = useAppSelector(state => state.auth);
    const {state} = useAppLocation<{pathname:string}>();

    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === 'fulfilled') {
            navigate(state?.pathname || '/cars')
        }
    }

    return (
        <div>
            {loginError && <h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)}
                  style={{margin: '10px 0', display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <TextField label="Username" variant="outlined" {...register('username')}/>
                <TextField label="Password" variant="outlined" {...register('password')}/>
                <Button variant={'contained'}>login</Button>
            </form>
        </div>
    );
};

export {Login};