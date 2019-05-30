const { request } = require("axios");
const { PROVIDER_URL } = require("../config.json");

const formatData = data => data.message;

const getData = async () => {
  const { data } = await request({
    method: "GET",
    baseURL: PROVIDER_URL,
    url: "/data",
    headers: { Accept: "application/json" }
  });
  return formatData(data);
};

exports.getData = getData;
