import "./dateTime.css"
const DateTime=()=>{
    
    const dayOfWeek = new Date().toLocaleDateString(undefined, { weekday: 'long' });

    return(
        <div className='dateTime'>
            <div className="day">Wednesday</div>
        </div>
    );
}
export default  DateTime;