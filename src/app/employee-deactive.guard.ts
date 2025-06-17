import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
export interface CanDeactivate{
  canDeactivate(): import("@angular/router").MaybeAsync<import("@angular/router").GuardResult>;
  checkForm:()=>boolean;
}
export const employeeDeactiveGuard: CanDeactivateFn<CanDeactivate> = (component) => {
  if (!component.checkForm() ){
  const dialog = inject(MatDialog);

  const dialogRef = dialog.open(DialogComponent, {
    width: '350px',
    disableClose: true
  });
  return dialogRef.afterClosed();
}
return true;
};
