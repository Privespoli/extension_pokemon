document.addEventListener('click', (e) => {
  // Salva a posição do clique antes da resposta chegar
  const posX = e.pageX;
  const posY = e.pageY;

  chrome.runtime.sendMessage({ action: "getRandomPokemon" }, (response) => {
    if (response && response.imgUrl) {
      const img = document.createElement('img');
      img.src = response.imgUrl;
      img.classList.add('poke-click');
      
      // Centraliza no clique
      img.style.left = `${posX - 40}px`;
      img.style.top = `${posY - 40}px`;
      
      document.body.appendChild(img);
      setTimeout(() => img.remove(), 2000);
    }
  });
});