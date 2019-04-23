import fetch from 'isomorphic-unfetch'

const FetchTest = () => (
  <div>
    <h2>Fetch</h2>
    {
      props.movieList.map(item => (
        <p key={item.id}>{item.title}</p>
      ))
    }
  </div>
)

FetchTest.getInitialProps = async function (context) {
  console.log(context);
  let res = await fetch('http://localhost:3301/in_theaters')
  let data = await res.json()
  // getInitialProps方法必须返回一个对象
  return {movieList: data}
}

export default FetchTest