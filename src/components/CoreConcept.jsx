export default function CoreConcept({title, description, image}){
  return <div>
    <h1>{title}</h1> 
    <p>{description}</p>
    <img src={image} alt={title} />
  </div>
}