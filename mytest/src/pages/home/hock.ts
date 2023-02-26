export interface itemState{
    name:string
    age:number
}

export interface arrState{
    list:itemState[]
}

const homeData =()=>{
    const list:itemState[]=[
        {name:'hedy',age:18},
        {name:'Joe',age:19},
        {name:'John',age:20}
    ]
    return {list}
}
export default homeData