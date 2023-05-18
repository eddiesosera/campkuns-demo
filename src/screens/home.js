import React, { useEffect, useState } from "react";
import SelectCategory from "./additional/popup/home/selectCat";
import TopBar from "../components/topBar";
import PostCard from "./additional/components/postCard";
// import { posts } from '../data/database/posts'
import axios from 'axios'
import { Form } from "antd";
import { Moments } from "./additional/components/moments";
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

            <div className="posts-wrap" style={{ padding: '20px 0', overflow: 'none', height: 'fit-content' }} >
                {posts?.map((post, i) => {
                    return (
                        <>
                            <PostCard key='' post={post} user={user} />
                            {/* <PostCard post={post} /> */}
                            <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '100vw', margin: '20px auto' }} />
                        </>
                    )
                })}

                <div style={{ width: '100vw', maxWidth: '470px', margin: '0 auto' }}>
                    <SimlarPicks />
                </div>

                {/* <div style={{ margin: '0 auto', width: 'fit-content' }}>
                    <video style={{ borderRadius: '15px', margin: '0 auto', width: "95vw" }} height="240"  controls source src="https://assets.liveapi.com/videos/LiveAPI_Sample.mp4" type="video/mp4" />
                </div> */}

                <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '100vw', margin: '20px auto' }} />

                {/* Advertisement layout */}
                <div style={{ height: '400px', width: '93vw', maxWidth: '470px', padding: '20px', fontFamily: 'Montserrat', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', background: '#f4eae3', margin: '0 auto', marginBottom: '20px', borderRadius: '15px' }}>
                    <div></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <div style={{ marginBottom: '20px', color: '#333333' }}>NOW Gallery optionwra\


                        </div>
                        <button style={{ width: '250px', height: '45px', borderRadius: '15px', position: 'relative', bottom: '0', border: '2px solid orange', color: 'orange', fontFamily: 'Poppins', fontWeight: '500', marginBottom: '20px' }}>Explore Gallery</button>
                    </div>

                </div>

                <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '100vw', margin: '20px auto' }} />

                {posts?.map((post, i) => {
                    return (
                        <>
                            <PostCard key='' post={post} user={user} />
                            {/* <PostCard post={post} /> */}
                            <hr style={{ border: '0.5px solid #2B2928', maxWidth: '470px', width: '100vw', margin: '20px auto' }} />
                        </>
                    )
                })}

            </div>



            <div style={{ paddingBottom: '10px' }}></div>
        </div>




    )
}

export default Home