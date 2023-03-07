import { useEffect, useState } from "react";

const ListItems = ({getData}) => {
    const [items, setItems] = useState([]); 
    useEffect(()=>{
        setItems(getData());
    }, [getData])
    return (
        <div>
            {items.map((data)=>{
                return <p>{data}</p>
            })}
        </div>
    );
}
export default ListItems; 