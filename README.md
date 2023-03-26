# ShareMarket
## About the Project
ShareMarket is a social media platform that allows users to share and discover items with others. Users can create profiles, post items, and view and comment on items posted by other users.

## Installation
To install ShareMarket, follow these steps:

1. Clone the repository to your local machine:
`git clone https://github.com/Vtewari2311/Share-Market.git`

2. Install dependencies in both the root directory and the client directory:
* > cd Share-Market

* > npm install

* > cd client

* > npm install

3. Create a .env file in the root directory with the following variables:
* `MONGODB_URI=<your-mongodb-uri>`
* `SESSION_SECRET=<your-session-secret>`

4. Start the application:
`npm start`

## Usage
To use ShareCrate, simply navigate to http://localhost:5000 in your web browser. From there, you can create a profile, post items, and view and comment on items posted by other users.

## Project Directory:

```bash
.
├── node_modules/
├── public/
│   ├── index.html
│   ├── index.css
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ItemCard.jsx
│   │   ├── ItemForm.jsx
│   │   ├── ItemList.jsx
│   │   ├── Login.jsx
│   │   ├── MessageForm.jsx
│   │   ├── MessageList.jsx
│   │   └── Signup.jsx
│   ├── services/
│   │   ├── auth.js
│   │   ├── items.js
│   │   └── messages.js
│   ├── App.jsx
│   ├── index.js
│   └── utils/
│       └── api.js
├── server/
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── items.js
│   │   └── messages.js
│   ├── models/
│   │   ├── Item.js
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── items.js
│   │   └── messages.js
│   ├── utils/
│   │   └── database.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md

```

Contributing
We welcome contributions to ShareCrate! To get started, follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone the repository to your local machine:
git clone `https://github.com/Vtewari2311/Share-Market.git`
3. Install dependencies in both the root directory and the client directory:
* `cd Share-Market`
* `npm install`
* `cd client`
* `npm install`
4. Create a new branch for your changes:
> git checkout -b my-new-feature
5. Make your changes and commit them:
> git commit -am 'Add some feature'
6. Push your changes to your fork:
> git push origin my-new-feature
7. Create a new pull request from your fork to the main branch of the original repository.
Please make sure your code is well-tested and follows our coding standards before submitting a pull request. We also ask that you include a detailed description of your changes in your pull request, along with any necessary documentation updates.





