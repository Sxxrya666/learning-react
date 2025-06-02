// function clickHandler(){
//     console.log("I got clicked!")
// }

export default function TabularButton ({children, onSalickshan}) {
  return (
  <li>
      <button onClick={onSalickshan}>{children}</button>
  </li>
  )
}
