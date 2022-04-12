export class Quote {
    id:number;
    title:string;
    quote:string;
    upvote:number;
    downvote:number
    constructor(id:number,title:string,quote:string,upvote:number, downvote:number){
        this.id=id;
        this.title=title;
        this.quote=quote;
        this.upvote=upvote;
        this.downvote=downvote

    }
}
