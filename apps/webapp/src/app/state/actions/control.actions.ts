import { Action } from '@ngrx/store';
import { type } from '../util';
import { ACL, LoopBackFilter } from '@ngx-plus/admin-sdk';

export const ControlActionTypes = {

  CREATE_CONTROL: type('[Admin] createControl'),
  CREATE_CONTROL_SUCCESS: type('[Admin] createControl success'),
  CREATE_CONTROL_FAIL: type('[Admin] createControl fail'),

  READ_CONTROLS: type('[Admin] readControls'),
  READ_CONTROLS_SUCCESS: type('[Admin] readControls success'),
  READ_CONTROLS_FAIL: type('[Admin] readControls fail'),

  UPDATE_CONTROL: type('[Admin] updateControl'),
  UPDATE_CONTROL_SUCCESS: type('[Admin] updateControl success'),
  UPDATE_CONTROL_FAIL: type('[Admin] updateControl fail'),

  DELETE_CONTROL: type('[Admin] deleteControl'),
  DELETE_CONTROL_SUCCESS: type('[Admin] deleteControl success'),
  DELETE_CONTROL_FAIL: type('[Admin] deleteControl fail'),

  SELECT_CONTROL: type('[Admin] selectControl'),
  SELECT_CONTROL_SUCCESS: type('[Admin] selectControl success'),
  SELECT_CONTROL_FAIL: type('[Admin] selectControl fail'),

};

export const ControlActions = {

  createControl: class implements Action {
    public readonly type = ControlActionTypes.CREATE_CONTROL;
    constructor(public payload: ACL) { }
  },

  createControlSuccess: class implements Action {
    public readonly type = ControlActionTypes.CREATE_CONTROL_SUCCESS;
    constructor(public payload: ACL) { }
  },

  createControlFail: class implements Action {
    public readonly type = ControlActionTypes.CREATE_CONTROL_FAIL;
    constructor(public payload: any) { }
  },

  readControls: class implements Action {
    public readonly type = ControlActionTypes.READ_CONTROLS;
    constructor(public payload: LoopBackFilter = {}) { }
  },

  readControlsSuccess: class implements Action {
    public readonly type = ControlActionTypes.READ_CONTROLS_SUCCESS;
    constructor(public payload: ACL[]) { }
  },

  readControlsFail: class implements Action {
    public readonly type = ControlActionTypes.READ_CONTROLS_FAIL;
    constructor(public payload: any) { }
  },

  updateControl: class implements Action {
    public readonly type = ControlActionTypes.UPDATE_CONTROL;
    constructor(public payload: ACL) { }
  },

  updateControlSuccess: class implements Action {
    public readonly type = ControlActionTypes.UPDATE_CONTROL_SUCCESS;
    constructor(public payload: ACL) { }
  },

  updateControlFail: class implements Action {
    public readonly type = ControlActionTypes.UPDATE_CONTROL_FAIL;
    constructor(public payload: any) { }
  },

  deleteControl: class implements Action {
    public readonly type = ControlActionTypes.DELETE_CONTROL;
    constructor(public payload: any) { }
  },

  deleteControlSuccess: class implements Action {
    public readonly type = ControlActionTypes.DELETE_CONTROL_SUCCESS;
    constructor(public payload: any) { }
  },

  deleteControlFail: class implements Action {
    public readonly type = ControlActionTypes.DELETE_CONTROL_FAIL;
    constructor(public payload: any) { }
  },

  selectControl: class implements Action {
    public readonly type = ControlActionTypes.SELECT_CONTROL;
    constructor(public payload: ACL) { }
  },

  selectControlSuccess: class implements Action {
    public readonly type = ControlActionTypes.SELECT_CONTROL_SUCCESS;
    constructor(public payload: any) { }
  },

  selectControlFail: class implements Action {
    public readonly type = ControlActionTypes.SELECT_CONTROL_FAIL;
    constructor(public payload: any) { }
  },

};
