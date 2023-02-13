import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector(".root"));

function changeName(){
    let new_name = prompt('Digite o novo nome');
    if(new_name = ''){
        new_name = prompt('Digite o novo nome, não pode ficar vazio');
    }
}