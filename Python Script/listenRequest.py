#!/usr/bin/env python
import io, os, urllib.request, requests, json, time
from win32com.client import Dispatch
def harrayPotterText(data, uid, src, script, save):
    dir = (os.getcwd().replace("\\", "/"))
    jsx = dir+script
    
    with open(jsx, 'r') as file:
        lineData = file.readlines()
    lineData[6] = 'var names = "'+data+'";\n'
    lineData[7] = 'var source = "'+dir+src+'";\n'
    lineData[8] = 'var save = "'+dir+save+'/";\n'
    lineData[9] = 'var uid = "_'+uid+'";\n'
    saveFile = dir+save+'/'+usData['ps_data'].replace(" ", "-")+"_"+usData['ps_usr_data']+".jpg"
    with open(jsx, 'w') as file:
        file.writelines( lineData )
    try: 
        psapp = Dispatch("Photoshop.Application")
        psapp.Open(jsx)
    except:
        print('some error')
        
    with open(saveFile, 'rb') as f:
        # Change to hosted url, Change data access password
        r = requests.post('https://localhost/upload.php', files={'img': f}, data={'id' : usData['ps_id'],'access_pass': '<data access password>'})
        print(str(r.text))
    if os.path.exists(saveFile):
        os.remove(saveFile)
        # Change to hosted url
    return 'https://localhost/images/'+usData['ps_data'].replace(" ", "-")+"_"+usData['ps_usr_data']+".jpg"
        
while True:
    # Change to hosted url, Change data access password
    with urllib.request.urlopen("https://localhost/data.php?access_pass=<data access password>") as url:
        data = json.loads(url.read().decode())
        for usData in data:
            if(usData['ps_name'] == "hp"):
                print (harrayPotterText(usData['ps_data'], usData['ps_usr_data'], '/jsxs/HarryPotter/photoshop.psd', '/jsxs/HarryPotter/harryPotterText.jsx' , '/output/hp'))
        time.sleep(.5)
