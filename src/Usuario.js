import { useState } from 'react';

export default function Usuario(){
    const [name, setName] = useState("catanacomics");
    let userName = ! name ? "catanacomics" : `${name}`;
    const [profilePic, setProfilePic] = useState("/assets/catanacomics.svg");
    let userPic = !profilePic ? "/assets/catanacomics.svg" : `${profilePic}`;
    
    function changeName(){
        let auxiliar = prompt('Qual o novo nick?');
        if(auxiliar === ""){

        }
        setName(auxiliar);
    }

    function changePic(){
        let auxiliarI = prompt('Qual o novo link de imagem?');
        setProfilePic(auxiliarI);
    }
    

    return(<div class="usuario">
    <img data-test="profile-image" onClick="changePic()" src={profilePic} alt="imagem de perfil"/>
    <div class="texto">
      <span>
        <strong>{userName}</strong>
        <ion-icon onClick="changeName()" name="pencil"></ion-icon>
      </span>
    </div>
  </div>);
}