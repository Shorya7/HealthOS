// API.js

import axios from "axios";

const API = {
  baseURL: "http://127.0.0.1:8000/api", // Replace with your backend API URL

  GetChatbotResponse: async message => {
    try {
      let botResponse = '';

      if (message.trim().toLowerCase() === "hi") {
        botResponse = "Hello Health User"; 
      } else {
        const response = await axios.post(`${API.baseURL}/get_answer`, {
          question: message,
        });

        if (response.status === 200) {
          console.log(response.data.response);botResponse = response.data.response // Get response from the backend
       
        } else {
          throw new Error(`Received ${response.status} status`);
        }
      }

      return botResponse;
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return `Error: ${error.message || 'Unable to fetch response'}`;
    }
  },
};

export default API;
