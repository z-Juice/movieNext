import MovieHeader from '../components/movieHeader'
const MovieLayout = (props) => (
  <div className="movie-layout">
    <MovieHeader></MovieHeader>
    {
      props.children
    }
    {/* 如果添加了 jsx属性，只作用于当前组件，不包括子组件 */}
    {/* global作用于当前组件，包括子组件 */}
    <style jsx global>{`
      .movie-layout {
        margin-top: 60px;
      }
      .movie-layout a {
        // color: red !important;
      }
      `}</style>
  </div>
)
export default MovieLayout