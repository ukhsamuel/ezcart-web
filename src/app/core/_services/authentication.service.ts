import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User} from '../_models';
import { environment } from '../../../environments/environment';
import { ToastService } from '../_services/toast.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    baseUrl = environment.apiUrl + environment.basePath;
    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    

    constructor(
        private http: HttpClient,
        private toastService: ToastService
        ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ezCartCurrentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }


    login(email: string, password: string) {
        console.log(444)
        return this.http.post<any>(this.baseUrl + `/auth/login`, { email, password })
            .pipe(map(u => {
                // console.log(u)
                console.log(u.token.plainTextToken)

                // login successful if there's a jwt token in the response
                if (u.user && u.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    u.token = u.token.plainTextToken;
                    localStorage.setItem('ezCartCurrentUser', JSON.stringify(u.user));
                    localStorage.setItem('ezCartToken', JSON.stringify(u.token));

                    this.currentUserSubject.next(u.user);
                }
                return u.user;
            }));
    }

    register(user: User) {
        return this.http.post(this.baseUrl + `/auth/signup`, user)
        .pipe(map(u => {
            // console.log('user ', u['data'])
            // // login successful if there's a jwt token in the response
            // if (u['data'].user && u['data'].token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     console.log(u['data)
            //     localStorage.setItem('chekkitCurrentUser', JSON.stringify(u['data']));

            //     this.currentUserSubject.next(u['data']);;
            // }
            return u;
        }));
    }

    /**
      * @param none
      * @returns boolean TRUE OR FALSE
      */
     tokenExist() {
        return !!JSON.parse(localStorage.getItem('ezCartToken')!);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        this.currentUserSubject.next(null);
    }
}
