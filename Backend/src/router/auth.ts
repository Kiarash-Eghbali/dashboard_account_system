const express = require("express");
const router = express.Router();
const User = require("../model/User");
const PhoneVerify = require("../model/PhonVerify");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// first one is register page