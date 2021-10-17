import React from "react";

const taskLimitNumber = 5;

export const columnsRawData = [
    {
        id: 1,
        name: "Pending",
        limit: taskLimitNumber,
        tasks: 0,
        color: "red",
    },
    {
        id: 2,
        name: "Analysis - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "pink",
    },
    {
        id: 3,
        name: "Analysis - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "purple",
    },
    {
        id: 4,
        name: "Development - Doing",
        limit: taskLimitNumber,
        tasks: 0,
        color: "yellow",
    },
    {
        id: 5,
        name: "Development - Done",
        limit: taskLimitNumber,
        tasks: 0,
        color: "green",
    },
    {
        id: 6,
        name: "Test",
        limit: taskLimitNumber,
        tasks: 0,
        color: "orange",
    },
    {
        id: 7,
        name: "Deploy",
        limit: taskLimitNumber,
        tasks: 0,
        color: "gray",
    },
];
