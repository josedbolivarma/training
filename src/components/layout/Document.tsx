
interface IDocumentProps {
    id: number;
    title: string;
}

const Document = (prop: IDocumentProps) => {
    return (
        <iframe src={`https://zoomviaje.com/documents/${prop.id}.pdf`} title={prop.title} width="974" height="532" ></iframe>
    )
}

export default Document;