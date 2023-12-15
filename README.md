# KATA TDD front

## Objectif

Le but de ce kata est d'afficher une blague lorsqu'on clique sur un bouton

## Etapes

### Etape 1

Créer le bouton

### Etape 2

Faire l'appel à l'api pour récupérer la blague
URL API joke : 
```
GET https://v2.jokeapi.dev/joke/programming?type=twopart
```
#### Réponse API exemple
```JSON
{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "Why did the web developer walk out of a resturant in disgust?",
    "delivery": "The seating was laid out in tables.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 6,
    "safe": true,
    "lang": "en"
}
```

### Etape 3

Afficher la blague
