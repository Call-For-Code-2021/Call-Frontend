import React, {useState, useEffect} from "react";
import axios from "axios";

const List =(props) => {

    const [shops, setList] = useState();
    useEffect(async () =>{
        try {
            let json = await axios({
                url: "http://charong.herokuapp.com/buy/list?from=0&limit=5",
                method: "get",
                data: {
                    from: 0,
                    limit: 5
                }
            });
            let data = [];
            for (let shop in json.data) {
                data.push(json.data[shop])
            }
            console.log(data)
            setList(data)
        }catch(e){
            console.log(e);
        }
    }, []);


    return(
        <div>
            <ul>
                {shops && shops.map( id =>
                    <li key={id.shop}><a href="#">{id.shop}</a></li>,
                )}
            </ul>,
        </div>
    );


}
export default List ;