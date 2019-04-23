import Layouts from '../../../layouts/layouts.jsx'
import Link from 'next/link'

let teacherList = [
    {name: 'jack1', id: 1},
    {name: 'jack2', id: 2},
    {name: 'jack3', id: 3}
]

const Teacher = () => (
    <div>
        {/* <Layouts>
            <h2>Teacher</h2>
        </Layouts> */}
        <h2>Teacher</h2>
        <ul>
            {
                teacherList.map(item => (
                    <li key={item.id}>
                        {/* 可以通过Link组件的as属性给路径取别名 */}
                        <Link as={`/next-route/teacher/${item.id}`} href={`/next-route/teacher/detail?id=${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Teacher