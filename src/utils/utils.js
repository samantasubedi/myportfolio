import axios from "axios";
export const sendMessage = async (name, email, message) => {
  const data = {
    content:
      "Hello samanta, Someone wants to contact you. Here are the details",
    username: "Contact Pinger Bot",
    embeds: [
      {
        color: 0x00bfff,
        fields: [
          {
            name: "Name",
            value: name,
          },
          {
            name: "Email",
            value: email,
          },
          {
            name: "Message",
            value: message,
          },
        ],
        footer: {
          text: "Portfolio",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
  const webhook = import.meta.env.VITE_WEBHOOK;
  const response = await axios.post(webhook, data);
  return response.data;
};
