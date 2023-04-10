import React from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const createPost = async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;

        const post = {
            title: title,
            author: author,
            description: description
        }

        await supabase
        .from('Posts')
        .insert(post)
        .select();

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description">
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost