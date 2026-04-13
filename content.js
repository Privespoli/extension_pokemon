document.addEventListener('click', (e) => {
  const posX = e.pageX;
  const posY = e.pageY;

  chrome.runtime.sendMessage({ action: "getRandomPokemon" }, (response) => {
    if (response && response.imgUrl) {
      const img = new Image(); // Cria um objeto de imagem primeiro
      img.src = response.imgUrl;
      img.classList.add('poke-click');
      
      // Centraliza melhor (ajustado para os 100px do novo CSS)
      img.style.left = `${posX - 50}px`;
      img.style.top = `${posY - 50}px`;
      
      // Só coloca na tela quando a imagem terminar de baixar
      img.onload = () => {
        document.body.appendChild(img);
        setTimeout(() => {
          img.style.opacity = '0';
          setTimeout(() => img.remove(), 400);
        }, 2000);
      };
    }
  });
});