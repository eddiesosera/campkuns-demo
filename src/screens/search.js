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

    const activedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none',
        width: 'max-content', height: '36px', padding: '0 15px', border: '1px solid #E55C17',
        margin: '5px', color: '#E55C17', borderRadius: '8px', fontFamily: 'Hanken Grotesk', backgroundColor: '#261c18',
        fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    };

    const inActivedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none', cursor: 'pointer',
        width: 'max-content', height: '36px', padding: '0 15px', border: '0.5px solid #464646',
        margin: '5px', color: '#9D9D9D', borderRadius: '8px', fontFamily: 'Hanken Grotesk',
        fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    };

    const CategoryOptions = {
        display: 'flex', flexWrap: 'nowrap', padding: '0 15px', overflowX: 'scroll', marginTop: '15px',
        justifyContent: 'flex-start', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    }

    const [filters, setFilters] = useState([{ label: 'Products', value: 'Products' }, { label: 'Artists', value: 'Artists' }, { label: 'Galleries', value: 'Galleries' },
    { label: 'Location', value: 'Location' }, { label: 'Exhibition', value: 'Exhibition' }, { label: 'Articles', value: 'Articles' }]);
    const [selectedFilter, setSelectedFilter] = useState(filters[0].value);

    const [searchVal, setSearchVal] = useState('keyword')


    //https://shipow.github.io/searchbox/

    return (
        <div>
            {/* <TopBar /> */}

            <div style={{ display: 'flex', alignItems: 'center', padding: '20px', margin: '0 auto', width: 'fit-content' }}>
                <div novalidate="novalidate" onsubmit={(e) => e.preventDefault()} className="searchbox sbx-custom" style={{}}>
                    <div role="search" className="sbx-custom__wrapper">
                        <input type="search" onFocus={e => setInsertSearch(e.target.value)} onChange={e => setSearchVal(e.target.value)}
                            name="search" placeholder="Search more art" autocomplete="off"
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
                </div>
                <div style={{ color: '#ffe7d9', marginLeft: '20px', fontFamily: 'Hanken Grotesk', fontWeight: '500' }} onClick={e => window.history.back()}>Cancel</div>
            </div>

            <hr style={{ border: '0.5px solid #363636', margin: '0 auto', maxWidth: '470px' }} />

            <div className="searchResults" style={{ width: '100%', margin: 'auto', height: '200px' }}>
                <ul className="selectCategory-options" style={CategoryOptions}>
                    {filters.map((filter, i) => <li className="filter" key={filter.value} style={filter.value === selectedFilter ? activedCat : inActivedCat} onClick={() => setSelectedFilter(filter.value)}>{filter.label}</li>)}
                </ul>
                <div style={{ width: 'fit-content', margin: '0 auto', display: 'flex', color: '#ffe7d9', fontFamily: 'Hanken Grotesk' }}>Results for: <div style={{ marginLeft: '4px' }}>"{searchVal}"</div></div>
            </div>
            Discover
        </div>
    )
}

export default Search