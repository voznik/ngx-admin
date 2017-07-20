import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavItem } from '@ngx-plus/admin-ui'

import { RolesService } from '../roles.service'

@Component({
  selector: 'admin-role-detail',
  template: `
    <admin-card *ngIf="item"
                [cardTitle]="item?.fullName"
                [subTitle]="item?.email"
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
      { icon: 'role', name: 'Profile', link: 'profile' },
      { icon: 'key', name: 'Password', link: 'password' },
      { icon: 'unlock', name: 'Access Tokens', link: 'access-tokens' },
      { icon: 'tags', name: 'Roles', link: 'roles' },
    ]
  }

  public item: any

  constructor(
    public service: RolesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.systemRole[0]
    this.service.setSelected(this.item)
  }
}
