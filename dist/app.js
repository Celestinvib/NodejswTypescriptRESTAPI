"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express = require('express');
const express_1 = __importDefault(require("express")); //Ts accept this syntax 
const body_parser_1 = __importDefault(require("body-parser"));
const notes_1 = __importDefault(require("./routes/notes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(notes_1.default);
app.listen(3000);
