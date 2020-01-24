export async function getMLHEvents() {
    try {
        const response = await fetch('https://mlh-events.now.sh/na-2020');
        const hackathons = await response.json();
        const now = new Date();
        // We filter the hackathos to only show the hackathons past 
        // current date. We want hackathons that are not for highschool
        // so we filter them based on those two conditions
        // Note: dates are implicitly numbers that represent num of seconds since September 1, 1970
        // so it is easier to compare using Date objects.
        const filteredHackathons = hackathons.filter((hackathon) => {
            const { isHishSchool, startDate } = hackathon;
            const date = new Date(startDate);
            return !isHishSchool && date >= now;
        });
        return filteredHackathons;
    } catch (error) {
        throw error;
    }
}

export async function getFirstMLHEvents(num) {
    try {
        const response = await fetch('https://mlh-events.now.sh/na-2020');
        const hackathons = await response.json();
        const now = new Date();
        const filteredHackathons = hackathons.filter((hackathon, index) => {
            const { isHishSchool, startDate } = hackathon;
            const date = new Date(startDate);
            return (
                !isHishSchool
                && date >= now
                && index <= num
            );
        });
        return filteredHackathons;
    } catch (error) {
        throw error;
    }
}
