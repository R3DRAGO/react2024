const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;

    return (
        <div>>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>getCurrentPost(post)}>More details for post</button>
        </div>
    );
};

export {Post};