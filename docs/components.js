module.exports = {
    components: {
        schemas: {
            id: {
                type: "string",
                description: "Identifiant de la publications",
                example: "cd46d6hdggdj4ndg",
            },
            /*Post model*/
            Posts: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Identifiant de la publication",
                        example: "cd46d6hdggdj4ndg",
                    },
                    auteur: {
                        type: "string",
                        description: "nom du auteur",
                        example: "Abdoul Karim MERN",
                    },
                    message: {
                        type: "string",
                        description: "Description du poste",
                        example: "Bientot la coupe du monde",
                    },
                },
            },
            /*Les champs de saisie du post*/
            champsSaisie: {
                type: "object",
                properties: {
                    auteur: {
                        type: "string",
                        description: "nom du auteur",
                        example: "Abdoul Karim MERN",
                    },
                    message: {
                        type: "string",
                        description: "Description du poste",
                        example: "Bientot la coupe du monde",
                    },
                },
            },
            /**affichage des erreurs*/
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};