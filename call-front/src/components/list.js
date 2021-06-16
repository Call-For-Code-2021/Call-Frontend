import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const List =(props) => {

    const [shops, setList] = useState();
    useEffect(async () =>{
        try {
            let json = await axios({
                url: "//charong.herokuapp.com/buy/list?from=0&limit=5",
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
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            <Link to="/shops">
                <button>가게 등록aaaaaaa</button>
            </Link>
            <ul>
                {shops && shops.map( id =>
                    <li key={id.shop}><a href="#">{id.shop}</a></li>,
                )}
            </ul>
        </div>
    );


}
export default List ;