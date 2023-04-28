import React, { useEffect, useState } from "react";

function Search({ similarSearch }) {

    const [searchVal, setSearchVal] = useState('')

    useEffect(() => {
        setSearchVal(similarSearch)
    }, [searchVal])

    return (
        <div>
            <input placeholder='Search more art' value={searchVal} type="search" />
            <hr />
            Discover
        </div>
    )
}

export default Search