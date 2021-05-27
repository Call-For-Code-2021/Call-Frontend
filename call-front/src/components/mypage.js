import React from 'react';
import "./mypage.css";
import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";
import EditImg from "./img/edit.png";

function mypage(){
    return (
        <div className="query_section">
            
            <div class="div_my">
        
                <header>
                    <h3>my페이지</h3>            
                </header>

                <section>
                    <div class="profile">
                        <img src={UserImg} alt="User" id="user"/>
                        <span class="UserInfo"><span id="UserName">이한나</span>&nbsp;님</span>
                        <br></br>
                        <a href="#" class="a">총 스크랩 횟수 : 5번</a>
                        <a href="#"><img src={EditImg} alt="Edit" id="edit"/></a>
                    </div> 
                    
                    <br></br>
                    
                    <p class="st">이한나 님의 주문으로 절약된 나무</p>
                    
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    
                    <p class="st">새 소식</p>
                    
                    <div class="news">
                        <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.             
                    </div>
                    <div class="read_news">
                          <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.             
                    </div>
                    <div class="read_news">
                          <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.             
                    </div>
                    
                    <br></br>    

                </section>

            </div>
        </div>
    );

}

export default mypage;