import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public headerImg = ''
  public preHeaderImg = 'ngx'
  public postHeaderImg = 'plus'

  constructor() { }

  public setHeaderImg(item) {
    this.headerImg = item
  }

  public setPreHeaderImg(item) {
    this.preHeaderImg = item
  }

  public setPostHeaderImg(item) {
    this.postHeaderImg = item
  }

}
