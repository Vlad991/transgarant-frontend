import React from "react";

const StageButtons = ({
                          state,
                          clickContinue,
                          clickBack
                      }) => {
    return (
        <div className="registration__stage-buttons stage-buttons">
            {state.stage > 0 ? <button className="stage-buttons__button stage-buttons__button--first button button--add" onClick={clickBack}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" fill="#fff" viewBox="0 0 268.832 268.832">
                    <g>
                        <path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
                        c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
                        c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"/>
                    </g>
                </svg>
                Назад
            </button> : null}
            <button className="stage-buttons__button stage-buttons__button--second button button--add" onClick={clickContinue}>
                Продолжить
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" fill="#fff" viewBox="0 0 268.832 268.832">
                    <g>
                        <path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
                        c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
                        c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default StageButtons;