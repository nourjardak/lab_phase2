import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import GenreBooks from './GenreBooks'

const AllBooks = () => {
    const genres = useSelector(state => state.BookReducer.genres)
    const [headerStyle, setHeaderStyle] = useState("")

    const Gstyling=(genre)=>{
        switch (genre) {
            case "Historical":
              setHeaderStyle("Hheader")
              break;
            case "Romance":
              setHeaderStyle("Rheader")
              break;
            case "Thriller":
              setHeaderStyle("Theader")
              break;
            case "Mystery":
              setHeaderStyle("Mheader")
              break;
            case "Fantasy":
              setHeaderStyle("Fheader")
              break;
            case "Action":
              setHeaderStyle("Aheader")
              break;
            default:
              setHeaderStyle("")
              break;
    }
}
    return (
        <div className="w-100">
            {genres.map((genre,index)=><GenreBooks genre={genre} key={index} headerStyle={headerStyle} Gstyling={Gstyling} />)}
        </div>
    )
}

export default AllBooks
