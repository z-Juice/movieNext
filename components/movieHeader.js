import Link from 'next/link'
import { withRouter } from 'next/router'

const MovieHeader = withRouter((props) => (
  <div className="movie-header">
    <ul>
      <li>
        {/* 可以通过Link组件的as属性给路径取别名 */}
        <Link as={`/movie/type/${'in_theaters'}`} href="/movie/type?type=in_theaters"><a className={props.router.query.type == 'in_theaters' ? 'active' : null}>正在热映</a></Link>
      </li>
      <li>
        {/* 可以通过Link组件的as属性给路径取别名 */}
        <Link as="/movie/type/coming_soon" href="/movie/type?type=coming_soon"><a className={props.router.query.type == 'coming_soon' ? 'active' : null}>即将上映</a></Link>
      </li>
      <li>
        <Link href="/movie/type?type=top250"><a className={props.router.query.type == 'top250' ? 'active' : null}>top250</a></Link>
      </li>
      {/* 对象跳转写法 */}
      {/* <li>
        <Link href={{pathname: '/movie/type', query: {type: 'top250'}}}><a className={props.router.query.type == 'top250' ? 'active' : null}>top250</a></Link>
      </li> */}
    </ul>
    <style jsx>{`
      .movie-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px 0;
        background-color: #1e2736;
        margin: 0;
      }
      li {
        list-style: none;
        line-height: 30px;
        height: 30px;
      }
      li a {
        color: white;
        text-decoration: none;
      }
      li a:hover {
        color: red;
      }
      li a.active {
        color: red;
      }
      `}</style>
  </div>
))
export default MovieHeader