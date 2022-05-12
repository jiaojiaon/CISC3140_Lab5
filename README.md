# CISC3140_Lab5
## Description 
The report show aggregate values that are computed from the CSV file provided by
```sh
git submodule add -f https://gist.github.com/d66a59b6db4e59c16efd4c42ad411f8e.git data
```
Use the backend API created in [CISC3140_Lab4](https://github.com/jiaojiaon/CISC3140_Lab4.git) to view data that is stored in a database as well as update data.

## Objective

The objective of this lab is to build a front-end that complements the back-end that you created in Lab 4. The lab will use a combination of HTML/CSS/JS users to view data that is stored in a database as well as update data.

## Requirements:

My web application support the following features:

a. Viewing data that is in the database (use tables)

- Display results of select all - i.e., all cars present in the database, winning cars, car owners’ contact information, showing results per class

- Display data that comes as a collection (i.e. requires iterating through multiple records) and also as a single record

b. Inserting new data record(s)

-  Support creating new record in database table(s). Aim for adding record to at least two different existing tables for more practice.

c. Updating data records

- Support updating records in database table(s). Aim for at least two different use cases (i.e. updating email address, etc ).

## Dependencies
 
 - [CISC3140_Lab4](https://github.com/jiaojiaon/CISC3140_Lab4.git)
 - axios
 - bootstrap
 - gh-pages
 - React
 - react-bootstrap
 - react-dom
 - react-router
 - react-router-dom
 - react-scripts
 - web-vitals

## Installation

You must have the following installed:

- npm install axios 
- npm install bootstrap
- npm install pg
- npm install router 
- npm install router-dom

## Reference 
- [CISC3140_lab5_files](https://github.com/AdinaScheinfeld/CISC3140.git) by our classmate Adina help me connect backend to frontend 
- [react-creating-a-table](https://github.com/chrisblakely01/react-creating-a-table.git) help me create a table in react 
- [Fullstack-CRUD-Application-Frontend](https://github.com/AdaMaldonado/Fullstack-CRUD-Application-Frontend.git) help me create a CSS style
- [example-create-react-app-express](https://github.com/esausilva/example-create-react-app-express.git) help me start create a react app using express

## Storyboarding
Cars table: 
- Viewing all cars: Click on 'Cars' tab
- Adding a new car: Click on 'Cars' navigation tab  -> Click on 'Add new car' -> Fill in form, click submit -> Click again on 'Cars' navigation tab -> scroll down the page to see the new added car
- Updating car: Click on 'Cars' navigation tab  -> Click on 'Update car' -> Fill in form, click submit -> Click again on 'Cars' navigation tab -> scroll down the page to see the update car

Owners table:
- Viewing all owners: Click on 'Owners' navigation tab
- Adding a new owner: Click on 'Owners' navigation tab  -> Click on 'Add new owner' -> Fill in form, click submit -> Click again on 'Owners' navigation tab -> scroll down the page to see the new added owner
- Updating owner: Click on 'Owner' navigation tab  -> Click on 'Update owner' -> Fill in form, click submit -> Click again on 'Owners' navigation tab -> scroll down the page to see the update owner

## Setup
1. Sign up for a GitHub account if you don't have one. Set up your SSH keys with github.
2. Clone this repository: `git clone git@github.com:jiaojiaon/CISC3140_Lab5.git` to your machine to get a copy.
3. Also clone CISC3140_Lab4 repository and follow the `setup` part in readme to start: `git clone git@github.com:jiaojiaon/CISC3140_Lab4.git`
4. Make sure CISC3140_Lab4 repository also open and get connect to the SQLite database
5. Back to this repository move into the project's root directory with `cd CISC3140_Lab4`
6. Then move into the client folder with `cd client`
7. Run using the command below to connect the backend 
```sh
npm start
```

## Bug
As you open the web and click on the Cars or Owners tab, you may see blank rows inside the table. That's because when I used postman to test my API, there are some mistakes happen so it added blank to the table.

Since I don't have time to work on the delete part, I can't delete the blank rows. 

