import React, { useEffect, useRef, useState } from "react";
import './css/search.css'
import TopBar from "../components/topBar";
import { NavLink } from "react-router-dom";

function Search() {

    const [insertSearch, setInsertSearch] = useState(sessionStorage.getItem('Similar Item'))
    const clearBtn = useRef()

    const addDataIntoCache = (cacheName, url, response) => {
        // Converting our response into Actual Response form
        const data = new Response(JSON.stringify(response));

        if ('caches' in window) {
            // Opening given cache and putting our data into it
            caches.open(cacheName).then((cache) => {
                cache.put(url, data);
                alert('Data Added into cache!')
            });
        }
    };


    //https://shipow.github.io/searchbox/

    return (
        <div>
            <TopBar />

            <div novalidate="novalidate" onsubmit={(e) => e.preventDefault()} className="searchbox sbx-custom" style={{
                marginLeft: '20px'
            }}>
                <div role="search" className="sbx-custom__wrapper">
                    <input type="search" onFocus={e => setInsertSearch(e.target.value)}
                        value={insertSearch} name="search" placeholder="Search more art" autocomplete="off"
                        required="required" className="sbx-custom__input" />
                    {/* <button type="submit" title="Submit your search query." class="sbx-custom__submit">
                    </button> */}
                    <button type="reset" title="Clear the search query." className="sbx-custom__reset" ref={clearBtn}>
                        <i role="img" aria-label="Reset" className="ri-close-line" style={{
                            fontSize: '20px', justifyContent: 'center', alignItems: 'center',
                            color: '#ED6D22'
                        }} ></i>
                    </button>
                </div>
                <div onClick={e => window.history.back()}>Cancel</div>
            </div>

            <hr />
            Discover
        </div>
    )
}

export default Search