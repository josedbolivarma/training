const Card = (props: any) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <a href=""> {props.subTitle}</a>
                </div>
            </div>
        </div>    
    )
}

export default Card;