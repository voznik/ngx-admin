import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { ACL, ACLApi } from '@ngx-plus/admin-sdk';
import { AdminUi } from '@ngx-plus/admin-ui';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { ControlActions, ControlActionTypes } from '../actions';

@Injectable()
export class ControlEffects {

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private controlApi: ACLApi,
    private ui: AdminUi,
  ) { }

  @Effect()
  protected createControl: Observable<any> = this.actions$
    .ofType(ControlActionTypes.CREATE_CONTROL)
    .mergeMap((action: Action) => this.controlApi.create(action.payload)
      .map((response: ACL) => new ControlActions.createControlSuccess(response))
      .catch((error: any) => of(new ControlActions.createControlFail(error))));

  @Effect({ dispatch: false })
  protected createControlSuccess = this.actions$
    .ofType(ControlActionTypes.CREATE_CONTROL_SUCCESS)
    .map(action => this.ui.toastSuccess('Create Control Success', `The control for the <b><i>${action.payload.model}</i></b> model has been created successfully.`));

  @Effect({ dispatch: false })
  protected createControlFail = this.actions$
    .ofType(ControlActionTypes.CREATE_CONTROL_FAIL)
    .map(action => this.ui.toastError('Create Control Fail', `${action.payload.message}`));

  @Effect()
  protected readControls: Observable<any> = this.actions$
    .ofType(ControlActionTypes.READ_CONTROLS)
    .mergeMap((action: Action) => this.controlApi.find(action.payload)
      .map((response: Array<ACL>) => new ControlActions.readControlsSuccess(response))
      .catch((error: any) => of(new ControlActions.readControlsFail(error))));

  @Effect()
  protected updateControl: Observable<any> = this.actions$
    .ofType(ControlActionTypes.UPDATE_CONTROL)
    .mergeMap((action: Action) => this.controlApi.patchAttributes(action.payload.id, action.payload)
      .map((response: ACL) => new ControlActions.updateControlSuccess(action.payload))
      .catch((error: any) => of(new ControlActions.updateControlFail(error))));

  @Effect({ dispatch: false })
  protected updateControlSuccess = this.actions$
    .ofType(ControlActionTypes.UPDATE_CONTROL_SUCCESS)
    .map(action => this.ui.toastSuccess('Update Control Success', `The control for the <b><i>${action.payload.model}</i></b> model has been updated successfully.`));

  @Effect({ dispatch: false })
  protected updateControlFail = this.actions$
    .ofType(ControlActionTypes.UPDATE_CONTROL_FAIL)
    .map(action => this.ui.toastError('Update Control Fail', `${action.payload.message}`));

  @Effect()
  protected deleteControl: Observable<any> = this.actions$
    .ofType(ControlActionTypes.DELETE_CONTROL)
    .mergeMap((action: Action) => this.controlApi.deleteById(action.payload.id)
      .map((response: ACL) => new ControlActions.deleteControlSuccess(action.payload))
      .catch((error: any) => of(new ControlActions.deleteControlFail(error))));

  @Effect({ dispatch: false })
  protected deleteControlSuccess = this.actions$
    .ofType(ControlActionTypes.DELETE_CONTROL_SUCCESS)
    .map(action => this.ui.toastSuccess('Delete Control Success', `The control for the <b><i>${action.payload.model}</i></b> model has been deleted successfully.`));

  @Effect({ dispatch: false })
  protected deleteControlFail = this.actions$
    .ofType(ControlActionTypes.DELETE_CONTROL_FAIL)
    .map(action => this.ui.toastError('Delete Control Fail', `${action.payload.message}`));

}
