const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
app.enable("trust proxy");
app.use(morgan("dev"));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use(helmet());
// app.post("/", bodyParser.raw({ type: "application/json" }));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
// app.use(
//   hpp({
//     whitelist: [],
//   })
// );

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

//start API URL FROM HERE

// 3) ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ Message: "Started from here" });
});

app.all("*", (req, res, next) => {
  res.status(400).json({ Message: "Please request proper request" });
});

exports.module = app;
