module.exports = {
    // operation's method.
    delete: {
      tags: ["Posts"], // operation's tag
      description: "Delete post", // short desc
      operationId: "delete", // unique operation id
      parameters: [
        // expected parameters
        {
          name: "id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/id", // id model
          },
          required: true, // mandatory
          description: "Le post a supprimer", // param desc
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Post deleted successfully", // response desc
        },
        // response code
        404: {
          description: "Post not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };