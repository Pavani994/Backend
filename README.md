# HTTP Request Lifecycle

## 1. What Is the Request Lifecycle?

The request lifecycle describes the steps that occur when a user enters a URL in a browser and receives a response from a server.

## 2. Steps in the Request Lifecycle

### Step 1: Enter a URL
The user enters a URL, such as `https://example.com`, in the browser.

### Step 2: DNS Resolution
DNS (Domain Name System) translates the domain name into an IP address so the browser can locate the server.

### Step 3: Connect to the Server
The browser establishes a connection to the server. For HTTPS websites, a TLS handshake helps establish a secure connection.

### Step 4: Send an HTTP Request
The browser sends an HTTP request to the server.

An HTTP request contains:
- **Method:** The action, such as GET or POST.
- **URL/Path:** The requested resource.
- **Headers:** Additional information about the request.
- **Body:** Optional data sent with the request, commonly used with POST or PUT.

### Step 5: Backend Processing
The backend receives the request and processes it. It may validate data, execute business logic, or communicate with a database.

### Step 6: Send an HTTP Response
The server sends an HTTP response to the browser.

An HTTP response contains:
- **Status Code:** Indicates the result, such as `200 OK` or `404 Not Found`.
- **Headers:** Information about the response.
- **Body:** The returned data, HTML, or other content.

### Step 7: Browser Renders the Response
The browser processes the response and displays the page or data to the user.

## 3. Example: Opening a Website

When a user opens `https://example.com`:

1. The browser reads the URL.
2. DNS resolves the domain name to an IP address if needed.
3. The browser connects securely to the server.
4. The browser sends an HTTP GET request.
5. The server processes the request.
6. The server returns an HTTP response, often with a `200 OK` status.
7. The browser displays the returned content.

## 4. Important HTTP Methods

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Submit data or create a resource |
| PUT | Replace or update a resource |
| DELETE | Delete a resource |

## 5. Common HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 OK | Request succeeded |
| 201 Created | Resource created successfully |
| 400 Bad Request | Invalid request |
| 401 Unauthorized | Authentication is required or invalid |
| 403 Forbidden | Access is not allowed |
| 404 Not Found | Resource not found |
| 500 Internal Server Error | Server encountered an error |

## 6. Key Takeaway

The basic request lifecycle is:

**Browser → DNS → Server Connection → HTTP Request → Backend Processing → HTTP Response → Browser**

Understanding this process is an important foundation for backend development.
