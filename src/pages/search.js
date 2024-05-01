import * as React from 'react'
import { Link } from 'gatsby'
import "../components/OPStyle.css"
import logo from "../Images/OPLogo.png"
import { useState } from 'react';
import { useRef } from 'react';
const names = ["Luffy","Zoro","Nami","Usopp","Sanji","Chopper","Robin","Franky","Brook","Jinbe","Vivi","Thousand Sunny","Going Merry","Mihawk","Crocodile","Kuma","Doflamingo","Moria","Boa","Koby","Smoker","Tashigi","Kuzan","Borsalino","Sakazuki","Issho","Ace","Linlin","Kaido","Shanks","Teach","Edward","Buggy"];
const age = ["19","21","20","19","21","17","30","36","90","46","18","2","22","43","46","47","41","50","31","18","36","23","49","58","55","54","20","68","59","39","40","72","39"];
const height = ["174","178","170","176","177","90","188","240","277","301","169","5600","1100","198","253","689","305","692","191","167","209","170","298","302","306","270","185","880","710","199","344","666","192"];
const birth = ["05/05","11/11","07/03","04/01","03/02","12/24","02/06","03/09","04/03","04/02","02/02","03/25","01/22","03/09","09/05","02/09","10/23","09/06","09/02","05/13","03/14","10/06","09/21","11/23","08/16","08/10","01/01","02/15","05/01","03/09","08/03","04/06","08/08"];
const origin = ["East Blue","East Blue","East Blue","East Blue","North Blue","Grand Line","West Blue","South Blue","West Blue","Grand Line","Grand Line","Grand Line","East Blue","N/A","Grand Line","South Blue","Red Line","West Blue","Calm Belt","East Blue","Grand Line","East Blue","South Blue","North Blue","North Blue","Grand Line","South Blue","Grand Line","Grand Line","West Blue","Grand Line","Grand Line","Grand Line"];
const blood = ["F","XF","X","S","S(RH-)","X","S","XF","X","F","F","N/A","N/A","S","S","X","X","X","S","F","XF","S","F","XF","F","S","S","X","F","XF","F","F","F"];
var answer = "Nami";
var display = "What character was has the birthday 07/03, is 20, and was born in the East Blue, is 170cm in height, and has the blood type X?";
var points = 0;
var question = "Type the character name into the box."

const QuizPage = () => {
    const input = useRef();
    const [state, setState] = useState({
    start: "",
    final: ""
    });

    let handleChange = (event) => {
        event.preventDefault();
        var input2 = document.getElementById("guess").value;

        if (input2 === answer){
            points = points + 1;
            display = "YATTA!!! Next question. Points: "+points;
        }
        else {
            display = "Sorry, the correct answer was "+answer+", next question. Points: "+points;
        }
        var index = Math.floor(Math.random() * names.length);
        answer = names[index];
        question = "What character has the birthday "+birth[index]+", is "+age[index]+", was born in the "+origin[index]+", is "+height[index]+"cm in height, and has the blood type "+blood[index]+"?";
        
        setState({
            start: input.current.value,
            final: input.current.value
          });
      };

  return (
    <>
    <div className="table table-sort">
    <div><img className="Logo" src={logo} alt="One Piece" width="234px" height="83px"></img></div>
    
    <div><Link to="/">Database</Link></div>
      <div>
        
      <h1 className="Logo">One Piece Character Database Quiz!</h1>
      <p>{display}</p>
      <p>{question}</p>
      <form>
      
      <input type="text" name="guess" id="guess" ref={input}/>
      <p><button type="submit" className="submit-btn" value="input" onClick={handleChange}>Submit</button></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default QuizPage