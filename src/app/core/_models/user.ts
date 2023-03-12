export class User {
    id: number = 0;
    username: string = "";
    email: string = "";
    access_level: number = 0;
    phone_number:string = "";
    password: string = "";
    first_name: string = "";
    last_name: string = "";
    membership_type:string = "";
    gender:string = "";
    company_rep: string = "";
}

export interface Profile {
    company_name: any;
    location: any;
    reg_number: any;
    company_email: any;
    id: number;
    profile_picture_url: string;
    gs1_api_key: any;
}