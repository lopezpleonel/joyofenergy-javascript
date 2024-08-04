const { meterPricePlanMap } = require("../meters/meters");
const { usageCost } = require("../usage/usage");

const getLastWeekConsumtpion = (readings, smartMeterId) => {
    const lastWeekDay = new Date;
    lastWeekDay.setDate(lastWeekDay.getDate() - 7);
    lastWeekDayEphocTime = lastWeekDay.getTime() / 1000;

    const readingsLastWeek = readings(smartMeterId)
                                .filter(reading => reading.time >= lastWeekDayEphocTime);
    if (readingsLastWeek.length == 0) {
        return 0;
    }

    const rate = meterPricePlanMap[smartMeterId].rate;

    const result = usageCost(readingsLastWeek, rate);

    return Number(result.toFixed(2));
};

module.exports = {
    getLastWeekConsumtpion
}