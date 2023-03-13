var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var subjectRouter = require("./routes/subjects");
var questionRouter = require("./routes/questions");
var usersRouter = require("./routes/users");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "public")));

app.use("/subjects", subjectRouter);
app.use("/questions", questionRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});
app.get;

// // error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	//   // send the error page
	res.status(err.status || 500);
	res.send("error");
});

module.exports = app;
