export function setupEventForm(calendar) {
    const form = document.getElementById('eventForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('eventName').value.trim();
        const startDate = document.getElementById('startDateInput').value;
        const startTime = document.getElementById('startTimeInput').value;
        const endDate = document.getElementById('endDateInput').value;
        const endTime = document.getElementById('endTimeInput').value;
        const url = document.getElementById('eventUrl').value.trim();
        const description = document.getElementById('messageTxt').value.trim();

        if (!title || !startDate || !startTime || !endDate || !endTime) {
            return;
        }

        calendar.addEvent({
            title,
            start: `${startDate}T${startTime}`,
            end: `${endDate}T${endTime}`,
            url: url || undefined,
            extendedProps: {
                description
            }
        });

        bootstrap.Modal.getInstance(document.getElementById('addEventModal')).hide();
        form.reset();
    });
}