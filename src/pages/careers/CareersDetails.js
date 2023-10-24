import { useLoaderData } from "react-router-dom"


function CareersDetails() {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary {career.salary}</p>
      <p>Location: {career.location} </p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sit eius! A, nesciunt illum in odit veritatis blanditiis magni optio ipsum ipsam asperiores, vel eveniet atque reprehenderit sequi quaerat explicabo.</p>
      </div>
    </div>
  )
}

export default CareersDetails;

export const careerDetailsLoader = async({params})=>{
  const res = await fetch("http://localhost:4000/careers/"+params.id);
  if(!res.ok){
    throw Error('Could not find that career')
  }
  return res.json();
}