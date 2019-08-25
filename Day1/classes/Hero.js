export class Hero{
    constructor(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
}