import React, { useEffect, useState } from "react";
import SelectCategory from "./additional/popup/home/selectCat";
import TopBar from "../components/topBar";
import PostCard from "./additional/components/postCard";
import { posts } from '../data/database/posts'
import axios from 'axios'
import { Form } from "antd";


function Home() {
    const [postsA, setPostsA] = useState([])

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/v1/posts")
    //         .then((result) => {
    //             console.log(result.data.results);
    //             setPosts(result.data.results);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    return (

        <div className="homeScreen-wrap" style={{ marginTop: '0' }}>

            <TopBar />


            <div className="posts-wrap" style={{ padding: '15px 0' }}>
                { }
                {posts?.map((post, i) => {
                    return (
                        <>
                            {/* <PostCard post={post} description={post?.description} collaborator={['eddie', 'norton']} /> */}
                            <PostCard post={post} name={post?.artist?.name}
                                verified={post?.artist?.verified}
                                date={post?.metadata.date_published}
                                collaborator={post?.metadata.collaborator}
                                description={post?.metadata.description}
                                category={post?.metadata.category}
                                tags={post?.metadata.tags}
                                price={post?.metadata.price_tag}
                                fanAgrees={post?.metadata.statics.fan_agrees}
                                fanViews={post?.metadata.statics.fan_views}
                                title={post?.metadata.title} />
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