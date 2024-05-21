# Netflex Clone App

The Netflex Clone App is a movie streaming app that allows users to create accounts, sign in, and watch movies. The app features a landing page with a randomly selected trending movie and multiple rows displaying different categories of movies. Users can scroll through the rows and hover over a movie to see its name.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication

## Installation

To run the app locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Mohamed-Samahi/netflix-clone.git
    ```

2. **Navigate to the root directory and install dependencies**:

    For the backend, run the installation command at the root folder, where the package.json file exists:
    ```sh
    cd netflex-clone
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable Firebase Authentication and Firebase Realtime Database in the Firebase Console.
    - Obtain the Firebase configuration values for your web app (apiKey, authDomain, projectId, storageBucket, appId) from Firebase Console.

4. **Get an IMDB API Key**:
    - Sign up for an account at [IMDb API](https://developer.imdb.com/) and obtain your API key.

5. **Create a `.env` file in the root directory of the app** and add the following environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_IMDB_API_KEY=your_imdb_api_key
    ```

6. **Run the app**:
    First, start the backend server:
    ```sh
    npm start
    ```

## Usage

1. **Create Account/Sign In**: Users can create new accounts or sign in with existing accounts.
2. **Watch Movies**: Browse through the categories and click on a movie to watch it.
3. **Search**: Use the search functionality to find specific movies.
4. **Hover Effect**: Hover over a movie to see its name.

## Contact

For any questions or feedback, please open an issue on GitHub or contact me at [mohamedsamahi.work@gmail.com](mailto:mohamedsamahi.work@gmail.com).

## More Projects

For more projects, visit my portfolio at [https://mohamed-samahi.vercel.app/](https://mohamed-samahi.vercel.app/).
