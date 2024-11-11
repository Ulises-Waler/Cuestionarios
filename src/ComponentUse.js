import React from 'react';
import QuestionnaireChart from './QuestionnaireChart'; 

const UseComponent = () => {
    const questionnaire = {
        title: "Encuesta de Satisfacción",
        questions: [
            { title: "¿Te gustó el producto?", type: "multiple", options: ["Sí", "No"], required: true },
            { title: "¿Recomendarías nuestro servicio?", type: "multiple", options: ["Sí", "No", "Tal vez"], required: true },
            { title: "Comentarios adicionales", type: "text", required: false },
        ],
    };

    const responses = [
        ["Sí", "Sí", "Excelente"], 
        ["No", "Tal vez", ""],      
        ["Sí", "Sí", "Muy buen servicio"], 
    ];

    return (
        <div>
            <h1>Resultados de la Encuesta</h1>
            <QuestionnaireChart questionnaire={questionnaire} responses={responses} />
        </div>
    );
};

export default UseComponent;