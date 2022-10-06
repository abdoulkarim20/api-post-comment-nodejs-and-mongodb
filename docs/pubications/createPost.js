module.exports = {
    // operation's method
    post: {
      tags: ["Posts"],
      description: "Creer une publication", // short desc
      operationId: "CreatPublication", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Resultat", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Post creer avec success", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };