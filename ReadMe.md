This project was build using this boilerplate : https://github.com/dibosh/simple-node-server


To start this project on a windows PC simply download the project then :
- npm install 
- npm start  

If you are not using a windows machine then :
- npm install
- node index.js 


Description : 
It is a Car Parking system . It has  dedicated space for car parking and it has different lots; every lot has certain number of empty parking slots. Someone sits at the main entrance of all these lots; which is called the control tower. From control tower we actually find out which parking lot has empty slot and assign the nearest parking lot to a car. When the car is going out, We also charge the car based on the time it was parked there for. For every first 3 hours, you charge a constant amount of 20BDT. But for every other consecutive hour we charge another 5BDT. 


MongoDB Model : 

![Loading MongoDB Model Screenshot ........ ](https://github.com/smizibon/car-parking/blob/master/model.PNG "MongoDB Model")


Test Out the API : 

1 .  Make a post request to the API at : http://localhost:3000/api/lot with body of JSon that contatains the Capacity of the lot 
![Loading Creating a Lot Screenshot........ ](https://github.com/smizibon/car-parking/blob/master/car%20parking%20%20API/1.%20create%20a%20parking%20lot.PNG "Creating a lot")

2 . To park a Car in the nearest spot we only need to send a Post request of the car serial number @ http://localhost:3000/api/slot/park . 
![Loading Parking a car Screenshot........ ](https://github.com/smizibon/car-parking/blob/master/car%20parking%20%20API/2%20.%20park%20a%20car%20in%20slot.PNG "Parking a Vehicle|| car")


3 . We can check how much is bill of a car is its lisence number The response number is to be valued as BDT. To get it we send a get request @ http://localhost:3000/api/slot/billByLicense with params  license_no : 
![Loading Get bill by lisence number Screenshot........ ](https://github.com/smizibon/car-parking/blob/master/car%20parking%20%20API/3%20.%20get%20bill%20by%20lisence%20number.PNG "Bill By Lisence number")

4 . We can check the bill by the slot and lot no as well . The response number is to be valued as BDT . To get the bill by slot and lot no we send a get request to http://localhost:3000/api/slot/billBySlotLot with params slot_no and lot_no . 
![Loading Bill by Slot and Lot no Screenshot........ ](https://github.com/smizibon/car-parking/blob/master/car%20parking%20%20API/4%20get%20bill%20by%20slot%20and%20Lot.PNG "Bill by Slot and Lot no")


5 . When we unpark a car it will provide us with the  final bill . To unpark a car We need to send a post request with the lisence_no of the car to http://localhost:3000/api/slot/unpark . 
![Loading Unpark a car Screenshot ........ ](https://github.com/smizibon/car-parking/blob/master/car%20parking%20%20API/5%20unpark%20a%20car.PNG "Unpark a car")
