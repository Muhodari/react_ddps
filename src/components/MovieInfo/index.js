import React,{useContext} from 'react'
import propTypes from 'prop-types'
// components
import Thumb from '../Thumb'
import Rate from '../Rate'
// api
import API from '../../API'
// config 
import { IMAGE_BASE_URL , POSTER_SIZE } from '../../config'
// Image 
import NoImage from '../../images/no_image.jpg'
// styles
import { Wrapper, Content ,Text  } from './MovieInfo.styles'
// context
import { Context } from '../../context' 


const MovieInfo =({movie})=>{

const [user] = useContext(Context);

const handleRating = async value =>{
    const rate =await API.rateMovie(user.sessionId,movie.id,value);
    console.log(rate);
}



return(
<Wrapper backdrop = {movie.backdrop_path}>
    <Content>
    <Thumb
    image={
        movie.poster_path
        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
        :NoImage
    }
    clickable= {false}
    alt ='movie-thumb'
    />
    <Text>
    <h1>{movie.title}</h1>
    <h3>PLOT</h3>
    <h3>{movie.overview}</h3>

  <div className='rating-directors'>
      <div>
          <h3>RATING</h3>
          <div className='score'>{movie.vote_average}</div>
      </div>

      <div className='director'>
          <h3>DIRECTOR {movie.directors && movie.directors.length > 1 ? 'S': ''}</h3>
          
          {movie.directors.map(director =>(
            <p key={director.credit_id}>{director.name} </p>
          ))}

      </div>
  </div>

{user &&   (<div>
      <p>Rate Movie</p>
      <Rate callback={handleRating} />
  </div>
)}


    </Text>

    </Content>

</Wrapper>
);
}

MovieInfo.propTypes = {
    movie: propTypes.object
}

export default MovieInfo


