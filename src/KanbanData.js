import React from "react";

const taskLimitNumber = 5;

export const columnsRawData = [
    {
        id: 1,
        name: "Pending",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#A162D8 ",
    },
    {
        id: 2,
        name: "Analysis - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#5A9DF9",
    },
    {
        id: 3,
        name: "Analysis - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#1387BE",
    },
    {
        id: 4,
        name: "Development - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#FF5F6F",
    },
    {
        id: 5,
        name: "Development - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#E0465E",
    },
    {
        id: 6,
        name: "Test",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#1CC778",
    },
    {
        id: 7,
        name: "Deploy",
        limit: taskLimitNumber,
        tasks: 0,
        color: "#FAAB49",
    },
];

export const tasksRowData = [
    { id: 1, name: "Status component", idColumn: 1, user: "Anna" },
    { id: 2, name: "Blog assets", idColumn: 1, user: "David" },
    { id: 3, name: "Change css img", idColumn: 1, user: "Anna" },
    { id: 4, name: "Chrome extension design", idColumn: 1, user: "David" },
];
