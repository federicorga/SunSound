const contentCards = document.getElementById("contentCards");


function renderCardModel(page) {

    //Modelo de la tarjeta a renderizar.

    const card = document.createElement("div");

    card.classList.add(`card`)

    card.innerHTML = `
   
    <div class="vinyl-container">
    <div class="vinyl" id="vinyl${page.id}">
      <div class="vinyl-label"><img src="imagenes/NFTs/${page.nftimg}" alt="Descripción de la imagen""></div>
    </div>
  </div>
    <audio class="btnAudio" id="audioPlayer${page.id}" controls>
            <source src="audio/${page.audioCard}" type="audio/mp3">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <div>
    `
    contentCards.appendChild(card);

    var audioPlayer = document.getElementById(`audioPlayer${page.id}`);
    var vinyl = document.getElementById(`vinyl${page.id}`);
    
    audioPlayer.addEventListener('play', function() {
       
        vinyl.classList.toggle('rotate');
        
       
    });

    audioPlayer.addEventListener('pause', function() {
    
         vinyl.classList.toggle('rotate');
         
        
     });
    

        function playAudio() {
            audioPlayer.play();
          
            

        }

        function pauseAudio() {
            audioPlayer.pause();
        
      
        }

        function stopAudio() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            
        }








  

}


