
interface EventInterface {
    eventName: string,
    date: Date,
    location: string,
    eventType: string
    // TODO: startTime, endTime
}

// TODO: Add CSS, also h1 is same size as p tags
// description prop can be optional

export default function Event({eventName, date, location, eventType} : EventInterface) {
    return (
        <div>
            <h1>{eventName}</h1>
            <p>Date: {date.toLocaleDateString()}</p>
            <p>Location: {location}</p>
            <p>Event type: {eventType}</p>
        </div>
    )
}

/*
Alternative formatting
const Event = (args...) => {

}

*/