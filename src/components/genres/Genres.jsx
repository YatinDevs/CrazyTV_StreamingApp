import React from 'react';
import {useSelector} from "react-redux";

import "./style.scss";
const Genres = ({data}) => {

    const {genres} = useSelector((state)=> state.home);
  return (
    <div className="genres">
        {data?.map((genre)=>{

            if(!genres[genre]?.name) return;
            // console.log(genre);

            return (
                <div className="genre" key={genre}>
                    {genres[genre]?.name}
                </div>
            )
        })}
    </div>
  );
};

export default Genres;