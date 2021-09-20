import fs from "fs";

export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Yee haw!",
    headers: {
      "Content-Type": "text/html",
    },
  };
};
