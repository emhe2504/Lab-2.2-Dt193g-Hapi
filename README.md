Detta projekt är skapat som en del av uppgift 2.2 i kursen Dt193g.
Projektet är en REST-webbtjänst som skapats med backend-ramverket Hapi och Node.js. Webbtjänstens data lagras i databasen
MongoDB och Mongoose används för databaskoppling.
____________________________________________________________________________________________________________________________

REST-webbtjänsten har skapats för att lagra serier, antingen serier som setts eller serier som önskar ses.
Lagringen är strukturerad enligt följande:

- "title": "seriens titel",
- "comment": "kommentar om serien",
- "rating": nummer 0-3,
- "haveSeen": true eller false


Alltså följande datatyper:
- titel: string,
- comment: string,
- rating: integer,
- haveSeen: boolean

Inga fält kan lämnas tomma. Rating måste vara 1-3 för serie som setts och 0 för serie som inte setts. På haveSeen anges true om
serien kollats på och false om serien ej kollats på.
______________________________________________________________________________________________________________________________

CRUD-operationer och end-points:

Hämtar alla serier:


- GET: https://lab-2-2-dt193g-hapi.onrender.com/series

Hämta serie utifrån specifikt id:


- GET: https://lab-2-2-dt193g-hapi.onrender.com/series/{id}

Lägga till en serie (med seriestruktur (se ovan) i body):


- POST: https://lab-2-2-dt193g-hapi.onrender.com/series

Uppdatera befintlig serie utifrån specifikt id (med seriestruktur (se ovan) i body):


- PUT: https://lab-2-2-dt193g-hapi.onrender.com/series/{id}

Radera serie utifrån specifikt id:


- DELETE: https://lab-2-2-dt193g-hapi.onrender.com/series/{id}


_______________________________________________________________________________________________________________________________

Länk till API:

https://lab-2-2-dt193g-hapi.onrender.com

