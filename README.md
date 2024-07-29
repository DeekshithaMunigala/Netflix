# StreamFlix

This project is a Netflix Clone called StreamFlix, built using React.js and Firebase. It includes user authentication features such as sign-up, sign-in, and sign-out.

## Table of Contents
- Features
- Demo
- Installation
- Usage
- Technologies Used
- Project Structure
- Contributing
- License

## Features
- User authentication (sign-up, sign-in, sign-out) using Firebase
- Browse and search for movies and TV shows
- View details of selected movies or TV shows

## Demo
Check out the live demo of the project [StreamFlix](https://streamflix-project.netlify.app/).

## Installation
To get started with this project, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/your-username/streamflix.git
cd streamflix
```
2. Install the dependencies:
```bash
npm install
```
3. Set up Firebase for authentication:
- Go to https://console.firebase.google.com/ and create a new project.
- Enable Authentication and set up the sign-in methods you want to support (e.g., Email/Password).
- Get the Firebase configuration details from your project settings.

## Usage
To run the project locally, use the following command:
```bash
npm start
```
The application will be available at http://localhost:3000.

## Technologies Used
- React.js
- Firebase for authentication
- Axios for API requests

## Project Structure
```bash
streamflix/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── MovieList.js
│ │ ├── MovieItem.js
│ │ ├── MovieDetail.js
│ │ ├── SignUp.js
│ │ ├── SignIn.js
│ │ └── ...
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── MoviePage.js
│ │ └── ...
│ ├── firebase/
│ │ └── config.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── .env
├── package.json
└── README.md
```
## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
