import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  googleLogin() {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
    const params = new HttpParams()
      .set('client_id', environment.GOOGLE_CLIENT_ID)
      .set('redirect_uri', 'http://localhost:4200/auth/callback')
      .set('response_type', 'code')
      .set('scope', 'email profile')
    window.location.href = `${googleAuthUrl}?${params.toString()}`;
  }

  exchangeCodeForToken(code: string) {
    this.http
      .post(`${environment.apiUrl}/auth/google`, { code })
      .subscribe((res: any) => {
        localStorage.setItem('jwt', res.access_token);
        this.router.navigate(['/dashboard']); // Redirect after login
      });
  }

  logout() {
    // ✅ Remove stored JWT token
    localStorage.removeItem('jwt'); // or sessionStorage.removeItem('token');

    // ✅ Optional: Revoke Google session (works only if user is logged in via Google)
    window.open('https://accounts.google.com/logout', '_blank');

    // ✅ Redirect to login page
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
