import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {withRouter} from 'next/router'
// withRouter这个高阶组件会将当前的路由对象注入到组件中去，并将路由对象绑定到组件的props上
const MovieType = withRouter((props) => (
  <div className="movie-type">
    {
      props.movieList.map(item => (
        <div className="movie-box" key={item.id}>
          <Link href={`/movie/detail?id=${item.id}&type=${props.router.query.type}`}>
            <div>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>评分：{item.rating}</p>
            </div>
          </Link>
        </div>
      ))
    }
    <style jsx>{`
    .movie-type {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .movie-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
      padding: 10px 0;
      width: 40%;
      box-shadow: 0 0 10px #bbb;
      
    }
    .movie-box:hover {
      box-shadow: rgba(0,0,0,0.3) 0px 19px 60px;
    }
    .movie-box h4 {
      color: red;
    }
      `}</style>
  </div>
))

//请求数据
MovieType.getInitialProps = async function (context) {
  let res = await fetch(`http://localhost:3301/${context.query.type}`)
  let data = await res.json()
  // getInitialProps方法必须返回一个对象
  return {movieList: data}
}

export default MovieType