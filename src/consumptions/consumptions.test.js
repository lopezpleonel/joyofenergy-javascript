const { meters } = require("../meters/meters");
const { readings } = require('../readings/readings');
const { getLastWeekConsumtpion } = require("./consumptions");
const { readingsData } = require("../readings/readings.data");

describe('Consumptions', () => {
    beforeAll(() => {
        const mockDate = new Date('01/07/2024')
        global.Date = jest.fn().mockImplementation(() => mockDate)
        global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf())
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should get last week consumptions', () => {
        const smartMeterId = meters.METER0;

        const { setReadings, getReadings } = readings(readingsData);

        setReadings(smartMeterId, [
            { time: 1704142122, reading: 0.26785 },
            { time: 1704228522, reading: 0.26785 },
            { time: 1704314922, reading: 0.26785 },
        ]);

        const result = getLastWeekConsumtpion(getReadings, smartMeterId);

        expect(result).toEqual(128.57);
    });
});