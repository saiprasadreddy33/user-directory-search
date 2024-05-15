
# User Directory - Front End

The User Directory Frontend is a React-based application that allows users to search, filter, and view a list of users. It provides a clean and responsive interface for interacting with the user data


## Features

- Search users by name or email
- Filter users by nationality
- View detailed user information in a modal popup
- Responsive design for optimal viewing on various devices


## Tech Stack

**Client:** 
- React
- React Router
- Axios 
- React Icons 
- CSS Modules




## Installation

Clone the repository


```bash
git clone https://github.com/saiprasadreddy33/user-directory-search.git
```
Navigate to the project directory:
```bash
 cd user-directory-frontend
```
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

    
## Usage

```
1. Upon launching the application, you will see a list of users.
2. Use the search bar to search for users by name or email.
3. Click on the filter icon to open the filters panel and select a nationality to filter the users.
4. Click on a user's card to open a modal popup displaying their detailed information.
5. Click on the close button or outside the modal to close it.
6. Click on the reset button to clear the search and filters and display all users.
```


## API Reference

#### Get all items

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. ${API_URL}/users |

#### Get item

```http
  GET /api/searchUsers/${query}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. {API_URL}/search?query=${query} |


## Configuration

```
The frontend application is configured to communicate with a backend API. Make sure the backend server is running and accessible for the frontend to fetch user data.
You can configure the API endpoint by modifying the utils/api.js file and updating the baseURL constant with the appropriate URL.
```
