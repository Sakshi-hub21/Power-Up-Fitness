# Power-Up-Fitness
Power Up Fitness is a website for fitness trainer to schedule the client appointments with manipulation of data of the client.


<img src = "https://i.pinimg.com/564x/d4/ce/f4/d4cef422afbf7b2c1b421cd65e38463b.jpg" />

## Features

* Fitness Trainer cam create account on the website by entering contact details.
* Trainer can add new client details with the appointment date and time.
* Trainer can update the existing client details with its first name , last name, location and appointment date   and time.
* Trainer can delete the existing client details with its all data including appointment date and time.
* Trainer can view all the appointments time and name on the calendar.

## Used Technology

* Frontend:

** React.js: Frontend framework for building the user interface and managing components.
** Libraries:
*** react-datepicker: Used for date picker functionality.
*** react-big-calendar: Utilized for displaying calendar events.
*** moment: A JavaScript library for parsing, validating, manipulating, and formatting dates.
*** axios: HTTP client for making requests to the backend API.

* Backend:

** PHP: Backend scripting language used alongside XAMPP (Apache, MySQL, PHP, and Perl).
** MySQL: Database management system for storing and managing data.
Additional:

* Composer: Dependency management tool for PHP used to install necessary PHP dependencies.

## Extra Packages

* react-datepicker
* react-big-calendar
* moment
* axios

## Backend Information

* Install XAMPP.

<p>XAMPP is a free and open-source software stack that includes Apache, MySQL, PHP, and Perl. To install XAMPP, go to the official website and download the installer for your operating system. Once the installer has been downloaded, run it and follow the on-screen instructions.</p>

![Screenshot (115)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/a0422af1-831c-482c-82a8-637425667cfc)

![Screenshot (116)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/ae23edd5-fa55-44b0-9480-4d6e55da8f8b)

* Install the necessary PHP dependencies using Composer.

<p>Composer is a dependency management tool for PHP. To install the necessary PHP dependencies for your project, open a terminal and navigate to the directory of your PHP application. Then, run the following command:
composer install
</p>

* Create a database for your project.

<p>To create a database for your project, open the MySQL database manager in XAMPP. Then, click the "Create" button to create a new database. Enter a name for the database and click the "Create" button again</p>

* Configure the database connection in your PHP application.

<p>To configure the database connection in your PHP application, open the config/database.php file. Then, update the following values:
</p>  
<p>
'database' => 'my_database_name',
'username' => 'root',
'password' => '',</p>

* Create a backend API.
 <p>The specific steps involved in creating a backend API will vary depending on the framework that you are using. However, in general, you will need to create a set of PHP endpoints that your React JS project can call to perform actions such as fetching data, creating new records, and updating existing records.
 </p>

* Configure the React JS project to use the backend API.
<p>The specific steps involved in configuring a React JS project to use a backend API will vary depending on the framework that you are using. However, in general, you will need to update the React JS project to include the following:
</p>
<p>
The URL of the backend API.
The HTTP methods that are used to call the backend API.
The request and response bodies that are used to communicate with the backend API.</p>

## Usage Intruction

* Website Navigation Video

* Website Home Page

  ![Screenshot (118)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/3d84b616-538b-4b92-8295-1f1275f9ad49)

  <p>This is a home page of the website with contains the our services page, about us page, book an appointment page, login and signup optiions which includes both trainer and client.</p>

* Sevices Page

  ![Screenshot (119)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/86ac520a-7dff-43b6-ae97-293ec93f9dd6)

   <p> This are the services that are provided by the fitness trainer (this are just random services) </p>

* About us Page

  ![Screenshot (120)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/1eabc8db-0b9e-4b98-a51e-9c62f8d9748a)

   <p>This is the about us page which gives the details of the fitness tariner and the website( this is random )</p>


* Book an Appointment Page
  
  ![Screenshot (122)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/84aab1ca-0714-4de0-8b4a-0712f4117f5f)

    <p>This is Book an Appointment page where the user can enter its deatils to get a call ( this is just a frontend part, no information is stored in the database )</p>

  ![Screenshot (123)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/4010eb81-c8c4-413d-bbcc-6650cb3b0e2c)

* SignUp Page for Trainer and Client

  ![Screenshot (124)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/8dcc9e07-97a5-464e-987f-c6fa5e710d4e)

  <p> This is Signup Page for Trainer which includes all the details of the trainer ( this is just a frontend part, no information is stored in the database )</p>


  ![Screenshot (126)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/78940d56-5b90-494c-ba7e-40373330eeee)

  <p> This is Signup Page for Client which includes all the details of the trainer ( this is just a frontend part, no information is stored in the database )</p>

* Login Page for Trainer and Client

  ![Screenshot (127)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/a15b344e-dee9-40c1-8868-063d527e7c3f)

   <p> This is the Admin i.e Trainer Login Page ( this is connected to the database )</p>

  ![Screenshot (128)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/ce7e102f-c4c6-42ee-83a6-4e5ef7b7c9ea)

   <p> This is the Client i.e Trainer Login Page ( this is just a frontend part, no information is stored in the database )</p>

* Fitness Trainer Dashboard

    *  Welcome Page
      
       ![Screenshot (135)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/d186ceb5-ca35-49b5-b3dc-e256159cdee5)

    *  Home Page
      
       ![Screenshot (130)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/dea6a8ef-3d52-4d26-8013-6afa224a0adc)

       <p>This is Home Page of the Fitness Trainer Dashboard which contain the calendar that displays the appointment time and the name of the client.(Connected to database) </p>

    *  Add Cients/ Manipulation of Client Data Page
      
       ![Screenshot (131)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/b1786aa7-d569-45f2-afc1-4861f708ccc9)

       <p>This is Appointement field which contains all the details and the number of clients whose appointments are lined up. (Connected to database) </p>

    *  Add New Client Data Page

       ![Screenshot (132)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/a30e0b5a-62b8-4976-a237-cc3352befdd0)

       <p> This is Add New Client Page where the Trainer can add new client details i.e. first_name, last_name, loaction, appointment date and time.(Connected to database) </p>

    *  Update Existing Client Data Page

       ![Screenshot (134)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/c5bf4e6f-f302-4fd8-86ec-fbe310e12031)

       <p>This is Update Existing Client Page where the Trainer can update client details i.e. first_name, last_name, loaction, appointment date and time.(Connected to database)</p>

    *  Delete Existing Client Data Page
 
       ![Screenshot (136)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/c3306a7c-b809-4c61-83ab-453d7fbbbefa)

       <p>This is Delete Existing Client Page where the Trainer can delete client details i.e. first_name, last_name, loaction, appointment date and time.(Connected to database)</p>

* Client Dashboard
  
 ![Screenshot (137)](https://github.com/Sakshi-hub21/Power-Up-Fitness/assets/82663545/16963c37-5b32-415c-835b-99a02ea1cfc9)

<p>This is just the frontend part of the client dashboard as this website focuses on the fitness trainer dashboard.</p>

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature`)
3. Make your changes and commit them (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature`)
5. Create a Pull Request
