import "./vid.css"
function Vid(){
    return(
        <div className='video-container'>
            <video muted loop autoPlay>
                            <source src="./Images/1110142-uhd_3840_2160_30fps.mp4"></source>
                    </video>
        </div>
    );
}
export default Vid;