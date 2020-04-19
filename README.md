# CropCostServer

## Installation:
### Install the database:
- linux run `sudo apt install mongodb`
- windows follow instructions found here https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials

### Install Nodejs 13.7.0
#### Linux
1. Install NVM  `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`
2. Install version 13.7.0 `nvm install 13.7.0`

#### Windows
1. Follow the instructions here: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows

### Install GIT:
#### Linux:
- sudo apt install git
#### Windows:
- https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Clone the project:
1. Go to the directory where you would like this project to be stored in a terminal
2. run the command `git clone https://github.com/NYS-Agriculture-Crop-Group/CropCostServer.git`
3. go into the project directory `cd CropCostServer`

### Install npm dependencies:
1. run the command `npm install`

## Running the project:
### With Nodemon:
1. `nodemon app.js`
### Without Nodemon:
1. `nodejs app.js`
