import axios from "axios"

export const AuthService = {
    handleLogin: (props) =>{
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {
                foo: JSON.stringify(props.details)
              }
        })
        .then((response) => {
            props.setId(response.data.id);
            console.log(response.data);
        }); 
    },
};

export const PostService = {
    handleComments: (props) => {
        
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/comments',
            data: {
                foo: JSON.stringify(props.post)
              }
        })
        .then((response) => console.log(response.data));
    }
}



