import { v4 as uuidv4 } from "uuid";

const taskLimitNumber = 5;

export const columnsRawData = [
    {
        id: 1,
        name: "Pending",
        limit: taskLimitNumber,
        color: "#A162D8 ",
        taskIds: [
            {
                id: uuidv4(),
                text: "Status component",
                idColumn: 1,
                user: "Anna",
            },
            {
                id: uuidv4(),
                text: "New slides for presentation",
                idColumn: 1,
                user: "Anna",
            },
        ],
    },
    {
        id: 2,
        name: "Analysis - Doing",
        limit: taskLimitNumber,
        color: "#5A9DF9",
        taskIds: [
            { id: uuidv4(), text: "Blog assets", idColumn: 2, user: "David" },
        ],
    },
    {
        id: 3,
        name: "Analysis - Done",
        limit: taskLimitNumber,
        color: "#1387BE",
        taskIds: [
            { id: uuidv4(), text: "Change css img", idColumn: 3, user: "Anna" },
            { id: uuidv4(), text: "Meeting", idColumn: 3, user: "Anna" },
        ],
    },
    {
        id: 4,
        name: "Development - Doing",
        limit: taskLimitNumber,
        color: "#FF5F6F",
        taskIds: [
            {
                id: uuidv4(),
                text: "Chrome extension design",
                idColumn: 4,
                user: "David",
            },
            { id: uuidv4(), text: "SEO", idColumn: 4, user: "Peter" },
        ],
    },
    {
        id: 5,
        name: "Development - Done",
        limit: taskLimitNumber,
        color: "#E0465E",
        taskIds: [],
    },
    {
        id: 6,
        name: "Test",
        limit: taskLimitNumber,
        color: "#1CC778",
        taskIds: [{ id: uuidv4(), text: "UX", idColumn: 6, user: "Peter" }],
    },
    {
        id: 7,
        name: "Deploy",
        limit: taskLimitNumber,
        color: "#FAAB49",
        taskIds: [],
    },
];
