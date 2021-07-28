
interface IVideoProps {
    title: string;
    url: string;
}
const Video = (prop: IVideoProps) => {
    return (
        <iframe width="974" height="532" src={`https://www.youtube.com/embed/${prop.url}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

        </iframe>
    )
}

export default Video;