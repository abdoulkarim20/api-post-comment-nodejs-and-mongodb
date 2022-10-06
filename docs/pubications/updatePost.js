module.exports = {
    // operation's method
    put: {
      tags: ["Posts"], // operation's tag
      description: "Update posts", // short desc
      operationId: "update", // unique operation id
      parameters: [
        // expected params
        {
          name: "id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/id", // id model
          },
          required: true, // mandatory
          description: "Id de la publication a modifier", // short desc.
        },
      ],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/champsSaisie", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "publication updated succefull", // response desc.
        },
        // response code
        404: {
          description: "Post not found", // response desc.
        },
        // response code
        500: {
          description: "Server error", // response desc.
        },
      },
    },
  };
  