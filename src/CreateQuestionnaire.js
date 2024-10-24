import React, { useState } from "react";
import { Button, Card, Container, Form, Row, Col, OverlayTrigger, Tooltip, CloseButton } from "react-bootstrap";

const CreateQuestionnaire = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([
        { title: "", type: "text", options: [""], required: false },
    ]);

    const handleSubmit = () => {
        const questionnaire = {
            title,
            description,
            questions,
        };
        console.log("Cuestionario creado:", questionnaire);
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const addOption = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options.push("");
        setQuestions(updatedQuestions);
    };

    const removeOption = (index, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options = updatedQuestions[index].options.filter((_, optIdx) => optIdx !== optionIndex); // Filtra la opción a eliminar
        setQuestions(updatedQuestions);
    };

    const addQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { title: "", type: "text", options: [""], required: false },
        ]);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(updatedQuestions);
    };

    const handleQuestionTypeChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].type = value;
        if (value === "multiple" && updatedQuestions[index].options.length === 1 && updatedQuestions[index].options[0] === "") {
            updatedQuestions[index].options = [""];
        }
        setQuestions(updatedQuestions);
    };

    return (
      <>
      </>
    )
  
  }
  export default CreateQuestionnaire;
