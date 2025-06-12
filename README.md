Fitness Tracker Web App
==========================
A simple full-stack web application to help you log and visualize your daily workouts. This application supports multi-user tracking, allowing individuals to manage their personal fitness data.

Table of Contents
=====================
1. Features

2. Technologies Used

3. Prerequisites

4. Project Structure

5. Setup and Installation

  1. Step 0: Clone the Repository

  2. Step 1: Backend Setup (Server)

  3. Step 2: Frontend Setup (Client)

6. Database Setup (MongoDB)

  1. Option 1: MongoDB Atlas (Cloud - Recommended)

  2. Option 2: Local MongoDB Community Server

7. How to Run the Application

8. Usage

9. Troubleshooting Common Issues

10. Future Enhancements

11. License

Features
================
1. Workout Logging: Add new workout entries including type, duration, and notes.

2. Workout Listing: View a chronological list of all logged workouts.

3. Workout Deletion: Remove individual workout entries.

4. Workout Visualization: See your workout durations over time with an interactive chart.

5. Multi-User Tracking: Unique user IDs (stored locally) ensure each user sees only their own data.

Technologies Used
----------------
Backend (Server):

1. Node.js: JavaScript runtime.

2. Express.js: Web application framework for Node.js.

3. Mongoose: MongoDB object data modeling (ODM) for Node.js.

4. MongoDB: NoSQL database for storing workout data.

5. dotenv: To load environment variables from a .env file.

6. cors: Middleware for enabling Cross-Origin Resource Sharing.

7. nodemon: Development utility for automatically restarting the server on file changes.

Frontend (Client):

1. React: JavaScript library for building user interfaces.

2. axios: Promise-based HTTP client for making API requests.

3. recharts: A composable charting library built on React components.

4. HTML5, CSS3: For structure and styling.

Prerequisites
------------
Before you begin, ensure you have the following installed on your machine:

1. Node.js and npm (Node Package Manager): Download and install from nodejs.org. npm is included with Node.js.

2. MongoDB Database: You will need either a local MongoDB Community Server installation or a cloud-hosted MongoDB Atlas cluster. See Database Setup for details.

3. Code Editor: Visual Studio Code (VS Code) is recommended.

Project Structure
-----------------
This project uses a standard monorepo-like structure, with the frontend and backend in separate directories.

Fitness_Tracker_Web_App/
├── client/              # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── App.css      # Styling for the application
│   │   ├── App.js       # Main React component with logic and UI
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json     # Frontend dependencies and scripts
│   └── ... (other create-react-app files)
│
├── server/              # Backend Node.js / Express application
│   ├── models/
│   │   └── Workout.js   # Mongoose schema for Workout data
│   ├── routes/
│   │   └── workoutRoutes.js # API endpoints for workouts
│   ├── .env             # Environment variables (e.g., MongoDB URI)
│   ├── server.js        # Main backend application file (entry point)
│   ├── package.json     # Backend dependencies and scripts
│   └── ...
│
├── .gitignore           # Specifies intentionally untracked files to ignore by Git
└── README.md            # This README file


or


your-project-name/
├── client/                  # Frontend (e.g., React, Angular, Vue)
│   ├── public/              # Static assets (index.html, images)
│   │   └── index.html
│   ├── src/                 # Source code for your frontend application
│   │   ├── components/      # Reusable UI components
│   │   │   └── Button.js
│   │   ├── pages/           # Page-level components/views
│   │   │   ├── HomePage.js
│   │   │   └── LoginPage.js
│   │   ├── services/        # Functions for API calls (e.g., axios instances)
│   │   │   └── api.js
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point for React app
│   │   └── styles/          # Global styles
│   │       └── App.css
│   ├── .env                 # Environment variables for frontend
│   ├── package.json         # Frontend dependencies and scripts
│   └── README.md
│
├── server/                  # Backend (e.g., Node.js with Express, Django, Flask)
│   ├── config/              # Database connection, environment settings
│   │   └── db.js
│   ├── controllers/         # Logic for handling requests (what happens when an API endpoint is hit)
│   │   └── userController.js
│   ├── models/              # Database schemas/models (e.g., Mongoose schemas, Sequelize models)
│   │   └── User.js
│   ├── routes/              # API endpoints definitions
│   │   └── authRoutes.js
│   │   └── fitnessRoutes.js  # e.g., for Fitness Tracker
│   ├── middleware/          # Express middleware (e.g., authentication checks)
│   │   └── authMiddleware.js
│   ├── .env                 # Environment variables for backend
│   ├── server.js            # Main backend application file (entry point)
│   ├── package.json         # Backend dependencies and scripts
│   └── README.md
│
├── .gitignore               # Files/folders to ignore from Git version control
├── README.md                # Project README
└── package.json             # Optional: Workspace package.json for monorepo setup (running both client/server from root)

Setup and Installation
------------------------
Follow these steps to get the application up and running on your local machine using the Windows Command Prompt (CMD).

