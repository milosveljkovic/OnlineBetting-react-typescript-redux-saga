
export interface Football {
    id:number,
    title:string,
    odds:
    [
        {
            value:number,
            finalscore:string,
            includedodds:boolean
        },
        {
            value:number,
            finalscore:string,
            includedodds:boolean
        },
        {
            value:number,
            finalscore:string,
            includedodds:boolean
        }
    ]
}