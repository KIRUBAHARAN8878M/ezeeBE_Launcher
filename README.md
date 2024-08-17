1. Project Overview<br />
Title: App Launcher<br />
Description: A backend application designed to launch applications with specific parameters through a RESTful API. It is built using Node.js, Express.js, and MongoDB.<br />
2. Installation Instructions<br />
Prerequisites:<br />
Node.js and npm installed.<br />
MongoDB server - a MongoDB Atlas account.<br />
Backend Setup:<br />
Clone the repository:
```shell
git clone https://github.com/KIRUBAHARAN8878M/ezeeBE_Launcher.git
cd ezeeBE_Launcher
```
Install dependencies:
```shell
npm install
```
Configure MongoDB:
Create a .env file in the root directory.
Add your MongoDB URI:
```shell
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname?retryWrites=true&w=majority
```
Start the backend server:
```shell
node index.js
```
3. Usage
API Endpoints:
POST /launcher: Launches an application with the specified path and command.
Body Parameters:
```shell
{
  "appPath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "appcom": "google.com"
}
```

Testing with Postman:
Set the URL to 
```shell
http://localhost:5000/launcher.
```
Use the POST method and the JSON body format as described above.<br />
5. Features Implementation<br />
Launcher API:
Implemented a REST API that accepts POST requests to launch applications.
Utilized child_process to execute commands in the OS.<br />
MongoDB Integration:
Stored and retrieved application details using Mongoose models
