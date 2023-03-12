import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastService } from '../component/toast/toast.service';
import { AuthenticationService } from '../_services';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class UtilityProvider {
    plan: any;
    loader = this.loadingBar.useRef();

  constructor(
      public http: HttpClient,
      private loadingBar: LoadingBarService,
      ) {
      

    }
    

    startBarLoader(){
        this.loader.start()
      }
    
      stopBarLoader(){
        this.loader.stop()
      }
    
    returnCurrencySymbol(c:string){
        let sym = '';

        if(c == 'NGN'){
            sym = '₦';
        }else if(c == 'USD'){
            sym = '$';
        }

        return sym;
    }
    
    numberWithCommas(x:string) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
