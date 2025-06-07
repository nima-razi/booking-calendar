document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: '100%',
        expandRows: true,
        themeSystem: 'bootstrap5',
        initialView: 'dayGridMonth', // Change this to 'dayGridMonth' or 'timeGridWeek' as needed
        navLinks: true,
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        footerToolbar: {
            left: 'addEventButton',
            center: '',
            right: 'prev,today,next'
        },
        customButtons: {
            addEventButton: {
                text: 'add event...',
                click: function () {
                    const addEventModal = new bootstrap.Modal(document.getElementById('addEventModal'));
                    addEventModal.show();
                }
            }
        },
        weekNumbers: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2025-04-01'
            },
            {
                title: 'Long Event',
                start: '2025-04-07',
                end: '2025-04-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-04-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-04-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2025-04-11',
                end: '2025-04-13'
            },
            {
                title: 'Meeting',
                start: '2025-04-12T10:30:00',
                end: '2025-04-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2025-04-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2025-04-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2025-04-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'https://google.com/',
                start: '2025-04-28'
            }
        ],
    });
    calendar.render();
});