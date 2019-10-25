import Todo from 'model/todo'

const create = async ({ message, due }) => {
  return new Todo(message, due)
}

export default { create }
