import styled from '@emotion/styled'
import '../styles/Spinner.css'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

const Spinner = () => {
    return (
        <>
            <Div>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </Div>
        </>
    )
}

export default Spinner