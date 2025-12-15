# Product Management Dashboard

A product management dashboard built with ***React*** that includes authentication, product management, modals, form validation, and API connectivity.

This project was developed as part of the [Botostart Bootcamp](https://botostart.ir/).

> __The backend API used in this project was provided as part of the ***Botostart Bootcamp***. My primary focus in this project was on frontend architecture, state management, React Query integration, and user experience.__

___

## Notes
- This project focuses on frontend architecture and best practices
- Backend service must be running separately
- Designed with scalability and maintainability in mind

## Features

### Authentication
*   User login and registration
*   Protected Routes
*   Store token in cookie

### Products Management
*   Show product list
*   Add, edit, and delete product functionalities
*   Pagination

### State & Data Management
*   **React Query**: Fetch, create, update, delete products; cache, invalidate, loading state management.
*   **Context API**: Auth and Modal management.

### Forms & Validation
*   React Hook Form integration
*   Zod & Yup Schema Validation
*   Persian error messages

### UI & UX
*   Error Boundaries
*   Custom Skeleton Loading
*   Global Modal System
*   Skeleton Loading
*   Toast Notifications
*   Persian fonts (Vazirmatn / Kalameh)

___

## Tech Stack
*   React + Vite
*   React Router
*   [@tanstack/react-query](https://tanstack.com/query)
*   [React Hook Form](https://react-hook-form.com)
*   [Zod](https://zod.dev)
*   [Yup](https://github.com/jquense/yup)
*   Axios
*   React Toastify
*   Custom Skeleton Components (for loading states)
*   CSS Modules
*   Context API

___

## Installation and Setup

> ⚠️ **Important:**  This project depends on an external backend REST API. You must run the backend server separately before starting the frontend application.

### Requirements & Backend Setup

1.  **Clone and run the API repository:**
    [https://github.com/Reyhaneh-Nasiri/reyhaneh_nasiri_week19_api](https://github.com/Reyhaneh-Nasiri/reyhaneh_nasiri_week19_api)

    ```bash
    git clone https://github.com/Reyhaneh-Nasiri/reyhaneh_nasiri_week19_api.git
    cd warehouse-api
    npm install
    npm start
    ```
    The API base URL should be running at `http://localhost:3000`.

### Frontend Installation

1.  **Clone this repository:**
    ```bash
    git clone <repo-url>
    cd directory
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    *   Create a `.env` file in the root directory.
    *   Add the API URL variable:
        ```env
        VITE_API_URL=http://localhost:3000
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Build the project (for production):**
    ```bash
    npm run build
    # serve
    ```

___

## API Documentation

This project consumes the API hosted at `http://localhost:3000` (when run locally).

### Authentication Details
*   Login returns a JWT token.
*   The token is stored in a cookie.
*   The token is sent via the `Authorization` header for protected routes.

### Endpoints
*   **Auth**
    *   `POST /auth/login`
    *   `POST /auth/register`

*   **Products**
    *   `GET /products?page=1&limit=10`
    *   `POST /products`
    *   `PUT /products/:id`
    *   `DELETE /products/:id`

### Validation Rules (Products)
*   `name`: Product name must be at least 2 letters.
*   `count`: Integer value, must be `>= 1`.
*   `price`: Value between 1000 and 10,000,000 Tomans.

___

## Project Structure

This project focuses on frontend architecture and best practices, designed with scalability and maintainability in mind. The core API interaction logic resides in the `./src/services` directory.

```text
───src
    ├───assets
    │   ├───fonts
    │   │   └───vazirmatn
    │   ├───icons
    │   └───images
    ├───components
    │   ├───AuthForm
    │   ├───layout
    │   ├───products
    │   │   ├───modals
    │   │   ├───ProductForm
    │   │   │   ├───ProductFormActions
    │   │   │   └───ProductFormField
    │   │   ├───ProductItem
    │   │   ├───ProductPagination
    │   │   ├───ProductsHeader
    │   │   └───ProductsList
    │   ├───SearchBar
    │   └───ui
    │       ├───ErrorBoundaryDisplay
    │       └───Modal
    ├───contexts
    │   ├───auth
    │   └───modal
    ├───hooks
    │   ├───auth
    │   └───react-query
    │       └───products
    ├───lip
    ├───pages
    ├───router
    ├───services
    ├───skeletons
    ├───styles
    │   └───core
    └───utils
        ├───accessibility
        └───validators
```

## Future Improvements
- Dark Mode
- Internationalization (i18n)
- Unit & Integration Tests
- Responsive Enhancements

