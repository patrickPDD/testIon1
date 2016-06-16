# testIon1
first attempt at ion test

I have decided to create this application with angularJS for several reasons
1. Angular has a built in http service that will facilitate bringing back the json from the libraries.io api
2. I can use Angular to filter the returned data and list it in decending order by date
3. It is the client side framework I know best

The angular applicaton will include an index, a displayVesions template, a displayVerssions 
directive, controller and a service that will fetch the json file. 

UPDATE

This leaves a lott to be desired however this was a good exercise for me. 

Note the api is reached 

6/16

-App now brings back versions most recent first
-text appears when app not found
-Table date formatted 

Remaining issues
- Table appears sans data before search is done
- if data array less then five extra rows still show 
- Table rows from previous search linger when new search comes back empty
