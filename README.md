
Title: App Launcher<br />
Description: A backend application designed to launch applications with specific parameters through a RESTful API. It is built using Node.js, Express.js.<br />
Installation Instructions<br />
> **Note**:Prerequisites:<br />
Node.js and npm installed.<br />

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
Start the backend server by using terminal:
```shell
node index.js
```
Start the backend server by uing '.bat' file:
after npm install just Double click the '.bat' file automatically start the server.
```shell
start-server.bat
```

API Endpoints:
POST /launcher: Launches an application with the specified path and command.
Body Parameters: <br />
Example 1 :  <br />
```shell
{
  "appPath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "appcom": "google.com"
}
```

Example 2 : <br />

```shell
{
  "appPath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "appcom": "youtube.com"
}
```

Testing with Postman:
Set the URL to 
```shell
http://localhost:5000/launcher.
```
Use the POST method and the JSON body format as described above.<br />

Features Implementation<br />
Launcher API:<br />
Implemented a REST API that accepts POST requests to launch applications.<br />
Utilized 'child_process' to execute commands in the OS.<br />

<br />
Demo video by using postman to launch the app. <br />

```shell
https://github.com/KIRUBAHARAN8878M/ezeeBE_Launcher/blob/main/Launchapppostman.mp4
```
<br />

Batch Files :  Create a batch file to automate server startup.<br />

```shell

@echo off
echo Starting the backend Launcher...
node index.js

```


