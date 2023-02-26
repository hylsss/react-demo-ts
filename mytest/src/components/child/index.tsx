
export interface itemState{
    name:string
    age:number
}

export interface arrState{
    list:itemState[]
}

const Child =(props:arrState)=>{
return <ul>
  {props.list.map((item,index)=>{
      return <li key={index}>{item.name} -- {item.age}</li>
  })}
</ul>
}

export default Child