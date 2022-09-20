import Counter from "./counter";

export default function Header({count,setcount}){
    return(
        <div style={{"backgroundColor":"yellow"}}>
         <Counter count={count} setcount={setcount}/>
        </div>
    )
}