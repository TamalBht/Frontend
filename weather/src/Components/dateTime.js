
const DateTime=()=>{
    const dateString = new Date().toLocaleString();
    const dayOfWeek = new Date().toLocaleDateString(undefined, { weekday: 'long' });

    return(
        <div className='dateTime'>
            <div className="date">{dateString}</div>
            <div className="day">{dayOfWeek}</div>
        </div>
    );
}
export default  DateTime;