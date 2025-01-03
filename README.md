## Missions

➡ Bug - report :

BillsUI: Tri par dates décroissantes des notes de frais.

Login: Connexion à la page administrateur.

➡ Bug - hunt :

NewBill: Gestion des extensions valides pour le justificatif, Justificatif affichable, images

Dashboard: Gestion de l'ouverture des notes de frais côté administrateur, Clickable, items-list

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

erreur: click "GoLive" on VSCode

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

https://jestjs.io/docs/using-matchers

Billed-app-FR-Front-main/src/containers/Dashboard.js

indent error

this.counter++

$(`#arrow-icon${this.index}`).css({ transform: 'rotate(0deg)' })

$(`#arrow-icon${this.index}`).css({ transform: 'rotate(90deg)' })

bills.forEach(bill => {
      $(`#open-bill${bill.id}`).click((e) => this.handleEditTicket(e, bill, bills))

      change to
      
      $(`#status-bills-container${this.index}  #open-bill${bill.id}`).click((e) => this.handleEditTicket(e, bill, bills))
      
Billed-app-FR-Front-main/src/containers/Login.js

 this.document.body.style.backgroundColor = "#fff"

 document.body.style.backgroundColor = "#fff"

    .login(JSON.stringify({
          email: user.email,
          password: user.password,
        })).then(({ jwt }) => {
          localStorage.setItem('jwt', jwt)
        })

Billed-app-FR-Front-main/src/containers/NewBill.js

 const fileInput = this.document.querySelector(`input[data-testid="file"]`)
    const file = fileInput.files[0]
    const filteType = file.type.split("/")
    if (filteType[0] !== "image") {
      alert("Please choose an image file!")
      fileInput.value = ""
      return;
    }    

Billed-app-FR-Front-main/src/views/BillsUI.js

Billed-app-FR-Front-main/src/views/NewBillUI.js

 <input required type="file" class="form-control blue-border" data-testid="file" accept="image/*" />

https://jestjs.io/docs/using-matchers

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
