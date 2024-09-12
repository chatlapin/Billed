Bug - report :

Tri par dates décroissantes des notes de frais.
Connexion à la page administrateur.
➡ Bug - hunt :
Gestion des extensions valides pour le justificatif.
Gestion de l'ouverture des notes de frais côté administrateur.
➡ Ajout de tests unitaires et d'intégrations :
Bills.js
NewBill.js
➡ Rédaction d'un plan de test E2E pour le parcours employé


## L'architecture du projet :
Le projet backend se trouve ici: 
[https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back]
(https://github.com/chatlapin/Billed/tree/main/Billed-app-FR-Back)


## Organiser son espace de travail :
Pour une bonne organization, vous pouvez créer un dossier bill-app dans lequel vous allez cloner le projet backend et par la suite, le projet frontend:

Clonez le projet backend dans le dossier bill-app :
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
bill-app/
   - Billed-app-FR-Back (vérifie par "ls")
   - Billed-app-FR-Front

## Comment lancer l'application en local ?

### étape 1 - Lancer le backend :

### Acceder au repertoire du projet :
```
cd Billed-app-FR-Back
```

### Installer les dépendances du projet :

```
npm install
```

### Lancer l'API :

```
npm run run:dev
```

### Accéder à l'API :

L'api est accessible sur le port `5678` en local, c'est à dire `http://localhost:5678`

### étape 2 - Lancer le frontend :

Allez au repo cloné :
```
$ cd Billed-app-FR-Front
```

Installez les packages npm (décrits dans `package.json`) :
$ npm install

Installez live-server pour lancer un serveur local :
$ npm install -g live-server

Lancez l'application :
$ live-server

Puis allez à l'adresse : `http://127.0.0.1:8080/`


## Comment lancer tous les tests en local avec Jest ?

```
$ npm run test
```

## Comment lancer un seul test ?

Installez jest-cli :

```
$npm i -g jest-cli
$jest src/__tests__/your_test_file.js
```

## Comment voir la couverture de test ?

`http://127.0.0.1:8080/coverage/lcov-report/`

## Comptes et utilisateurs :

Vous pouvez vous connecter en utilisant les comptes:

### administrateur : 
```
utilisateur : admin@test.tld 
mot de passe : admin
```
### employé :
```
utilisateur : employee@test.tld
mot de passe : employee
```
