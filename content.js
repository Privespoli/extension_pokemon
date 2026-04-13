document.addEventListener('click', async (e) => {
  // 1. Sortear um ID de Pokémon (atualmente existem 1010+)
  const pokemonId = Math.floor(Math.random() * 1010) + 1;

  try {
    // 2. Buscar dados do Pokémon na PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    
    // 3. Pegar a URL da imagem (usando o sprite oficial frontal)
    const imgUrl = data.sprites.front_default;

    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.classList.add('poke-click');
      
      // Posicionamento
      img.style.left = `${e.pageX - 40}px`;
      img.style.top = `${e.pageY - 40}px`;
      
      document.body.appendChild(img);

      // Remover após 3 segundos
      setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => img.remove(), 500);
      }, 2500);
    }
  } catch (error) {
    console.error("Erro ao invocar Pokémon:", error);
  }
});