const delay = require("mocker-api/lib/delay");
const records = require("./db/records");
const noProxy = process.env.NO_PROXY === "true";
const TEST_RESPONSE_403 = false;
const DELAY_RESPONSE = 1000;

const proxy = {
  "GET /api/records": (req, res) => {
    console.log("req.params:", req.params);
    if (TEST_RESPONSE_403) {
      return res.status(403).json({
        status: "Test Error",
        code: 403,
      });
    }
    return res.json(records);
  },
};

module.exports = noProxy ? {} : delay(proxy, DELAY_RESPONSE);
