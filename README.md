# Visionary AI

Welcome to Visionary AI, an interactive platform designed to explore the capabilities of artificial intelligence through real-time chat interactions and dynamic image generation. Built with Next.js and styled using Tailwind CSS, this project showcases the integration of AI technologies in a user-friendly web application.

## Features

- **AI Chatbot**: Engage in conversations with a state-of-the-art chatbot powered by Groq's AI, designed to provide responsive and intelligent dialogues.
- **Dynamic Image Generation**: Generate images from textual descriptions using the Replicate API, allowing users to see AI's interpretation of creative inputs.
- **Responsive UI**: Experience a seamless interface on any device thanks to a responsive design powered by Tailwind CSS.
- **Interactive Notifications**: Immediate feedback and interaction notifications through react-toastify, enhancing user experience.
- **Email Integration**: Direct communication with the project maintainer via integrated email forms using emailjs-com.

## Technologies

- **Frontend**:
  - **Framework**: Next.js — A React framework for building user interfaces with server-side rendering and generating static websites.
  - **Styling**: Tailwind CSS — A utility-first CSS framework for rapidly building custom designs.
  - **Notifications**: react-toastify — A library for adding customizable and interactive notifications to the web application.
  - **Email Integration**: emailjs-com — Enables sending emails directly from the frontend without needing a backend server.

- **Backend**:
  - **Server**: Node.js with Express.js — Utilized for creating a flexible Node.js web application server framework that can handle multiple different API requests.
  - **APIs**:
    - **Chatbot API**: Groq — Provides a robust interface for integrating advanced chatbot functionalities.
    - **Image Generation API**: Replicate — Used for processing and generating images based on textual descriptions via API calls.

- **Development Tools**:
  - **Version Control**: Git — Used for tracking changes in the source code during development.
  - **Package Management**: npm — Manages project dependencies and packages.

## Getting Started

### Prerequisites

- Node.js and npm (Node package manager)
- Git for cloning the repository

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/YassineDG/VisionaryAI.git
   cd VisionaryAI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to view the app in the browser.

## API Usage Examples

Visionary AI's frontend interacts with a secure backend providing two main functionalities:

**API Base URL**: https://visionaryaibackend-ngy0.onrender.com/

### Chatbot API

- **Endpoint:** `https://visionaryaibackend-ngy0.onrender.com/api/chat/generate`
- **Method:** POST
- **Request Body Example:**

  ```json
  {
    "modelName": "llama-2-70b-chat", // Alternative: "mistral-8x7b-instruct-v0.1"
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ]
  }
  ```

### Image Generation API

- **Endpoint:** `https://visionaryaibackend-ngy0.onrender.com/api/images/generate`
- **Method:** POST
- **Request Body Example:**

   ```json
  
    {
  "prompt": "A beautiful landscape painting",
  "modelName": "playground-v2", // Alternatives: "kandinsky-2.2"
  "aspectRatio": "16:9" // Other options: 9:16, 1:1

  }
  ```

## Testing

You can test the API endpoints using tools like Postman or by integrating them directly into the frontend application.

## Note

This API is strictly for educational and testing purposes. Please ensure that you do not use this for commercial purposes without proper authorization.

## Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Use this section to list resources you find helpful and would like to give credit to.
