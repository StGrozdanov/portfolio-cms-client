interface GreetingParams {
    currentHour?: number
}

const timeParts = {
    "Good Morning": [3, 4, 5, 6, 7, 8, 9, 10, 11],
    "Good Afternoon": [12, 13, 14, 15, 16, 17, 18],
    "Good Evening": [19, 20, 21, 22, 23, 0, 1, 2]
}

/**
 * Util function that returns a greeting string
 * @returns greeting such as Good Morning, Good Afternoon or Good Evening depending on the time of the current day
 */
export const getGreeting = ({ currentHour }: GreetingParams = {}) => {
    currentHour = currentHour ? currentHour : new Date(Date.now()).getHours();
    let greeting = '';

    Object.entries(timeParts).forEach(timePart => {
        const timePartKey = timePart[0];
        const timePartValues = timePart[1];

        if (timePartValues.some(hour => hour === currentHour)) {
            greeting = timePartKey;
            return;
        }
    });

    return greeting;
}

