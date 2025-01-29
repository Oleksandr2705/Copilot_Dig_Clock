import { updateTime, playChime } from '../clock.js';

describe('Clock functions', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="clock"></div>
            <div id="date"></div>
            <audio id="chime"></audio>
            <audio id="half-hour-chime"></audio>
        `;
    });

    test('updateTime updates clock and date elements', () => {
        updateTime();
        const clock = document.getElementById('clock').textContent;
        const date = document.getElementById('date').textContent;

        expect(clock).toMatch(/\d{2}:\d{2}/);
        expect(date).toMatch(/, \d{1,2} /);
    });

    test('playChime plays chime at the top of the hour', () => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date(2021, 1, 1, 12, 0, 0));

        const chime = document.getElementById('chime');
        const playSpy = jest.spyOn(chime, 'play');

        playChime();

        expect(playSpy).toHaveBeenCalled();
        jest.useRealTimers();
    });

    test('playChime plays half-hour chime at half past the hour', () => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date(2021, 1, 1, 12, 30, 0));

        const halfHourChime = document.getElementById('half-hour-chime');
        const playSpy = jest.spyOn(halfHourChime, 'play');

        playChime();

        expect(playSpy).toHaveBeenCalled();
        jest.useRealTimers();
    });
});