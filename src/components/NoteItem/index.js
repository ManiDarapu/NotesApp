// Write your code here
const NoteItem = props => {
  const {item} = props
  const {title, para} = item
  return (
    <li>
      <h1>{title}</h1>
      <p>{para}</p>
    </li>
  )
}

export default NoteItem
