import React from "react";
import { Image, Stack } from "react-bootstrap";
import "../Movie/index.scss";

const Movie = ({ name, year, poster}) => {
    const posterPath = `https://image.tmdb.org/t/p/originsl${poster}`

    return (
        <>
            <Stack>
                <Image className = 'image-hover-effect' src='https://picsum.photos/100/150' alt = 'https://picsum.photos/100/150'></Image>
                <h4>{name}, {year}</h4>
            </Stack>
        </>
    )
}

export default Movie;