// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Div1,
  Div2,
  H1,
  Form,
  Input,
  TextArea,
  Btn,
  Div3,
  Img,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const [para, setPara] = useState('')
  const onChangePara = event => {
    setPara(event.target.value)
  }
  const [list, setList] = useState([])
  const onSubmit = event => {
    event.preventDefault()
    const newItem = {
      id: uuidv4(),
      title,
      para,
    }
    setList(prevList => [...prevList, newItem])
    setTitle('')
    setPara('')
  }
  return (
    <Div1>
      <Div2>
        <H1>Notes</H1>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <TextArea
            placeholder="Take a Note..."
            value={para}
            onChange={onChangePara}
          />
          <Btn type="submit">Add</Btn>
        </Form>
        <Div3>
          {list.length === 0 ? (
            <>
              <Img
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <h1>No Notes Yet</h1>
              <p>Notes you add will appear here</p>
            </>
          ) : (
            <ul>
              {list.map(each => (
                <NoteItem key={each.id} item={each} />
              ))}
            </ul>
          )}
        </Div3>
      </Div2>
    </Div1>
  )
}

export default Notes
