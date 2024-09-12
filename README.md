## Missions

➡ Bug - report :

Tri par dates décroissantes des notes de frais.

Billed-app-FR-Front-main/src/views/BillsUI.js

return (data && data.length) ? data.map(bill => row(bill)).join("") : ""

return (data && data.length) ? data.sort((a, b) => new Date(b.date) - new Date(a.date)).map(bill => row(bill)).join("") : ""

Connexion à la page administrateur.

Billed-app-FR-Front-main/src/containers/Login.js

email: e.target.querySelector(`input[data-testid="employee-email-input"]`).value,
   password: e.target.querySelector(`input[data-testid="employee-password-input"]`).value,
   
email: e.target.querySelector(`input[data-testid="admin-email-input"]`).value,
   password: e.target.querySelector(`input[data-testid="admin-password-input"]`).value,

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
<img width="327" alt="Screenshot 2024-09-12 at 19 30 08" src="https://github.com/user-attachments/assets/367c9b09-f9e7-473a-a10c-5a3fba623903">

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
<img width="807" alt="Screenshot 2024-09-12 at 19 31 11" src="https://github.com/user-attachments/assets/a11f4838-1f54-44a2-92cf-81f52b06ce4f">


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

➡ JEST TEST

Billed-app-FR-Front-main/src/containers/Dashboard.js

Billed-app-FR-Front-main/src/containers/Login.js

Billed-app-FR-Front-main/src/containers/NewBill.js

Billed-app-FR-Front-main/src/views/BillsUI.js

Billed-app-FR-Front-main/src/views/NewBillUI.js

<img width="467" alt="JEST TEST" src="https://github.com/user-attachments/assets/fcfd6d1b-bf62-45d9-a23f-7204ea22df5f">

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
