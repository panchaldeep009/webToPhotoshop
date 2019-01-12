# webToPhotoshop
This Application takes request from a web application and generates graphics using Photoshop Script then return to the server.
## How to Setup
  ### Setup Facebook Login SDK
  - This program uses Facebook login API to authenticate users and use Facebook given name to generate graphics; therefore, facebook PHP SDK needs to install in directory : `Web/FB_connect/fb-sdk/` from `https://github.com/facebook/php-graph-sdk`.
  - Create a Facbook App, and set Application ID and Secret into `Web/FB_connect/config.php`
  - Host `Web` folder on SSL(`https:\\`) sever in order to work facebook api
  ### Setup MySQL and Severside Web
  - Set MySQL username and Password in `Web/connect.php`
  - Set Access Password in `Web/upload.php` and `Web/data.php` in line 3
  - Once graphic generate it sends to user email so sender email needs to setup in `Web/upload.php` line 16
  ### Setup Python Program 
  - Install Python
  - Install requests library `pip install requests`
  - Install win32com library `pip install pywin32`
  - Set hosted link of this web application in `Python Script/listenRequest.py` on line 25,30 and 34.
  - Set Access Password in `Python Script/listenRequest.py` on line 25 and 34.
  ## How this Works
  - Run listenRequest.py
  - This program keeps listening requests that coming from this web application
  - Request creates by visiting hosted web application which redirects to facebook login
  - Once login get successful it takes user's Name and email address and sends a request
  - Once request found in the database it opens photoshop and runs .jsx script to generate graphics
  - After image saved it uploads to server and sends to user's email address
  ## Sample
  ![alt text](https://deep-panchal.com/webToPS/images/Deep-Panchal_1982017858560029.jpg)
