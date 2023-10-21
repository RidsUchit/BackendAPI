const express = require("express");
const router = express.Router();
const cors = require("cors");
const users = require("../controllers/userRewards");

module.exports = function ({ app }) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/.netlify/functions/api", router);

  //API URL : http://localhost:5500/.netlify/functions/api/rewards/1
  //get Rewards Dashboard Details

  router.get("/rewards/:userId", async (request, response) => {
    try {
      users.getUserRewardDetail(request.params.userId).then((result) => {
        response.json(result);
      });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  });
};
