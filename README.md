# CopyReddit-SvelteKit-Deno
## Full Stack Reddit Clone (SvelteKit + Deno + PostgreSQL)

This is a full stack web application inspired by Reddit, built using **SvelteKit** for the front end and **Deno** (with the Hono framework) for the back end. The application uses **PostgreSQL** as the primary database and is designed with modular architecture and strong security practices in mind.

The project allows users to register, log in, post questions, and answer existing discussions. It features secure user authentication, role-based access control, and data validation both on the client and server sides.

### Technologies Used

- **Frontend:**  
  - SvelteKit  
  - TailwindCSS for responsive, modern UI  
  - API communication via custom fetch wrappers

- **Backend (Deno + Hono):**  
  - Routing and middleware (Hono)  
  - PostgreSQL database (via postgres.js)  
  - Cookie-based **JWT authentication**  
  - Secure **registration and login** endpoints  
  - **Validation middleware** for request bodies and query params  
  - Structured service and repository layers

- **Database:**  
  - PostgreSQL with SQL-based migrations  
  - Tables for users, questions, roles, and answers  
  - Role-based permissions (admin, user, guest)  
  - Relations between users and their content

- **Security:**  
  - Hashed passwords with bcrypt  
  - JWT tokens stored in HTTP-only cookies  
  - Middleware for protecting routes based on user roles  
  - Input validation and sanitization

- **Testing:**  
  - End-to-end tests using **Playwright**  
  - API route testing with various user flows (register/login/post/etc.)
# QuestionAnswer-SvelteKit-Deno
# QuestionAnswer-SvelteKit-Deno
