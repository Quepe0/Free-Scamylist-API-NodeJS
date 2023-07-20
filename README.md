# Scamalytics IP Checker API

This is a simple Node.js application that provides an API to check the reputation of an IP address using the Scamalytics service. The API retrieves information about an IP address, such as its reputation score and risk level.

## Prerequisites

Before running the application, you need to have the following dependencies installed:

- Node.js
- NPM (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Quepe0/Free-Scamylist-API-NodeJS.git
cd Free-Scamylist-API-NodeJS
npm install
node app.js
```
The server will start on port 3000, and you should see the message: [SCAMYLYTICS] | Free API | Unlimited Requests | Running on port: 3000

Access the API:
You can use any API client (e.g., Postman, cURL) to interact with the API.

Endpoint: http://localhost:3000/check

API Endpoint - Check IP Reputation
Endpoint: GET /check

Parameters:

ip: The IP address you want to check.
Example Request:
```bash
GET http://localhost:3000/check?ip=123.456.789.0
```

Example Response (Success):
```json
{
    "success": true,
    "status": 200,
    "ip": "123.456.789.0",
    "score": 85,
    "risk": "Medium"
}
```

Example Response (Error):
```json
{
    "success": false,
    "status": 500,
    "method": "GET",
    "message": "IP address not found or an error occurred"
}
```