1. (1) Step 0: Clone the Repository (If applicable)
If this project is hosted on a Git repository, clone it to your local machine:

'git clone <repository-url>'
'cd Fitness_Tracker_Web_App'

If you already have the folder structure (e.g., from a download), simply navigate into the 'Fitness_Tracker_Web_App' directory.

Step 1: Backend Setup (Server)
1.Navigate to the 'server' directory:
Open your Command Prompt and type:

'cd C:\Users\Win\Downloads\Application_Development_Fitness_Tracker_Web_App\server'

(Adjust the path if your project is located elsewhere).

2. Initialize Node.js Project (if not already done):
If you don't see a 'package.json' file in the 'server' folder, run:

'npm init -y'

This creates a default 'package.json' file. If you encounter 'EJSONPARSE' errors here, it means a corrupted 'package.json' might exist. In such a case, manually delete any 'package.json' in the 'server' directory and re-run this command.

3. Install Backend Dependencies:
Install all required Node.js packages for the server:

'npm install express mongoose dotenv cors nodemon'

This might take a few minutes.

4. Create '.env' File:
In the 'server' directory, create a new file named '.env'. This file will store your database connection string.

'# server/.env'
'PORT=5000'
'MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING_HERE'

Important: Replace 'YOUR_MONGODB_CONNECTION_STRING_HERE' with your actual MongoDB connection string. See 'Database Setup' below for how to obtain this.

5. Create Model and Routes Files:
Ensure you have created the 'models' and 'routes' folders and their respective files as described in previous conversations:

  1. 'server/models/Workout.js'

  2. 'server/routes/workoutRoutes.js'

  3. Ensure your 'server/server.js' file is updated to include the 'workoutRoutes'.

(The code for these files was provided in previous responses and should be correctly placed in your project structure.)

2. (1) Step 2: Frontend Setup (Client)
1.Navigate to the 'client' directory:
Open a new Command Prompt window and type:

'cd C:\Users\Win\Downloads\Application_Development_Fitness_Tracker_Web_App\client'

2. Install Frontend Dependencies:
Install 'axios' for making HTTP requests:

'npm install axios'

If you encounter 'EJSONPARSE' errors or issues with 'create-react-app' during this step, you might need to perform a clean re-initialization:

  1. Go to the parent directory: 'cd ..' (now in 'Fitness_Tracker_Web_App')

  2. Delete the 'client' folder entirely: 'rmdir /s /q client'

  3. Re-create the React app: 'npx create-react-app client'

  4. Then 'cd client' and 'npm install axios' again.

3. Update 'App.js' and 'App.css':
Crucially, replace the entire content of the default 'App.js' and 'App.css' files generated by 'create-react-app' with the Fitness Tracker specific code.

  1. 'client/src/App.js': Replace its entire content with the provided Fitness Tracker 'App.js' code (including 'useState', 'useEffect', 'axios', 'recharts' imports, and UI logic for add/fetch/delete/chart).

  2. 'client/src/App.css': Replace its entire content with the provided CSS for styling the application.

(The code for these files was provided in previous responses and should be correctly placed in your project structure.)


Database Setup (MongoDB)

You need a running MongoDB instance for your backend to connect to.

Option 1: MongoDB Atlas (Cloud - Recommended)
  1. Sign Up for MongoDB Atlas: Go to 'cloud.mongodb.com' and create a free account.

  2. Create a Free Cluster (M0 Sandbox): Follow the guided steps to build a database, selecting the "Shared" (free) tier and a region close to you.

  3. Configure Network Access: In the Atlas dashboard, go to "Network Access" under "Security". Add your current IP address (or "Allow Access from Anywhere" for development, but be cautious in production).

  4. Create a Database User: Go to "Database Access" under "Security". Click "Add New Database User", choose "Password" authentication, set a strong username and password (write it down!), and grant "Read and write to any database" privileges.

  5. Get Connection String: Once your cluster is provisioned, go to "Database" (left pane), click "Connect" on your cluster, select "Connect your application", choose "Node.js", copy the connection string.

    1. Important: In the copied connection string, replace '<username>' with your created username and '<password>' with the password you wrote down.

    Example connection string (after filling in username/password):

  6. Update 'server/.env': Paste this complete connection string into your 'server/.env' file as the value for 'MONGODB_URI'.

Option 2: Local MongoDB Community Server
  1. Download MongoDB Community Server: Visit 'www.mongodb.com/try/download/community', select "Windows" and "MSI" package, then download.

  2. Run the Installer: Double-click the downloaded '.msi' file.

    1. Choose "Complete" installation.

    2. Keep default settings for service configuration (runs as a Windows Service).

    3. Ensure "Install MongoDB Compass" is checked (useful GUI tool).

    4. Complete the installation.

  3. Verify/Start MongoDB Service:

    1. Open "Services" (search 'services.msc' in Windows Start).

    2. Find 'MongoDB' or 'MongoDB Community Server'. Ensure its status is "Running". If not, right-click and "Start".

    3. Alternatively, open a Command Prompt, navigate to 'C:\Program Files\MongoDB\Server\{YOUR_MONGO_VERSION}\bin' (replace '{YOUR_MONGO_VERSION}'), and run 'mongod.exe'. Keep this window open.

  4. Update 'server/.env':
