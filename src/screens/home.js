import React, { useEffect, useState } from "react";
import SelectCategory from "./additional/popup/home/selectCat";
import TopBar from "../components/topBar";
import PostCard from "./additional/components/postCard";
// import { posts } from '../data/database/posts'
import axios from 'axios'
import { Form } from "antd";
import Moments from "./additional/components/lifestyle";


function Home() {
    const [posts, setPosts] = useState([])
    const [latestpost, setLatestPost] = useState('')

    useEffect(() => {
        axios
            .get("http://10.0.0.106:5000/v1/posts?sortBy=createdAt:desc")
            .then((result) => {
                console.log(result.data.results);
                setPosts(result.data.results);
                setLatestPost(result.data.results.length)
            })
            .catch((error) => console.log(error));
    }, [latestpost]);

    const hideOptionOnScroll = false


    return (

        <div className="homeScreen-wrap" style={{ marginTop: '0', }}>

            <TopBar />

            <Moments />


            <div className="posts-wrap" style={{ padding: '15px 0', overflow: 'none', height: 'fit-content' }}>
                { }
                {posts?.map((post, i) => {
                    return (
                        <>
                            <PostCard post={post} />
                            {/* <PostCard post={post} /> */}
                            <br />
                            <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px' }} />
                            <br />
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default Home