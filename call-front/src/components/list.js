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
                url: "//charong.herokuapp.com/buy/list?from=0&limit=50",
                method: "get",
                data: {
                    from: 0,
                    limit: 50
                }
            });
            let data = [];
            for (let shop in json.data) {
                data.push(json.data[shop])
            }
            // console.log(data)
            setList(data)
        }catch(e){
            // console.log(e);
        }
    }, []);


    return(
        <div>
            
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            
            <p className="table_form" id="t_a-c">
                <h2>Shop List</h2>
                <table>
                    {shops && shops.map(id =>
                        <div>
                            <hr></hr>
                            <td id="li_name">Shop Name&nbsp;:&nbsp;</td>
                            <td key={id.shop}>
                                {id.shop}
                            </td>
                            <td id="li_name">&nbsp;|&nbsp;Name&nbsp;:&nbsp;</td>
                            <td key={id.user_id}>
                                {id.user_id}&nbsp;&nbsp;
                            </td>
                            <hr></hr>
                        </div>
                    )}
                </table>
            </p>
            <Link to="/shops">
                <p id="t_a-c">
                    <button className="btn btn-outline-success" id="btn_o">Store Registration</button>
                </p>
            </Link>
        </div>
    );


}
export default List ;