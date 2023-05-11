<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

SPA (Single Page Application) consumes data from pokemon API and allows to create, update and delete pokemons.
It was built using PostgresSQL, Sequelize, Express, Node Js, Redux and React. 

Video : https://www.linkedin.com/feed/update/urn:li:activity:6910586993676558336/
<br>
URL : https://henry-pi-pokemon.vercel.app/ 


### Project Objectives
Build an app using React, Redux, Node, and Sequelize.
Apply and connect the concepts learned during the course.
Learn and apply best practices.
Learn and practice the GIT workflow.
Use and practice testing.

### Schedule and Dates
The project will have a maximum duration of three weeks. If you complete all the tasks before this timeframe, you can notify your instructor to coordinate a presentation date for the work (DEMO).

### Getting Started
Fork the repository to have a copy on your accounts.
Clone the repository to your computers to start working.
You will have a boilerplate with the general structure of both the server and the client.

IMPORTANT: You need to have at least the latest stable version of Node and NPM. Make sure you have it installed correctly to install the necessary dependencies for running the project.

The required versions are currently:

Node: 12.18.3 or higher
NPM: 6.14.16 or higher

To check the installed versions:

node -v

npm -v

### Boilerplate
The boilerplate has two folders: api and client. In these folders, you will find the backend and frontend code, respectively.

In the api folder, create a file named: .env with the following format:

DB_USER=postgresUser
DB_PASSWORD=postgresPassword
DB_HOST=localhost

Replace postgresUser and postgresPassword with your own credentials to connect to PostgreSQL. This file will be ignored when uploading to GitHub since it contains sensitive information (the credentials).

Additionally, you will need to create a database named "pokemon" using psql.

The content of the client folder was created using Create React App.

### Project Statement
The general idea is to create an application where you can view different Pokemon using the external pokeapi and, based on it, perform the following actions, among others:

Search for Pokemon
Filter/Sort Pokemon
Create new Pokemon

IMPORTANT: For filtering and sorting functionalities, you cannot use the pre-filtered or pre-sorted endpoints provided by the external API. You need to implement these functionalities yourself. Particularly, at least one of the sorting or filtering options must be done from the frontend.

Only Allowed Endpoints/Flags
GET https://pokeapi.co/api/v2/pokemon
GET https://pokeapi.co/api/v2/pokemon/{id}
GET https://pokeapi.co/api/v2/pokemon/{name}
GET https://pokeapi.co/api/v2/type

### Minimum Requirements:
The following are the minimum requirements for the individual project approval. If you want to add more functionalities, you are welcome to do so. Regarding visual design, there won't be predefined wireframes or prototypes, but you have the freedom to design it according to your taste, while applying the styling concepts seen in the course to make it visually pleasing.

IMPORTANT: External libraries are not allowed for applying styles to the application. You have to use CSS with some of the options we have seen in class (pure CSS, CSS Modules, or Styled Components).

Required Technologies:
React
Redux
Express
Sequelize - Postgres

### Frontend:
You must develop a React/Redux application with the following screens/routes.

Home Page: Create a landing page with:

A representative background image for the project
A button to enter the main home page (main route)

The main route should contain:

A search input to find pokemons by name (the search will be exact, meaning it will only find the pokemon if the full name is entered).
An area where the list of pokemons will be displayed. Upon initialization, it should load the first results obtained from the GET /pokemons route and display:
Image
Name
Types (Electric, Fire, Water, etc.)
Buttons/Options to filter by pokemon type and by existing or user-created pokemons.
Buttons/Options to sort the pokemons in ascending or descending order by alphabetical order and by strength.
Pagination to navigate and display the next set of pokemons, with 12 pokemons per page.
IMPORTANT: The main route should display both the pokemons fetched from the external API and those from the database. Additionally, if you check the endpoint that fetches all the pokemons, you'll notice that it doesn't provide the pokemon's information directly but instead provides a URL for a subrequest to obtain the data. For each pokemon to be displayed, you'll need to make another request to that URL to fetch its image and types. However, since this can potentially slow down the search, limit the total result to 40 pokemons.

The Pokemon detail route should contain:

The fields displayed in the main route for each pokemon (image, name, and types).
Pokemon number (id).
Statistics (HP, strength, defense, speed).
Height and weight.
The creation route should contain:

A controlled JavaScript form with the fields mentioned in the Pokemon detail section.
The ability to select/add more than one type of pokemon.
A button/option to create a new pokemon.
It is required that the creation form be validated with JavaScript, not just HTML validations. You can add the validations you consider necessary, such as disallowing numeric characters in the Pokemon's name or setting a maximum value for the height, etc.

### Database:
The database model should have the following entities (properties marked with an asterisk are mandatory):

Pokemon with the following properties:
ID (Pokemon number)*: It cannot be the ID of an existing pokemon in the pokeapi.
Name*
HP (Health Points)
Strength
Defense
Speed
Height
Weight
Type with the following properties:
ID
Name
The relationship between these entities should be many-to-many since a pokemon can belong to multiple types, and a type can include many pokemons.

IMPORTANT: Consider how to model the IDs of the pokemons in the database. There are different correct ways to do it, but keep in mind that when you click on a pokemon, it can come from the API or from the database. When displaying its details, there should be no ambiguity about which one should be shown. For example, if in the API the pokemon Bulbasaur has id = 1 and in our database, we create a new pokemon named Henry with id = 1, find a way to differentiate them when accessing their details.

### Backend:
You need to develop a Node/Express server with the following routes:

IMPORTANT: You are not allowed to use the filtering, sorting, and pagination provided by the external API. You need to implement these functionalities yourself.

GET /pokemons:
Retrieve a list of pokemons from pokeapi.
It should only return the necessary data for the main route.

GET /pokemons/{idPokemon}:
Get the details of a specific pokemon.
It should only fetch the requested data for the pokemon detail route.
Note that it should work for both the ID of an existing pokemon in pokeapi and one created by you.
GET /pokemons?name="...":

Get the pokemon that exactly matches the name passed as a query parameter.
It can be from pokeapi or created by you.
If no pokemon is found, display an appropriate message.
POST /pokemons:

Receive the data collected from the controlled form in the pokemon creation route through the request body.
Create a new pokemon in the database.
GET /types:

Get all possible pokemon types.
Initially, you should fetch them from pokeapi and save them in your own database, and then use them from there.

### Testing:

Have at least one frontend component with its respective tests.
Have at least one backend route with its respective tests.
Have at least one database model with its respective tests.
