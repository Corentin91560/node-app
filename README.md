# NodeJS3
NodeJS part 3
#Description 
Ce projet est réalisé en nodeJS et a pour but d'afficher une carte d'un lieu saisis via l'api Geocode 

faire un git clone de ce git (https://github.com/Corentin91560/node-app.git)
se placer dans le dossier 
## Installation
``` bash
$ npm install
$ DEBUG="node-app:server" npm start
```
## Envoie sur heroku
```bash
$ heroku login 
$ heroku create 
$ git push heroku master
```
## Lancer heroku sur le navigateur
```bash
$ heroku open
```

## Réalisation de test 
lancement des tests (présent dans le fichier test.js) via la commande 
```bash
$ npm test
```
1er test : Vérification de la presence du formulaire sur la page index.hjs 