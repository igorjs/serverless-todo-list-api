import uuidv4 from 'uuid/v4'

export class Todo {
  constructor (message, due) {
    this.id = uuidv4()
    this.created = new Date()
    this.message = message
    this.due = due || new Date()
  }
}
