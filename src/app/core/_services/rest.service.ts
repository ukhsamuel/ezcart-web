import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestService {
  baseUrl = environment.apiUrl + environment.basePath;
  constructor(
      private http: HttpClient
    ) {
  }

  getSignUps()  {
    return this.http.get(this.baseUrl + `/voice-call/all-contacts/`);
  }



  verifySubscription(input: any, type: any) {
    return this.http.post(this.baseUrl + `/subscription/make-payment?type=${type}`, input);
  }

  uploadSenderIdScans(input: any) {
    let data= {uploads:{}}
    data.uploads = input;
    return this.http.post(this.baseUrl + `/retargeting-contacts/sender-id/uploads`, data);
  }

  uploadRetargetList(input: any) {
    return this.http.post(this.baseUrl + `/retargeting-contacts`, input);
  }
  
  createRetargetGroup(input: any) {
    return this.http.post(this.baseUrl + `/retargeting-contacts/groups`, input);
  }
}
