import { StyledTodoInput } from "./styled/TodoInput.styled";

export default function TodoInput({ newTodoInput, handleAddTodo }) {

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <StyledTodoInput>
      <input className="todo-input" ref={newTodoInput} type="text" placeholder="Create a new todo..." onKeyPress={handleKeyPress} />
    </StyledTodoInput>
  )
}
