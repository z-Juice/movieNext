import MovieHeader from '../components/movieHeader'
const MovieLayout = (props) => (
  <div className="movie-layout">
    <MovieHeader></MovieHeader>
    {props.children}
    <style jsx>{`
      .movie-layout {
        margin-top: 60px;
      }
      `}</style>
  </div>
)
export default MovieLayout