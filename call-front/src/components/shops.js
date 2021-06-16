import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const shops = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputs, setInputs] = useState({
        shop_name: "",
        address: "",
        user_id: "",
        shop_num: "",
        dish_type: ""
    })
    const func = async function () {
        console.log(inputs)
        var shop = await axios({
            url: "//charong.herokuapp.com/buy/shop",
            method: "post",
            data: {
                shop_name: inputs.shop_name,
                address: inputs.address,
                shop_num: inputs.shop_num,
                user_id: inputs.user_id,
                dish_type: inputs.dish_type
            }
        })

        console.log(shop)
    }

    const onChange = (e) => {
        //input에 name을 가진 요소의 value에 이벤트를 걸었다
        const {name, value} = e.target

        // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
        const nextInputs = {
            //스프레드 문법으로 기존의 객체를 복사한다.
            ...inputs,
            [name]: value,
        }
        setInputs(nextInputs)
    }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (
            <div>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                <div>
                <Link to="/list">
                    <button>back</button>
                </Link>
                </div>
                <input name='shop_name' id="shop_name" onChange={onChange} placeholder="가게 이름 / shop name"/>
                {/* 가게이름 */}
                <input name="address" id="address" onChange={onChange} placeholder="가게 주소 / shop address"/>
                {/* 가게주소 */}
                <input name="user_id" id="user_id" onChange={onChange} placeholder="사업자명 / user_id"/>
                {/* 사업자명 */}
                <input name="shop_num" id="shop_num" onChange={onChange} placeholder="전화번호 / shop_num"/>
                {/* 전화번호 */}
                <input name="dish_type" id="dish_type" onChange={onChange} placeholder="그릇타입 / dish_type"/>
                {/* 그릇타입 */}
                <button onClick={func}>register</button>
            </div>
        )//알아서 input값 받아다가 function/auth에 있는 함수들 요청 할 것

}
export default shops