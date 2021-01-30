# react-employee-directory
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

* View the [Github Repo](https://github.com/girmaD/react-employee-directory)
* View the [Deployed App link](https://girmad.github.io/react-employee-directory/)


## Description
  This is a react application that data from [Random User API](https://randomuser.me/). It populates the data in a table when the page loads. A user can sort the data either by ascending or descending order by clicks on the name column of the table. A user has also the option to filter the data by name by typing on the search input field. Each character typed filters the data. Further, a user can filter the data by typing on the search input field and click enter on keyboard.

  The app uses stateful class component to update state variables on page load, sort and filter. Those state variables and functions are passes as props down the stream to their respective components.
    

## Table Of Contents 
* [Installation Instructions](#Installation-Instructions)
* [How To Use The App](#How-To-Use-The-App)
* [Contributing Guidelines](#Contributing-Guidelines)
* [Test Information](#Test-Information)
* [License](#License)
* [Questions](#Questions)


## Installation Instructions

 * fork and use it.
 * Don't forget to install all the modules this app depends on.
 * npm i -> will install all the dependecies

## How To Use The App
- If you fork it, launch the app on the terminal - using (npm start) or launch it on gh-pages using the provided link.
- The app will display unsorted 75 employees in a table.
- If a user wishes to sort employees, click on name on the table head. Clicks will toggle between ascending and descending order. It starts with ascending on the first click and toggle on each click after wards.
- If a user wishes to filter the data, type on the search box on top of the table. Each character entered on the search box will filter the data by name.
- Ones a user types all filtering word on the search box, click enter on the keyboard and that will clear the search box and displayed the filtered data
- To get new data, simply refresh the page, that will make a new API call and fetches in new batch of 75 employees.

Here is a screen shot of unsorted data

![Alt text](./public/assets/mainPage.png)


A screen shot of sorted employees by first name by asceding order
![Alt text](./public/assets/ascending.png) 


A screen shot of sorted employees by first name by desceding order
![Alt text](./public/assets/descending.png)


A screen shot of filtered employees by their name 
![Alt text](./public/assets/filtered.png)

## Contributing Guidelines
 * contact me on the email provided below

## Test Information
  * No test specified

## License

 * MIT

## Questions

Should you have any questions about this project,
  * you can reach me through email: [girma.derib@gmail.com](mailto:girma.derib@gmail.com) 
  * or visit my [Github Profile](https://github.com/girmaD) for more information.
