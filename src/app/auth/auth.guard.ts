import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated) {
    if (router) {
      alert('\nERROR: Unauthorised path.\n\n You are NOT logged in.\n\nPlease log in with correct details.');
      router.navigate(['login']);
    }
  }

  return authService.isAuthenticated;
}

