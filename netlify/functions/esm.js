import fs from "fs";

export const handler = async (event, context) => {
  await fs.stat("./dist/index.js");

  return {
    statusCode: 200,
    body: "Yee haw!",
    headers: {
      "Content-Type": "text/html",
    },
  };
};
