
const axios = require ("axios");

const verifyAadhaar = async (req, res) => {
  const { aadhaar_number } = req.body;

  var data = {
    task_id: process.env.IDFY_TASK_ID,
    group_id: process.env.IDFY_GROUP_ID,
    data: {
      aadhaar_number: aadhaar_number,
    },
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite",
    headers: {
      "api-key": process.env.IDFY_API_KEY,
      "account-id": process.env.IDFY_ACCOUNT_ID,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    const requestId = response.data.request_id;

    setTimeout(async () => {
      try {
        const config2 = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://eve.idfy.com/v3/tasks',
          headers: {
            "api-key": process.env.IDFY_API_KEY,
            'Content-Type': 'application/json',
            "account-id": process.env.IDFY_ACCOUNT_ID
          },
          params: {
            'request_id': requestId
          }
        };

        const finalResponse = await axios(config2);

        console.log("Final Aadhaar Verification Response:", finalResponse.data);

        return res.status(200).json({
          message: "Aadhaar verification done",
          data: finalResponse.data,
        });

      } catch (error) {
        console.error("Error fetching final response:", error);
        return res.status(500).json({ error: "Failed to fetch verification result" });
      }

    }, 5000);

  } catch (error) {
    console.error("Error submitting verification request:", error);
    return res.status(500).json({ error: "Failed to initiate Aadhaar verification" });
  }
};

module.exports = { verifyAadhaar };
