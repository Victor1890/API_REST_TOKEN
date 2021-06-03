# API_REST_MONGO

This API is create with ASP .NET Core and MongoDB, serves as a practice to learn more about ASP and MONGODB.

## Content

This proyect has one basic CRUD.

## How to clone

Before cloning the repository, you need to have these technologies.

* [NodeJS](https://nodejs.org)

* [MongoDB](https://www.mongodb.com/try/download/community)

* [TypeScript](https://www.typescriptlang.org/)

* [Visual Studio Code](https://code.visualstudio.com/).

## Installation

To install and run this project, you must follow these steps.

```bash
git clone https://github.com/Victor1890/API_REST_TOKEN.git
```

```bash
cd API_REST_TOKEN
```

```bash
npm install
```

```bash
npm run dev
```

## Routes

```ts
router.post("/signup", authController.signup);
```

```ts
router.post("/signin", authController.signin);
```

```ts
router.get("/profile", authController.profile);
```
