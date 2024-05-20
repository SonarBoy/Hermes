import { setTestabilityGetter } from "@angular/core";
import { Table } from "./Table";

var tableRequests: string[];
tableRequests = ["Water","Bill/Cheque","Other"];

export const TableSection: Table[] = [
    {tableNumber: "1" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "2" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "3" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "4" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "5" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "6" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "7" , section : "Dining Hall", request: tableRequests },
    {tableNumber: "8" , section : "Dining Hall", request: tableRequests }
];