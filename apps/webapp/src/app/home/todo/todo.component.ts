import { Component, OnDestroy } from '@angular/core'
import { NgxUiService } from '@ngx-plus/ngx-ui'
import { RealTime, FireLoopRef, Todo } from '@ngx-plus/admin-sdk'
import { Subscription } from 'rxjs/Subscription'

import { TodoService } from './todo.service'

@Component({
  selector: 'admin-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnDestroy {

  private modalRef
  public todos: Todo[] = new Array<Todo>()
  public buttons
  private todoRef: FireLoopRef<Todo>
  private subscriptions: Subscription[] = new Array<Subscription>()

  constructor(
    public adminUi: NgxUiService,
    public todoService: TodoService,
    private rt: RealTime
  ) {
    this.subscriptions.push(
      this.rt.onReady().subscribe(
        (admin: any) => {
          this.todoRef = this.rt.FireLoop.ref<Todo>(Todo)
          this.subscriptions.push(this.todoRef.on('change').subscribe(
            (todos: Todo[]) => {
              this.todos = todos
            }))
        }))
    this.buttons = this.todoService.getCardButtons()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

  showDialog(type, item) {
  }

  create() {
    this.showDialog('create', new Todo())
  }

  update(todo: Todo) {
    this.showDialog('update', todo)
  }

  delete(todo: Todo) {
    const question = {
      title: 'Delete Todo',
      html: `
        <p class="lead">Are you sure you want to delete the
          <span class="font-weight-bold font-italic">${todo.text}</span> Todo?
        </p>
      `,
      confirmButtonText: 'Yes, Delete'
    }
    this.adminUi.alertError(question, () => this.handleAction({ type: 'delete', payload: todo }), () => { })
  }

  handleAction(event) {
    switch (event.type) {
      case 'create':
        this.subscriptions.push(this.todoRef.create(event.payload).subscribe(
          () => {
            this.modalRef.close()
            this.adminUi.toastSuccess('Todo Created', 'The Todo was created successfully.')
          },
          (err) => {
            this.modalRef.close()
            this.adminUi.toastError('Create Todo Failed', err.message || err.error.message)
          },
        ))
        break
      case 'update':
        this.subscriptions.push(this.todoRef.upsert(event.payload).subscribe(
          () => {
            this.modalRef.close()
            this.adminUi.toastSuccess('Todo Updated', 'The Todo was updated successfully.')
          },
          (err) => {
            this.modalRef.close()
            this.adminUi.toastError('Update Todo Failed', err.message || err.error.message)
          },
        ))
        break
      case 'delete':
        this.subscriptions.push(this.todoRef.remove(event.payload).subscribe(
          () => {
            this.adminUi.toastSuccess('Todo Deleted', 'The Todo was deleted successfully.')
          },
          (err) => {
            this.adminUi.toastError('Delete Todo Failed', err.message || err.error.message)
          },
        ))
        break
      default:
        return console.log('Unknown event action', event)
    }
  }

}
