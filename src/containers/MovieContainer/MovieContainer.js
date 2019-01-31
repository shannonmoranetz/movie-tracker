import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../containers/Header/Header';
import { LoginPrompt } from '../../components/LoginPrompt/LoginPrompt';

const MovieContainer = ({ movies, favorites, match, displayPrompt }) => {
  const favoriteIDs = favorites.map((favorite) => {
    return favorite.movie_id;
  })

  return (
    <div className="MovieContainer">
      <Header />
      {
        match.path === '/' &&
          movies.map(movie => {
            if (favoriteIDs.includes(movie.id)) {
              return <MovieCard key={movie.id} {...movie} favorite={true} />
            }
            return <MovieCard key={movie.id} {...movie} favorite={false} />
          })
      }
      {
        displayPrompt && <LoginPrompt />
      }
      {
        match.path === '/favorites' &&
        favorites.map(favorite => {
          const favoriteWithId = {...favorite, id: favorite.movie_id}
          if (favoriteIDs.includes(favorite.movie_id)) {
            return <MovieCard key={favorite.id} {...favoriteWithId} favorite={true} />
          }
          return <MovieCard key={favorite.id} {...favoriteWithId} favorite={false} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites,
  displayPrompt: state.displayPrompt
})

export default connect(mapStateToProps)(MovieContainer);