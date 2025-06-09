fetch('./data/events.json')
.then(res => res.json())
.then(events => {
    const now = new Date();
    const upcomingContainer = document.getElementById('upcoming-events-body');
    const pastContainer = document.getElementById('past-events-body');

    // Separate and sort events
    const upcoming = events
    .filter(event => new Date(event.end || event.start) >= now)
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 3); // limit to 3

    const past = events
    .filter(event => new Date(event.end || event.start) < now)
    .sort((a, b) => new Date(b.start) - new Date(a.start)) // most recent first
    .slice(0, 3); // limit to 3

    // Render function
    function renderEvents(list, container) {
        list.forEach(event => {
            const start = new Date(event.start);
            const end = new Date(event.end || event.start);
            
            const eventHTML = `
            <div class="mb-3">
            <h5 class="card-title">${event.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${start.toDateString()} - ${end.toDateString()} <i class="bi bi-calendar3"></i></h6>
            <h6 class="card-subtitle mb-2 text-muted">${start.toLocaleTimeString()} - ${end.toLocaleTimeString()} <i class="bi bi-clock"></i></h6>
            <p class="card-text">${event.description}</p>
            <a href="${event.url}" class="btn btn-primary">Go to event</a>
            </div>
            `;
            container.insertAdjacentHTML('beforeend', eventHTML);
        });
    }
    
    renderEvents(upcoming, upcomingContainer);
    renderEvents(past, pastContainer);
})
.catch(err => console.error('Failed to load events:', err));