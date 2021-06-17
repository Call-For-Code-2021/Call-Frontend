import React, {useState} from "react";
import axios from "axios";

function Admin() {

    const [inputs, setinputs] = useState({
        newstitle: '',
        newsdate: '',
        newsauthor: '',
        newsdescript: '',
    });

    const {newstitle, newsdate, newsauthor, newsdescript} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setinputs({
            ...inputs,
            [name]: value
        });
    };

    const handleclickpostnews = () => {
        // console.log(newstitle);
        // console.log(newsdate);
        // console.log(newsauthor);
        // console.log(newsdescript);
        axios({
            method: "post",
            url: "https://charong.herokuapp.com/newspost",
            data: {
                title: newstitle,
                content: newsdescript,
                writer: newsauthor,
                date: newsdate,
            },
        })
            .then((response) => {
                // console.log(response.status);
                // console.log(response.data);
                alert(newstitle + "뉴스의 등록이 완료되었습니다.");
            })
    }

    return(
        <div>
            <h1>admin</h1>
            <hr/>
            <h3>News Post Update Area</h3>
            <p>title</p>
            <input
                name="newstitle"
                value={newstitle}
                onChange={onChange}
                type="text"
            />
            <p>date</p>
            <input
                name="newsdate"
                value={newsdate}
                onChange={onChange}
                type="text"
            />
            <p>author</p>
            <input
                name="newsauthor"
                value={newsauthor}
                onChange={onChange}
                type="text"
            />
            <p>content</p>
            <input
                name="newsdescript"
                value={newsdescript}
                onChange={onChange}
                type="text"
            />
            <input
                type="submit"
                value="NewsPostSubmit"
                onClick={handleclickpostnews}
            />
        </div>
    );
}

export default Admin;