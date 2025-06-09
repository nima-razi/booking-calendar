import { setupEventForm } from './eventFormHandler.js';

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
        events: 'data/events.json',
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