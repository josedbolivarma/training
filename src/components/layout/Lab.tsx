interface ILab {
    title: string
}
const Lab = (prop: ILab) => {
    return (
        <h1>
            <strong>{prop.title}</strong>
            <hr/>
            ESTE TIPO DE RECURSO NO ESTA DISPONIBLE POR EL MOMENTO
        </h1>
    )
}

export default Lab;