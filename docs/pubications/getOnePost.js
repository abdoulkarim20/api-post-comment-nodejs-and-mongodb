module.exports = {
    get: {
      tags: ["Posts"], 
      description: "get one publication",
      operationId: "getPost",
      parameters: [
        // expected params.
        {
          name: "id",
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id",
          },
          required: true,
          description: "publication id",
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "La publication correspondante",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Posts",
              },
            },
          },
        },
        // response code
        404: {
          description: "Post is not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
      },
    },
  };