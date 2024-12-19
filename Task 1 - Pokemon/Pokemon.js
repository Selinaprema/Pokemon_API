// I required help from my mentor for this task
// Function to fetch and display Pokémon details
function fetchPokemonDetails() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/squirtle/";

  // Fetch the API response
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract and display specific information from the response
      const name = data.name;
      const weight = data.weight;
      // Extract abilities from an array
      const abilities = JSON.stringify(data.abilities, null, 4);
      // Log details
      console.log(`Name:\n${name}\n`);
      console.log(`Weight:\n${weight}\n`);
      console.log(`Abilities:\n ${abilities}`);
    });
}
// Call function
fetchPokemonDetails();
