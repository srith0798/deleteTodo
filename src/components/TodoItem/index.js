// Write your code here
import './index.css'

const TodoItem = props => {
  const {task, eventFunc} = props
  const {title, id} = task
  const onDeleteBtn = () => {
    eventFunc(id)
  }
  return (
    <div className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteBtn}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
