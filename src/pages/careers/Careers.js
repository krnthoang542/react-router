import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {
        careers.map(career =>(
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Base in{career.location}</p>
          </Link>
        ))
      }
    </div>
  )
}

//load data
export const careersLoader = async()=>{
    const res = await fetch('http://localhost:4000/careers');

    if(!res.ok){
      throw Error('Could not find the careers')
    }

    return res.json();
}
