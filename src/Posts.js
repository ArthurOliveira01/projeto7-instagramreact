import {useState} from "react";

export default function Posts(){

    function likePost(){
        if(color == '')
    }
    return (
        <div class="posts">
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src="assets/meowed.svg" alt="meowed"/>
          meowed
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" src="assets/gato-telefone.svg" alt="gato-telefone"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/respondeai.svg" alt="respondeai"/>
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src="assets/barked.svg" alt="barked"/>
          barked
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" src="assets/dog.svg" alt="dog" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div onclick="like()">
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/adorable_animals.svg" alt="adorable_animals"/>
          <div class="texto">
            Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras 99.159 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src="assets/barked.svg" alt="barked"/>
          barked
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onclick={() =>

        } data-test="post-image" src="assets/dog.svg" alt="dog" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/adorable_animals.svg" alt="adorable_animals"/>
          <div class="texto">
            Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras 99.159 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}