import Link from 'next/link'
import Router from 'next/router'

const Error = () => (
    <div>
        <h2>欢迎来到错误</h2>
        <Link href="/">
            <a>HOME</a>
        </Link>
        <p onClick={() => Router.push('/')}>HOME</p>
    </div>
)

export default Error