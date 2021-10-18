import React from "react";

const taskLimitNumber = 5;

export const columnsRawData = [
    {
        id: 1,
        name: "Pending",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#A162D8 ",
        taskIds: [],
    },
    {
        id: 2,
        name: "Analysis - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#5A9DF9",
        taskIds: [],
    },
    {
        id: 3,
        name: "Analysis - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#1387BE",
        taskIds: [],
    },
    {
        id: 4,
        name: "Development - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#FF5F6F",
        taskIds: [],
    },
    {
        id: 5,
        name: "Development - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#E0465E",
        taskIds: [],
    },
    {
        id: 6,
        name: "Test",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#1CC778",
        taskIds: [],
    },
    {
        id: 7,
        name: "Deploy",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#FAAB49",
        taskIds: [],
    },
];

export const tasksRowData = [
    { id: 1, text: "Status component", idColumn: 1, user: "Anna" },
    { id: 2, text: "Blog assets", idColumn: 2, user: "David" },
    { id: 3, text: "Change css img", idColumn: 3, user: "Anna" },
    { id: 4, text: "Chrome extension design", idColumn: 4, user: "David" },
    { id: 5, text: "New slides for presentation", idColumn: 1, user: "Anna" },
    { id: 6, text: "SEO", idColumn: 4, user: "Peter" },
    { id: 7, text: "Meeting", idColumn: 3, user: "Anna" },
    { id: 8, text: "UX", idColumn: 6, user: "Peter" },
];
