

const axios = require("axios");

const verifyPan = async (req, res) => {
  const { id_number, full_name, dob } = req.body;

  const data = JSON.stringify({
    task_id: process.env.IDFY_TASK_ID,
    group_id: process.env.IDFY_GROUP_ID,
    data: {
      id_number: id_number,
      full_name: full_name,
      dob: dob,
    },
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_pan",
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
    console.log("PAN request sent. Request ID:", requestId);

    setTimeout(async () => {
      const config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://eve.idfy.com/v3/tasks",
        headers: {
          "Content-Type": "application/json",
          "account-id": process.env.IDFY_ACCOUNT_ID,
          "api-key": process.env.IDFY_API_KEY,
        },
        params: {
          request_id: requestId,
        },
      };

      try {
        const resultResponse = await axios(config2);
        console.log("PAN Verification Successful");
        console.log(JSON.stringify(resultResponse.data));

        return res.status(200).json({
          message: "Verification success",
          data: resultResponse.data,
        });
      } catch (error) {
        console.error("Error fetching PAN result:", error);
        return res.status(500).json({ error: "Error fetching PAN result" });
      }
    }, 5000);
  } catch (error) {
    console.error("Error sending PAN request:", error);
    return res.status(500).json({ error: "Error sending PAN request" });
  }
};

module.exports = { verifyPan };
