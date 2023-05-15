# PlaceMark

PlaceMark is a web application that allows users to share and explore new places posted by other users. It's built with the MERN stack (MongoDB, Express.js, React, and Node.js), providing a full-stack JavaScript solution for a seamless development experience.

![PlaceMark Screenshot](./public/screenshot.png)

## Features

- Users can create an account and log in.
- Users can share their favorite places by uploading photos and information about the place.
- Users can explore places shared by other users.
- Users can like and comment on shared places.

## Technology Stack

- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB
- State Management: Redux
- Routing: React Router
- Authentication: JSON Web Tokens

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository
   git clone https://github.com/yourusername/placemark.git

2. Install NPM packages
   npm start

3. Enter your MongoDB URI in `config/default.json`

```json
{
  "mongoURI": "<YOUR_MONGO_URI>"
}
```

4.  Start development server
    npm start
