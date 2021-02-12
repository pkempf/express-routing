const express = require("express");
const app = express();

const ExpressError = require("./expressError");

const { processNumArray, getMean, getMedian, getMode } = require("./helpers");

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("A comma-separated list of numbers is required.");
  }

  let stringArray = req.query.nums.split(",");
  let nums = processNumArray(stringArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: getMean(nums),
  };

  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("A comma-separated list of numbers is required.");
  }

  let stringArray = req.query.nums.split(",");
  let nums = processNumArray(stringArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: getMedian(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("A comma-separated list of numbers is required.");
  }

  let stringArray = req.query.nums.split(",");
  let nums = processNumArray(stringArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: getMode(nums),
  };

  return res.send(result);
});

app.get("/all", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("A comma-separated list of numbers is required.");
  }

  let stringArray = req.query.nums.split(",");
  let nums = processNumArray(stringArray);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "all",
    mean: getMean(nums),
    median: getMedian(nums),
    mode: getMode(nums),
  };

  return res.send(result);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("Express server running on port 3000");
});
