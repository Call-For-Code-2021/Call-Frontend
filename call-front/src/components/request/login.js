
import React, { useState, useEffect } from "react";
import axios from "axios";

const list = () => {
    // let shop = await axios({
    //     url: "http://charong.herokuapp.com/buy/list?from=0&limit=5",
    //     method: "get",
    //     data: {
    //         from: 0,
    //         limit: 5
    //     }
    // });
    // let htmlCode = `<ul>`;
    // let arr = []
    // for(let s in shop.data){
    //     let data = shop.data[s];
    //     arr.push(s);
        // <p style="display: none">${data['_id']}</p>
        // htmlCode += `
        // <li>${data['shop']}</li>
        // <li>${data['shop_num']}</li>
        // <li>${data['user_id']}</li>
        // <li>${data['address']}</li>
        // <li>${data['dish_type']}</li>
        // <br/>

// <!--    // }-->
// <!--    htmlCode += '</ul>';-->
// <!--    console.log(shop.data);-->
// <!--    console.log(arr)-->
// <!--    console.log(shop.data[arr[0]].shop);-->
    return(
        <div>
            <input type="text"/>
        </div>
    );
    // return(
    //     htmlCode
    // )

}
export default list