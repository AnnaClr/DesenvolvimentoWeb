import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";
export function Option() {
    ({ options, selectOptions, alternative}) => {
        const [quizState, dispatch] = useContext(QuizContext);
        return (
          <div
            onClick={() => selectOptions()}
            className={`
            options
              ${quizState.answerSelected && alternative === true ? "correct" : ""} 
              ${quizState.answerSelected && alternative !== false ? "wrong" : ""}
              `}
          >
            <p>{options}</p>
          </div>
        );
      };
}


