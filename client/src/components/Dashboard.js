import axios from 'axios'
import React, { useState } from 'react'
import { navigate, Link } from '@reach/router'


const Dashboard = (props) => {
    const {passedMessage, setPassedMessage, user} = props
    const [posts, setPosts] = useState([])

    const seeAllPosts = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/api/post')
            .then(response => {
                console.log(response.data.results)
                setPosts(response.data.results)
            })
    }

    const seeYourPosts = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/api/post')
            .then(response => {
                const postList = posts.filter((message, i ) => message.username === props.username)
                setPosts(postList)
            })
    }
    // const AddPost = (e) => {
    //     e.preventDefault()
    //     navigate(`/${user.username}/new`)

    // }
    const messageHandler = (message) => {
        console.log(message)
        setPassedMessage(message)
        navigate(`/play`)
    }

    return (
        <>
        <div className="DashboardCss">
            <h1>Posts</h1>
        
        <div>
            <h3>Choose which posts you would like to see</h3>
            <button type ="button" onClick={seeAllPosts}> All Posts</button>
            <button type ="button" onClick={seeYourPosts}>Your Posts</button>
            <button type ="button" ><Link to={`/${user.username}/new`}>Add a New Post</Link></button>
        </div>
        <div>
            {posts.map((user, i) => {
                return <ul key = {i}> <h4>{user.username} </h4>                        
                    {user.posts.map((message, i) => {
                        return <li key={i}>{message.postBody} <button onClick={() => messageHandler(message.postBody)}>Play</button></li>
                    })}
                </ul>
            })}
        </div>
        </div>
    </>
    )
}

export default Dashboard
