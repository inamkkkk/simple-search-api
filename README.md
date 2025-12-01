# Simple Search API

A simple Node.js API that allows you to search a collection of data.

## Features

*   Search functionality with keyword matching
*   Data stored in memory (for simplicity)
*   API endpoints for searching

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd <project_directory>
    

3.  Install dependencies:

    
    npm install
    

## Usage

1.  Start the server:

    
    npm start
    

2.  Access the API endpoints:

    *   `GET /api/search?q=<search_query>`: Searches the data for the given query and returns the results.

## Example


curl http://localhost:3000/api/search?q=apple


## API Endpoints

*   `GET /api/search?q=<search_query>`
    *   **Description:** Searches the data based on the provided query.
    *   **Query Parameters:**
        *   `q` (required): The search query string.
    *   **Response:** A JSON array of matching data items.

## Data Structure

The data is stored in memory as an array of objects. Each object has an `id` and a `name` property.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.
