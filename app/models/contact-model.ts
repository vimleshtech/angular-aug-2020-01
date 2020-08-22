export class ContactRequest{

        personalData: PersonalData
        requestType:string = '' 
        comments:string ='' 
}

export class PersonalData{

        name:string ='';
        email:string='';
        phone:string='';
        country:string ='';
        city:string='';
        
}