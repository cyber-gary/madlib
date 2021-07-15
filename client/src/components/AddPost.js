import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'


const AddPost = (props) => {
    const {user, setUser} = props
    const [newPost, setNewPost] = useState("")

const newMessage = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/post/', user.posts)
        .then(response => {
            console.log(response)
            setNewPost(response.data.results)
            navigate(`/user/${user.username}`)
        })
        .catch(err => console.log(err))
}

const changeHandler = (e) => {
    setNewPost([e.target.name] = e.target.value)
}

    return (
        <div>
            <h1>This is your new lib</h1>
            <form onSubmit={newMessage}>
                <label htmlFor='newLib'>Post a message</label>
                <input type='textbox' name='newLib' onChange={changeHandler}/>
                <button>Add that sucker</button>
            </form>
        </div>
        

    )
}

export default AddPost
