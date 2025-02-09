# Detox Clock

Ce projet est une application React qui affiche un compte à rebours jusqu'à une date cible, avec un message indiquant "Pas de réseaux sociaux avant".

## Prérequis

- Node.js
- npm

## Installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/votre-utilisateur/detox-clock.git
   cd detox-clock
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

## Utilisation

Pour démarrer l'application en mode développement :

```sh
npm start
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Tests

Pour exécuter les tests avec Jest :

```sh
npm test
```

## Structure du projet

```
detox-clock/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Counter.js
│   │   ├── Counter.test.js
│   │   └── Message.js
│   ├── styles/
│   │   └── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Personnalisation

Vous pouvez personnaliser le style de l'application en modifiant le fichier CSS situé dans `src/styles/App.css`.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request pour toute amélioration ou correction de bug.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
