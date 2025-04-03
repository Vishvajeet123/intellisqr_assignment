
**1.  `backend/README.md`**

```markdown
    # Backend Setup Instructions

    This directory contains the backend code for the user authentication application. It is built using Node.js, TypeScript, Express.js, and Prisma.

    ## Prerequisites

    * Node.js (version X.X.X or later)
    * npm (version X.X.X or later) or Yarn (version X.X.X or later)
    * PostgreSQL (version X.X or later)

    ## Setup

    1.  **Clone the repository:**

        ```bash
        git clone <your_repository_url>
        cd backend
        ```

    2.  **Install dependencies:**

        ```bash
        npm install # or yarn install
        ```

    3.  **Set up the database:**

        * Ensure you have PostgreSQL installed and running.
        * Create a new PostgreSQL database (e.g., `auth_db`). You can use a tool like pgAdmin or the `psql` command-line tool.
        * Create a `.env` file in the `backend` directory and add your database connection string:

            ```
            DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database_name>"
            ```

            * Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database_name>` with your actual database credentials.
            * **Important:** Never commit your `.env` file to version control for security reasons. Add it to your `.gitignore` file.

    4.  **Run Prisma migrations:**

        ```bash
        npx prisma migrate dev --name init
        npx prisma generate
        ```

        * This will create the necessary database tables based on the `schema.prisma` file.

    ## Running the Backend

    ```bash
    npm run dev # or yarn dev (if you have a 'dev' script defined in package.json, e.g., "dev": "ts-node-dev src/index.ts")
    ```

    * The server will start running on `http://localhost:3001` (or the port you configured).

    ## API Endpoints

    * `POST /api/auth/register`:  Register a new user (requires `email` and `password` in the request body).
    * `POST /api/auth/login`: Log in a user (requires `email` and `password` in the request body).

    ## Error Handling

    The backend includes error handling to provide informative responses to the frontend. It specifically handles duplicate email errors during registration.

    ## Code Structure

    ```
    backend/
    ├── prisma/
    │   ├── schema.prisma   // Prisma schema definition
    │   └── migrations/     // Database migrations
    ├── src/
    │   ├── controllers/
    │   │   └── authController.js // Handles authentication logic
    │   ├── routes/
    │   │   └── authRoutes.js     // Defines API routes
    │   ├── middleware/
    │   │   └── errorHandler.js   // Handles errors
    │   ├── utils/
    │   │   └── hashPassword.js   // Password hashing utility
    │   └── index.js          // Entry point of the backend
    ├── package.json
    ├── tsconfig.json
    ```

    ## Technologies Used

    * Node.js
    * TypeScript
    * Express.js
    * Prisma
    * PostgreSQL
    * bcrypt (for password hashing)
    * cors (for Cross-Origin Resource Sharing - for development)
    * dotenv (for managing environment variables)
    ```

**2.  `frontend/README.md`**

```markdown
    # Frontend Setup Instructions

    This directory contains the frontend code for the user authentication application. It is built using React, TypeScript, React Hook Form, Zod, and React Query.

    ## Prerequisites

    * Node.js (version X.X.X or later)
    * npm (version X.X.X or later) or Yarn (version X.X.X or later)

    ## Setup

    1.  **Clone the repository:**

        ```bash
        git clone <your_repository_url>
        cd frontend
        ```

    2.  **Install dependencies:**

        ```bash
        npm install # or yarn install
        ```

    3.  **Start the development server:**

        ```bash
        npm start # or yarn start
        ```

        * This will start the React development server, usually running on `http://localhost:3000`.

    ## Connecting to the Backend

    * The frontend is configured to communicate with the backend API at `http://localhost:3001/api/auth`.
    * Ensure that your backend server is running at this URL. If you have configured a different port for your backend, update the `API_URL` in `frontend/src/services/authService.ts` accordingly:

        ```typescript
        const API_URL = 'http://localhost:3001/api/auth'; //  Backend URL
        ```

    ## Functionality

    * The application provides user registration and login functionality.
    * Users can switch between the registration and login forms.
    * Form input validation is handled using Zod.
    * API requests are managed using React Query.
    * Error messages from the backend are displayed to the user.

    ## Code Structure

    ```
    frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── LoginForm.tsx      // Login/Register form component
    │   │   └── InputField.tsx     // Reusable input component
    │   ├── hooks/
    │   │   └── useAuth.ts        // Custom hook for authentication logic
    │   ├── services/
    │   │   └── authService.ts     // API service for authentication
    │   ├── utils/
    │   │   └── validationSchema.ts // Zod validation schema
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── ... (other default Create React App files)
    ├── package.json
    ├── tsconfig.json
    ```

    ## Technologies Used

    * React
    * TypeScript
    * React Hook Form
    * Zod
    * React Query
    * fetch (for API requests)
    ```

**Key Improvements in These READMEs**

* **Clarity and Conciseness:** The instructions are clear and to the point.
* **Detailed Setup:** They provide step-by-step guidance, including database setup for the backend.
* **Code Structure Overview:** They explain the organization of the codebase, which is helpful for reviewers and other developers.
* **Technology Stack:** They list the technologies used in each part of the application.
* **API Endpoints:** The backend README explicitly documents the available API endpoints.
* **Frontend-Backend Connection:** The frontend README emphasizes the importance of configuring the `API_URL` correctly.
* **Error Handling Mention:** Both READMEs highlight the error handling implemented in the application.
* **Adherence to Assignment:** They directly address the requirements of the assignment, such as TypeScript usage, Zod for validation, etc.
* **Security Note:** The backend README includes a crucial reminder about not committing the `.env` file.

These READMEs will make it much easier for someone to understand, set up, and run your application, which is a key part of the assignment evaluation.
