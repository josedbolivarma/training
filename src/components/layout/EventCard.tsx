const EventCard = (props: any) => {
    return (
        <div className="card events-card">
            <header className="card-header">
                <p className="card-header-title">
                    { props.title }
                </p>
                <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-table">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <tbody>
                            { props.list.map((elem: any) => {
                                return (
                                    <tr key={`${elem.text}-${elem.id}`}>
                                        <td width="5%"><i className="fa fa-bell-o"></i></td>
                                        <td>{ elem.text }</td>
                                        <td className="level-right">
                                            <a className="button is-small is-primary" href="#">
                                                Ver ofertas
                                            </a>
                                        </td>
                                    </tr>    
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
