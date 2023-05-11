import React, { useEffect, useState } from "react";
import SelectCategory from "./additional/popup/home/selectCat";
import TopBar from "../components/topBar";
import PostCard from "./additional/components/postCard";
// import { posts } from '../data/database/posts'
import axios from 'axios'
import { Form } from "antd";
import Moments from "./additional/components/moments";
import { SimlarPicks } from "./additional/components/similarPicks";
import BottomBar from "../components/bottomBar";
import { Loader } from "./additional/components/loader";


function Home() {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const [latestpost, setLatestPost] = useState('')
    const [loaderTgl, setLoaderTgl] = useState(true)

    //Show Navbar
    //document.querySelector('#app_nav_wrap').style.display = 'block'

    //Posts
    useEffect(() => {
        axios
            .get("http://10.0.0.106:5000/v1/posts?sortBy=createdAt:desc")
            .then((result) => {
                console.log(result.data.results);
                setPosts(result.data.results);
                setLatestPost(result.data.results)

                setTimeout(() => {
                    setLoaderTgl(false)
                }, 1000);
            })
            .catch((error) => console.log(error));
    }, [
        // latestpost
    ]);

    // //Users
    // useEffect(() => {
    //     axios
    //         .get("http://192.168.0.128:5000/v1/users")
    //         .then((result) => {
    //             console.log(result.data.results);
    //             setUser(result.data.results);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    // const hideOptionOnScroll = false


    return (

        <div className="homeScreen-wrap" style={{ marginTop: '60px', marginBottom: '60px', height: 'fit-content' }} >

            <TopBar />

            <div style={{ display: loaderTgl ? 'block' : 'none' }}>
                <Loader />
            </div>

            <Moments />

            <div className="posts-wrap" style={{ padding: '10px 0', overflow: 'none', height: 'fit-content' }} >
                {posts?.map((post, i) => {
                    return (
                        <>
                            <PostCard key='' post={post} user={user} />
                            {/* <PostCard post={post} /> */}
                            <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '90vw', margin: '30px auto' }} />
                        </>
                    )
                })}
                <div style={{ width: '100vw', maxWidth: '470px', margin: '0 auto' }}>
                    <SimlarPicks />
                </div>
            </div>
            <div style={{ paddingBottom: '60px' }}>

            </div>
        </div>




    )
}

export default Home