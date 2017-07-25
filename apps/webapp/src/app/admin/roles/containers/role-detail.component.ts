import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavItem } from '@ngx-plus/admin-ui'

import { RolesService } from '../roles.service'

@Component({
  selector: 'admin-role-detail',
  template: `
    <admin-card *ngIf="item"
                [cardTitle]="item?.name"
                [subTitle]="item?.description"
                icon="tag"
                [nav]="tabs">
      <router-outlet></router-outlet>
    </admin-card>
  `,
})
export class RoleDetailComponent implements OnInit {

  public tabs: NavItem = {
    title: '',
    items: [
      { icon: 'pencil', name: 'Edit', link: 'edit' },
      { icon: 'users', name: 'Users', link: 'users' },
    ]
  }

  public item: any

  constructor(
    public service: RolesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.role[0]
    this.service.setSelected(this.item)
  }
}
