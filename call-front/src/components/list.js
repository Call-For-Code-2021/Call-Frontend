import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './list.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <p id="t_a-c">
                    <button className="btn btn-outline-success" id="btn_o">가게 등록</button>
                </p>
            </Link>
            <p className="table_form" id="t_a-c">
                <table>
                    {shops && shops.map(id =>
                        <tr>
                            <td>&nbsp;&nbsp;매장명 :&nbsp;</td>
                            <td key={id.shop}>
                                {id.shop}
                            </td>
                            <td>&nbsp;|&nbsp;사업주명 :&nbsp;</td>
                            <td key={id.user_id}>
                                {id.user_id}&nbsp;&nbsp;
                            </td>
                        </tr>
                    )}
                </table>
            </p>
        </div>
    );


}
export default List ;