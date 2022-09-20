import Counter from "./counter";

export default function Body({count,setcount}){
    return(
        <div style={{"backgroundColor":"pink"}}>
            <Counter count={count} setcount={setcount}/>
        </div>
    )
}