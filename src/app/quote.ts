export class Quote {
    id:number;
    title:string;
    quote:string;
    upvote:number;
    downvote:number;
    date: Date
    constructor(id:number,title:string,quote:string,upvote:number, downvote:number,date:Date){
        this.id=id;
        this.title=title;
        this.quote=quote;
        this.upvote=upvote;
        this.downvote=downvote;
        this.date = date

    }
}
