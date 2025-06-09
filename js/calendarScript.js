import { setupEventForm } from '/js/eventFormHandler.js';

let calendar; // define at top-level scope

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: '100%',
        expandRows: true,
        themeSystem: 'bootstrap5',
        initialView: 'dayGridMonth', // Change this to 'dayGridMonth' or 'timeGridWeek' as needed
        navLinks: true,
        selectable: true,
        dateClick: function(info) {
            const [datePart, timePart] = info.dateStr.split('T');

            document.getElementById('startDateInput').value = datePart;
            document.getElementById('startTimeInput').value = timePart ? timePart.slice(0, 5) : "09:00";

            document.getElementById('endDateInput').value = "";
            document.getElementById('endTimeInput').value = "";

            const addEventModal = new bootstrap.Modal(document.getElementById('addEventModal'));
            addEventModal.show();
        },
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        footerToolbar: {
            left: '',
            center: 'prev,today,next',
            right: ''
        },
        weekNumbers: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [ // Sample events, event data can be fetched from a server or defined here
            {
                title: 'All Day Event',
                start: '2025-06-01'
            },
            {
                title: 'Long Event',
                start: '2025-06-07',
                end: '2025-06-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-06-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2025-06-11',
                end: '2025-06-13'
            },
            {
                title: 'Meeting',
                start: '2025-06-12T10:30:00',
                end: '2025-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2025-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2025-06-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2025-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'https://google.com/',
                start: '2025-06-28'
            }
        ],
    });

    const form = document.getElementById('eventForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Form submitted'); // Debug
        // Your event adding logic...
    });

    calendar.render();

    // Now calendar is initialized and available
    setupEventForm(calendar);
});