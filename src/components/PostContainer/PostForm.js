import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    const {reset, register, handleSubmit} = useForm();
    const save = (item) => {
        // console.log(post);
        postService.create(item).then(({data}) => setPosts(prev=>[...prev, data]));
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'title'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export {PostForm};