import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthenticationService, UserService } from '../core/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];
    returnUrl = '';

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    loginForm: FormGroup;
    // {
    //     email:'',
    //     password:''
    // };

    loading = false;
    submitted = false;
    error = '';
    recoverform = false;
    loginform = false;

    display: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        public layoutService: LayoutService,
        private authenticationService: AuthenticationService
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        console.log(8888);
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService
            .login(this.f['email'].value, this.f['password'].value)
            .pipe(first())
            .subscribe(
                (data) => {
                    console.log(666);

                    this.display = false;
                    // this.bc.postMessage("Logged In")
                    // this.loading = false;
                    // this.router.navigate([this.returnUrl]);
                },
                (error) => {
                    this.error = error;
                    this.loading = false;
                }
            );
    }
}