Set your 'MONGODB_URI' in 'server/.env' to:

'MONGODB_URI=mongodb://localhost:27017/fitnessdb'

How to Run the Application
==========================
You will need two separate Command Prompt windows running concurrently: one for the backend and one for the frontend.

1. Start the Backend Server:

  1. Open Command Prompt.

  2. Navigate to your 'server' directory:

  'cd C:\Users\Win\Downloads\Application_Development_Fitness_Tracker_Web_App\server'

  3. Start the server. It will attempt to connect to MongoDB.

  'node server.js'

  (If you added a "dev" script in 'package.json' for 'nodemon', you can use 'npm run dev' instead).

  4. Verify the output: You should see 'Server running on port 5000' and 'MongoDB connected successfully!'. If you see 'MongoDB connection error', your database is not accessible (refer to 'Troubleshooting').

2. Start the Frontend Development Server:

  1. Open a NEW Command Prompt window (do not close the backend one).

  2. Navigate to your 'client' directory:

  'cd C:\Users\Win\Downloads\Application_Development_Fitness_Tracker_Web_App\client'  

  3. Start the React development server:

  'npm start'

This will compile your React app and usually open a new tab in your browser at 'http://localhost:3000'.

Usage
=====
1. Access the App: Open your web browser and go to 'http://localhost:3000'.

2. Your User ID: In the header, you will see "Your User ID". This is a unique identifier generated for your browser and used to distinguish your data from others. Keep it in mind if you want to test with different "users" (e.g., in an incognito window or different browser).

3. Add a Workout:

  1. Select a "Workout Type" from the dropdown.

  2. Enter the "Duration (minutes)".
 
  3. Add any "Notes" (optional).

  4. Click "Add Workout".

4. View Workouts: Your newly added workout will appear in the "Your Workouts" list.

5. View Progress: The "Workout Progress" chart will update to visualize your workout durations as you add more data.

6. Delete Workout: Click the "Delete" button next to any workout in the list to remove it.

Troubleshooting Common Issues
=============================
1. 'npm error code EJSONPARSE':

  1. Cause: Corrupted or empty 'package.json' file.

  2. Solution (for server): 'cd server' -> 'del package.json' -> 'npm init -y'.

  3. Solution (for client): 'cd ..' (to parent dir) -> 'rmdir /s /q client' -> 'npx create-react-app client' -> 'cd client' -> 'npm install axios'.

2. ''nodemon' is not recognized...':

  1. Cause: 'nodemon' is installed locally but not globally recognized by your system's PATH.

  2. Solution: In 'server/package.json', add '"dev": "nodemon server.js"' under '"scripts"'. Then run 'npm run dev' from the 'server' directory.

3. 'MongoDB connection error: MongooseServerSelectionError: connect ECONNREFUSED ...':

  1. Cause: Your Node.js backend cannot connect to the MongoDB database. The MongoDB server is likely not running or the connection string is incorrect.

  2. Solution:

    1. Ensure MongoDB is running:

      1. Local: Start 'mongod.exe' from its 'bin' directory (e.g., 'C:\Program Files\MongoDB\Server\{VERSION}\bin\mongod.exe') in a separate CMD window, or check/start the MongoDB service in 'services.msc'.

      2. Atlas: Verify your internet connection, ensure your IP is whitelisted in Atlas, and your connection string in 'server/.env' is correct (especially username and password).

    2. Restart Backend Server: After ensuring MongoDB is running, stop your 'node server.js' process ('Ctrl + C') and restart it.

4. Frontend shows blank page or React default page after updating 'App.js':

  1. Cause: You might have pasted the new 'App.js' code below the old boilerplate code, resulting in duplicate definitions.

  2. Solution: Open 'client/src/App.js', delete ALL content, and then paste ONLY the Fitness Tracker 'App.js' code into the empty file. Save.

Future Enhancements
====================
1. Full User Authentication: Implement proper user registration, login, and secure sessions (e.g., using JWTs).

2. Data Aggregation & Reporting: Add more advanced charts (e.g., bar charts for workout types, monthly summaries).

3. Workout Editing: Allow users to modify existing workout entries.

4. Goal Tracking: Set and track fitness goals (e.g., daily steps, weekly workout targets).

5. Sharing: Allow users to share their workout summaries.

6. Improved UI/UX: Enhance styling, add animations, and make the application more responsive.

7. Search/Filter: Add functionality to search or filter workouts by type, date range, etc.

License
=======
This project is open-source and available under the ' ISC License '. Feel free to use, modify, and distribute.
