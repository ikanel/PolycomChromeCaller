# PolycomChromeCaller
Select a phone number on the webpage and place a call on your polycom phone.

A convenient Google Chrome Extension for the Polycom phone integration: Select a number on a webpage and call from your Polycom phone. 
Prior to using this extension, you have to enable the push app on your phone. To do so - login into your Polycom Web Configuration Utility. Just type the phone IP address in your browser. 
The default admin password for the utility is 456. Go to the settings/applications/push, enable all push messages, specify username and password. 
Tested on Polycom soundpoint 450 but should work with other Polycom phones as well.
Please go to the extension options prior to use it.

An extension uses a Polycom's XML Push action as described here https://community.polycom.com/t5/VoIP-SIP-Phones/XML-push-action/td-p/30362/page/2 and here https://support.polycom.com/content/dam/polycom-support/products/voice/soundpointip/setup-maintenance/en/web-application-developers-guide-sip-3-1.pdf

Extension relies on crypto-js and reworked js digest authentication from https://github.com/inorganik/digest-auth-request

