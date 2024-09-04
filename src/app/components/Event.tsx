
interface EventProps {
    eventName: string,
    date: Date,
    location: string,
    eventType: string
    // TODO: startTime, endTime
}

// TODO: Add CSS, also h1 is same size as p tags
// description prop can be optional

export default function Event({eventName, date, location, eventType} : EventProps) {
    return (
        <div className='bg-color-surface-200 w-2/5 rounded-lg m-8 p-6 space-y-4'>
            <h1 className='font-bold text text-color-primary-600 underline'>{eventName}</h1>
            <p><span className='font-bold'>Date: </span>{date.toLocaleDateString(undefined, {dateStyle: "long"})}</p>
            <p><span className='font-bold'>Location: </span>{location}</p>
            <p><span className='font-bold'>Event type: </span>{eventType}</p>
        </div>
    )
}

/*
Alternative formatting
const Event = (args...) => {

}

*/