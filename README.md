# StarWars Project

## 📄 Description

This application was generated using **Angular CLI 18**. This application was generated using Angular CLI 18. Its purpose is to generate a web interface that displays information about Star Wars starships by consuming an external API. The user can browse through a list of starships and view detailed information for each one.

The data is fetched from the SWAPI (Star Wars API), which provides detailed information about the starships. Pagination is used to manage the large amount of data, and the user can load more starships on demand.

## 📜 Features
- Display a list of starships
- View detailed information about each starship (image, name, model...)
- Infinite scroll in starship-list to load additional data
- Protected routes using Angular Guards to restrict access to certain pages for registered users
- User authentication using JSON Web Tokens (JWT)
- Login and registration system integrated with a mock backend (json-server-auth)

## 💻 Technologies

- [Angular CLI](https://angular.dev/) version 18.2.5.
- [Bootstrap](https://getbootstrap.com/) version 5.3.3
- HTML5
- SCSS
- TypeScript


## 📋 Requirements

- Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

- Angular CLI installed globally. You can install it with the following command:

```bash
npm install -g @angular/cli
```

## 🛠️ Instructions

**✔️ Step 1:** Clone the repository:

```bash
git clone https://github.com/mmartincasas/Sprint-7
```

**✔️ Step 2:** Navigate to the project directory and install the npm dependencies:

```bash
npm install
```


## ⚙️ Development server

**✔️ Backend (JWT Authentication):** To start JSON Server with authentication enabled by running:

```bash
npx json-server-auth db.json
```
The backend server will run at `http://localhost:3000/`. Make sure to use this endpoint for login and registration requests.

**✔️ Frontend:** Run `ng serve` for a dev server. Then, open `http://localhost:4200/` in your browser. The application will automatically reload whenever you modify any of the source files.


## 📚 Resources

- Star Wars API:
    - [Swapi.dev](https://swapi.dev/)

- Star Wars Visual Guide:
    - [starwars-visualguide](https://starwars-visualguide.com/)


