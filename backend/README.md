
# User Directory - Backend

## Overview
The backend of the User Directory App is built using Node.js and Express. It provides an API for fetching user data, searching users, and filtering users by nationality.


## Prerequisites
- Node.js installed on your system
- npm (Node Package Manager) installed
## Installation

Clone the repository or download the source code.

```bash
git clone https://github.com/saiprasadreddy33/user-directory-search.git
```
Navigate to the project directory:
```bash
 cd user-directory-backend 
```
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

    
## API Reference

#### Get all items

```http
  GET /api/users
```

| Parameter | Response     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | ` An array of user objects.` |Fetches all the users from the users.json file. |

#### Get item

```http
  GET /api/search?query=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string(query)` | Searches for users based on the provided query parameter. |


```http
  GET /api/filter?nationality=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string(nationality )` | Filters users based on the provided nationality parameter. |


## Configuration

```
The backend uses a users.json file to store the user data. Make sure the users.json file is present in the backend directory and contains the necessary user data in the correct format.
```
## Tech Stack

**Server:** 
- Node.js
- Express
- cors 
- fs



