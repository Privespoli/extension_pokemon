chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getRandomPokemon") {
    const pokemonId = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => sendResponse({ imgUrl: data.sprites.front_default }))
      .catch(error => console.error(error));
    return true; // Mantém o canal aberto para a resposta assíncrona
  }
});