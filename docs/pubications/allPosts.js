module.exports = {
    /*La methode d'operations*/
    get: {
      tags: ["Posts"], // operation's tag.
      description: "get all publications",
      operationId: "getTodos", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Toutes les publications", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Posts", // Post model
              },
            },
          },
        },
      },
    },
  };