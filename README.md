# **FinAlliance**

## **Introduction**

**FinAlliance** is a comprehensive and secure web application designed exclusively for bank managers to efficiently manage and oversee customer banking information. This application allows authorized bank managers to access critical customer details such as loans, CIBIL scores, and recent transactions while ensuring that only verified managers have access to this sensitive data. With a strong emphasis on user-friendliness, data security, and functionality, FinAlliance streamlines customer data handling and improves banking workflows.

The **FinAlliance** portal provides a safe environment for managers to:

- View customer banking information by verifying PAN and Aadhar numbers.
- Access detailed information on loans, CIBIL scores, and recent transactions.
- Print customer information directly from the web portal for record-keeping.

---
## **Project Preview**

FinAlliance Demo: https://vishalsharma.site/finalliance/

FinAlliance Intro: https://youtu.be/XkV_IAOVEAc

FinAlliance Gallery: https://drive.google.com/drive/folders/1K9rRNSM9rg03C7bk61TF_LeLgEWoHZja?usp=sharing

---

## **Features**

- **Bank Manager Authentication:** Ensures only authorized users can log in and access customer information.
- **Customer Data Overview:** Managers can retrieve essential customer details like PAN, Aadhar, loans, CIBIL score, and recent transactions.
- **Print Functionality:** Ability to generate a hard copy of customer details in a clean, printable format.
- **Secure and Efficient:** Built with a robust authentication system to protect sensitive data.

---

## **Technologies Used**

FinAlliance is built using modern, efficient technologies to ensure smooth operation and scalability:

- **Backend**: Node.js and Express.js for building a fast and secure web server.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Templating Engine**: EJS (Embedded JavaScript) for dynamic page rendering.
- **Additional Packages**: method-override for HTTP method management and mongoose for MongoDB object modeling.

---

## **How to Set Up and Use FinAlliance**

Follow the steps below to get this project up and running on your local machine.

### **1. Clone the Repository**

First, you need to clone the repository to your local machine:

```blash
git clone https://github.com/vishal-r-sharma/finalliance.git
cd finalliance
```

### **2. Install Dependencies**

Once inside the project folder, install the required packages:

```blash
npm install
```
This command installs all the necessary dependencies listed in the package.json file.

### **3. Configure Environment Variables**

In the root directory, create a .env file to configure the application’s environment variables:

```plaintext
PORT=8080
MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_session_secret
```
Replace your_mongo_connection_string with your MongoDB connection string and your_session_secret with a secure session key of your choice.

### **4. Run MongoDB**

Ensure that MongoDB is running on your machine or use a cloud service like MongoDB Atlas to host your database.

### **5. Start the Application**

Start the server using the command:

```blash
npm start
```
The application will be live at http://localhost:8080. You can access the login page and begin using the system.

---

### **Use the Application**

Once your application is running, follow these steps to use FinAlliance:

1. **Open Your Browser**: Go to [http://localhost:5000](http://localhost:5000).

2. **Login**: 
   - Enter your bank manager credentials (username and password) to log in.

3. **Access the Dashboard**: 
   - After logging in, you'll be taken to the dashboard, where you can see a summary of manager information.

4. **Search for Customers**: 
   - To view customer details, enter the PAN or Aadhar number in the search bar.

5. **View Customer Information**: 
   - Click on a customer’s name to see detailed information, including loans, CIBIL score, and recent transactions.

6. **Print Customer Details**: 
   - If you need a hard copy of the customer’s information, click the print button to generate a printable version.

7. **Logout**: 
   - When you're done, don’t forget to log out by clicking the logout link.

