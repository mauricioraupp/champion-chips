# Championchips

A dynamic web application designed for interactive tournaments management. This project provides a robust foundation for handling user authentication, database interactions, and file uploads within a modern web environment.
## Features

This application includes a suite of functionalities:

*   **User Authentication**: Secure user sign-up and login capabilities, powered by NextAuth.
*   **Data Management**: Integration with a database for efficient storage and retrieval of application data.
*   **Interactive User Interface**: A responsive front-end built with modern component-based architecture for dynamic content display, including interactive elements like modals, cards and tables.
*   **File Uploads**: Functionality to handle file uploads, enabling users to add and manage various types of content, powered by Uploadthing.
*   **API Endpoints & Actions**: Structured API routes for request processing and security and Actions for data interaction.
*   **Environment Configuration**: Utilizes environment variables for secure and flexible application configuration.
*   **Type Safety**: Developed with TypeScript, ensuring robust code quality and maintainability through static type checking.
*   **Continuous Integration/Deployment**: Automated workflows for building, testing, and deploying the application, maintaining consistent quality and quick delivery.
## Tech Stack

* **Client:** Next, React, TypeScript, Tailwind

* **Server:** Next, Prisma ORM, PostgreSQL, UploadThing


## Screenshots

![App Screenshot](/public/printone.png)
![App Screenshot](/public/printtwo.png)


## Installation Guide

To get `champion-chips` up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

*   Node.js
*   npm or Yarn package manager

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/mauricioraupp/champion-chips.git
    cd champion-chips
    ```

2.  **Install Dependencies**

    Choose your preferred package manager:
    
    Using npm:
    ```bash
    npm install
    ```
    Using Yarn:
    ```bash
    yarn install
    ```

3.  **Environment Configuration**

    Create a `.env` file in the root of the project by copying the example:
    ```bash
    cp .env.example .env
    ```
    Open the newly created `.env` file and populate the necessary environment variables (e.g., database connection strings, authentication secrets).

4.  **Database Setup**

    Initialize your database and run migrations using Prisma:
    ```bash
    npx prisma migrate dev --name init
    ```
    Generate the required files into your node_modules directory:
    ```bash
    npx prisma generate
    ```
    This command will apply your database schema and seed data if configured.

5.  **Run the Development Server**

    Start the application in development mode:
    
    Using npm:
    ```bash
    npm run dev
    ```
    Using Yarn:
    ```bash
    yarn dev
    ```
    The application will typically be accessible at `http://localhost:3000`.
