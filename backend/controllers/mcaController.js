
const axios = require("axios");

const verifyCompany = async (req, res) => {
  const { cin } = req.body;

  const data = {
    task_id: process.env.IDFY_TASK_ID,
    group_id: process.env.IDFY_GROUP_ID,
    data: {
      cin: cin,
    },
  };

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_mca",
    headers: {
      "Content-Type": "application/json",
      "account-id": process.env.IDFY_ACCOUNT_ID,
      "api-key": process.env.IDFY_API_KEY,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    const requestId = response.data.request_id;

    setTimeout(async () => {
      const config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://eve.idfy.com/v3/tasks",
        headers: {
          "api-key": process.env.IDFY_API_KEY,
          "Content-Type": "application/json",
          "account-id": process.env.IDFY_ACCOUNT_ID,
        },
        params: {
          request_id: requestId,
        },
      };

      try {
        const result = await axios(config2);
        console.log("Verification Result:", result.data);

        res.status(200).json({
          message: "Company verification complete",
          data: result.data,
        });
      } catch (error) {
        console.error("Error fetching verification result:", error);
        res.status(500).json({ error: "Failed to fetch company verification result" });
      }
    }, 5000);
  } catch (error) {
    console.error("Error initiating company verification:", error);
    res.status(500).json({ error: "Failed to initiate company verification" });
  }
};

module.exports = { verifyCompany };
