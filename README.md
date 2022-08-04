## Custom Visualizations Workshop
The following repository stores the step by step code for the training "Custom Visualizations training" delivered by MicroStrategy. 

### Prerequisites

- **Administrator privileges** to execute npm and mstr-viz command over the console in your computer.
- **node.js** installed globally. In order to build the visualization, it is necessary to use npm commands.
- The microstrategy library **mstr-viz** installed locally in your workspace folder. Execute npm install mstr-viz to make it available locally, npm install -g mstr-viz to make it available globally. 
- Any IDE for frontend development such as **Visual Studio Code**.
- **Basic knowledge of javascript**

### Repository guidelines
This repository is structured using branches. Every version of the visualization can be found in a different branch. **Master will** however **contain the LATEST STABLE CODE**. Here are the branches available :

- **Workshop#1 Ex#1** - Contains the result of the creation of the visualization structure using node.js and custom visualization tool. 
- **Workshop#1 Ex#2** - Contains the modification of the config.js file to match your environment variables. 
- **Workshop#1 Ex#3** - Contains the finalize visualization
- **Workshop#1 Final** - Contains the result of the visualization implemented during the workshop. 

- **Workshop#2 Ex#1**- Contains the implementation of the format panel over the results of Workshop#1 Ex#3. 

### Basic commands*
- *npm --version* - Returns the installed version of node.js
- *npm install -g mstr-viz* -- Installs microstrategy custom viz tool in your environment globally.
- *npm build* - Builds the visualization in the moment it is executed.
- *npm start* - In addition to building the visualization in the moment is executed, it also rebuilds it with every change in the code.

*If the any of these commands throws a 'lack of privileges' error, please add *'sudo'* at the begining of the request.

