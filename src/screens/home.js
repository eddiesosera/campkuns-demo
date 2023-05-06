import React, { useEffect, useState } from "react";
import SelectCategory from "./additional/popup/home/selectCat";
import TopBar from "../components/topBar";
import PostCard from "./additional/components/postCard";
// import { posts } from '../data/database/posts'
import axios from 'axios'
import { Form } from "antd";
import Moments from "./additional/components/moments";


function Home() {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const [latestpost, setLatestPost] = useState('')

    //Posts
    useEffect(() => {
        axios
            .get("http://192.168.0.128:5000/v1/posts?sortBy=createdAt:desc")
            .then((result) => {
                console.log(result.data.results);
                setPosts(result.data.results);
                setLatestPost(result.data.results)
            })
            .catch((error) => console.log(error));
    }, [
        // latestpost
    ]);

    //Users
    useEffect(() => {
        axios
            .get("http://192.168.0.128:5000/v1/users")
            .then((result) => {
                console.log(result.data.results);
                setUser(result.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    const hideOptionOnScroll = false


    return (

        <div className="homeScreen-wrap" style={{ marginTop: '60px' }} >

            <TopBar />

            <Moments />

            <div className="posts-wrap" style={{ padding: '10px 0', overflow: 'none', height: 'fit-content' }}>
                {posts?.map((post, i) => {
                    return (
                        <>
                            <PostCard post={post} user={user} />
                            {/* <PostCard post={post} /> */}
                            <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '90vw', margin: '30px auto' }} />
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default Home