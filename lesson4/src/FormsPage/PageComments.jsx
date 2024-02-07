import style from './PageComments.module.css';
import { useRef } from 'react';
import {PostService} from '../service/ApiSevrice.js'

const PageComments = (props) => {
    const nameRef = useRef('');
    const bodyRef = useRef('');
    const postComments = (e) => {
        e.preventDefault();
        const post = {
            name: nameRef.current.value,
            body: bodyRef.current.value,
            email: props.emaile,
            postId: props.id
        };
        console.log(post);
        // fetch('https://jsonplaceholder.typicode.com/comments', {
        //     method: 'POST',
        //     body: JSON.stringify(post)
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
        PostService.handleComments(post);
        const box = document.getElementsByClassName('PageComments_box__a3qsa');
        box[0].style.display = 'none';

    }

    return (
        <div className={style.box}>

            <h1>Write your comments</h1>
            <form onSubmit={postComments}>
                <label >
                    Name Comments:
                    <input type="text" ref={nameRef} />
                </label>
                <label >
                    Body:
                    <textarea ref={bodyRef} />
                </label>

                <input type="submit" value="Next" />
            </form>

        </div>
    );
}

export default PageComments;