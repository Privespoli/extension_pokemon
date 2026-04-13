document.addEventListener('click', (e) => {
  const posX = e.pageX;
  const posY = e.pageY;

  chrome.runtime.sendMessage({ action: "getRandomPokemon" }, (response) => {
    if (response && response.imgUrl) {
      const img = new Image(); 
      img.src = response.imgUrl;
      img.classList.add('poke-click');
      
      // Estilo para centralizar (ajustando metade da largura/altura definida no CSS)
      img.style.left = `${posX - 50}px`;
      img.style.top = `${posY - 50}px`;
      
      // Só adiciona ao corpo da página quando a imagem carregar
      img.onload = () => {
        document.body.appendChild(img);
        
        // Remove o Pokémon após 2 segundos com um efeito de sumiço
        setTimeout(() => {
          img.style.opacity = '0';
          setTimeout(() => img.remove(), 500); // Espera o fade-out acabar
        }, 2000);
      };
    }
  });
});