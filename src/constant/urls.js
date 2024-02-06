const baseURL= 'https://jsonplaceholder.typicode.com'

const posts = '/posts'

const urls = {
    posts:{
        baseURL:posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}