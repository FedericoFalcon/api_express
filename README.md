## POKEAPI CUSTOM con node.js y express
### Se puede consultar ejemplos en la documentación de postman: https://documenter.getpostman.com/view/24927600/2s9YJXb5mX#e7733ead-420e-45dd-b00d-8752243229e3

## Principalmente la api permite hacer tres cosas:

1. Ver una descripción sencilla de un pokemon
2. Chequear tipos de pokemon (fuego, agua, etc)
3. Ver dos listados de 50 pokemons.
--------------------------------
1. 
Dentro de la opción de ver un pokemon, se pueden añadir query params para más información.
De igual manera sucede con los tipos.

Los get de pokemons aceptan 1 paramatro (nombre del pokemon) y hasta 3 query params (stats=1, abilities=1, sprites=1)
Es decir, los query params funcionan a modo de 'true'.

Ejemplos:
https://api-render-express-ejx1.onrender.com/v1/pokemon/psyduck
https://api-render-express-ejx1.onrender.com/v1/pokemon/mankey?abilities=1
https://api-render-express-ejx1.onrender.com/v1/pokemon/kadabra?stats=1&abilities=1&sprites=1

2. 
Para los tipos de pokemon la lógica es la misma, el param seria el tipo (fire, water, electric, etc)
y hasta 3 query params (pokemon=1, damage_relations=1 ,moves=1)

Ejemplos: 
https://api-render-express-ejx1.onrender.com/v1/pokemontype/water
https://api-render-express-ejx1.onrender.com/v1/pokemontype/fire?pokemon=1
https://api-render-express-ejx1.onrender.com/v1/pokemontype/electric?pokemon=1&damage_relations=1&moves=1

3. 
La API permite ver dos listados de 50 pokemons:
https://api-render-express-ejx1.onrender.com/v1/pokemons
https://api-render-express-ejx1.onrender.com/v1/pokemons2
