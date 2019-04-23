import Nav from '../components/nav.jsx'

const Layouts = (props) => (
    <div>
        <Nav></Nav>
        {
          props.children
        }
    </div>
)

export default Layouts