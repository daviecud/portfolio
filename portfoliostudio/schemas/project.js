export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", type: "Personal", type: "string"},
                    {value: "client", type: "Client", type: "string"},
                    {value: "educational", type: "Educational", type: "string"},
                
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                    {
                        type: "string",
                    }
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};