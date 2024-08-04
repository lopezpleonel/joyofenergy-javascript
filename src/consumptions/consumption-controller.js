const { getLastWeekConsumtpion } = require("./consumptions");

const lastWeekConsumption = (getData, req) => {
    const meter = req.params.smartMeterId;
    return {
        usageCost: getLastWeekConsumtpion(getData, meter),
    };
};

module.exports = {
    lastWeekConsumption,
}