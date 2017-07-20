import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { AdminUi, ModalComponent } from '@ngx-plus/admin-ui'
import { Account, AccountApi } from '@ngx-plus/admin-sdk'

import { RolesService } from '../roles.service'

@Component({
  selector: 'admin-role-list',
  templateUrl: './role-list.component.html',
})
export class RoleListComponent implements OnInit, OnDestroy {

  public items: Account[]
  private modalRef: any
  private subscriptions: Subscription[] = new Array<Subscription>()

  constructor(
    public service: RolesService,
    public ui: AdminUi,
    private api: AccountApi,
    private modal: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.service.roles$
        .subscribe(
        (items) => this.items = items.ids.map(id => items.entities[id]),
        (error: any) => this.ui.toastError('Failed to Retrieve Roles', error.message)))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe())
  }

  showDialog(type, item, options?): void {
    this.modalRef = this.modal.open(ModalComponent, { size: 'sm' })
    this.modalRef.componentInstance.item = item
    this.modalRef.componentInstance.formConfig = this.service.getFormConfig()
    switch (type) {
      case 'create':
        this.modalRef.componentInstance.title = 'Create Role'
        break
      default:
        console.log('Unknown Type', type)
        break
    }
    this.subscriptions.push(
      this.modalRef.componentInstance.action
        .subscribe(event => this.handleAction(event)))
  }

  create() {
    this.showDialog('create', new Account())
  }

  handleAction(event) {
    switch (event.type) {
      case 'close':
      case 'cancel':
        return this.modalRef.close()
      case 'create':
        event.payload.principals = []
        this.modalRef.close()
        return this.service.create(event.payload)
      case 'update':
        return this.router.navigate([event.payload.id], { relativeTo: this.route.parent })
      case 'viewUsers':
        return this.router.navigate([event.payload.id, 'users'], { relativeTo: this.route.parent })
      case 'delete':
        const successCb = () => this.service.delete(event.payload)
        const question = { title: 'Are you sure?', text: 'The action cannot be undone.' }
        return this.ui.alertError(question, successCb, () => ({}))
      default:
        return console.log('Unknown Event Action', event)
    }
  }

}
