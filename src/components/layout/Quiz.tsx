import { IAnswer, IQuestion, QUESTION_STATE } from "../../models/entity.models";

interface IQuizProps {
    questions: IQuestion[],
    handle: () => boolean,
    handleClear: () => boolean,
    handleChange: (question: IQuestion, answer: IAnswer) => boolean
}
const Quiz = (prop: IQuizProps) => {
    const handle = () => {
        prop.handle();
    }
    const handleClear = () => {
        prop.handleClear();
    }
    
    return (
        <div className="pt-3">
            <div className="columns">
                <div className="column is-4">
                    <span className="icon has-text-success">
                        <i className="fas fa-check-square"></i>
                    </span>                    
                    <span><strong>Correctas: { prop.questions.filter((q: IQuestion) => q.state === QUESTION_STATE.CORRECT).length }</strong></span>
                </div>
                <div className="column is-4">
                    <span className="icon has-text-danger">
                        <i className="fa fa-times"></i>
                    </span>
                    <span><strong>Incorrectas: { prop.questions.filter((q: IQuestion) => q.state === QUESTION_STATE.INCORRECT).length }</strong></span>
                </div>
                <div className="column is-4">
                    <span><strong>Sin contestar: { prop.questions.filter((q: IQuestion) => q.state === QUESTION_STATE.NORESPONSE).length }</strong></span><br />
                </div>
            </div>
            <hr />
            {prop.questions.map((question: IQuestion, index: number) => {
                const elem = question.state === QUESTION_STATE.NORESPONSE ? ''
                : question.state === QUESTION_STATE.CORRECT ? 
                <span className="icon has-text-success">
                    <i className="fas fa-check-square"></i>
                </span> : 
                <span className="icon has-text-danger">
                    <i className="fa fa-times"></i>
                </span>

                return (
                    <div className="pt-3" key={`question-${question.id}`}>
                        <label><strong>{index + 1}.) { question.question }</strong> {elem} </label>
                        <div className="control radio-list">
                            {question.children.map((answer: IAnswer) => {
                                const elementType = question.type === 'Simple' ? 'radio' : 'checkbox';
                                return (
                                    <div className="column is-12" key={`answer-${answer.id}`}>
                                        <label className="radio">
                                            <input type={elementType} name={`${question.id}`} checked={answer.selected} onChange = { () => prop.handleChange(question, answer) } />
                                            &nbsp;{answer.answer}
                                        </label> 
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                    </div>
                )
            })}
            <div className="columns">
                <div className="column is-3">
                </div>
                <div className="column is-3">
                    <button className="button is-danger" onClick={ handleClear }>Limpiar</button>
                </div>
                <div className="column is-3">
                    <button className="button is-success" onClick={ handle }>Evaluar</button>
                </div>
                <div className="column is-3">
                </div>
            </div>
        </div>
    )
}

export default Quiz;