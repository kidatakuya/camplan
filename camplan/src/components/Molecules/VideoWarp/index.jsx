import Video from '../../../assets/Video/15121984084409.MP4'
import './index.scss'

const VideoWarp = () => {
    return(
        <div className="videoWarp">
            <video src={Video} muted loop></video>
        </div>
    )
}

export default VideoWarp



