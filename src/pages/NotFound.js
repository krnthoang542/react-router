import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h2>Page Not found</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos suscipit id laboriosam iusto possimus quia alias. Temporibus, commodi sunt sed exercitationem libero fugit! Ipsum modi quidem consequatur, impedit suscipit quaerat.</p>
        <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}
