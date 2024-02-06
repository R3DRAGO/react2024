const Post = ({post, getCurrentPost}) => {
    const {userId, title} = post;

    return (
        <div>>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <button onClick={()=>getCurrentPost(post)}>More details for post</button>
        </div>
    );
};

export {Post};