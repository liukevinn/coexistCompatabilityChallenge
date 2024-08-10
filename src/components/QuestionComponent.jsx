/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./QuestionComponent.module.css";
import { getResponses, postResponse } from "../apiService";

const QuestionComponent = ({
  image,
  question,
  onAnswerSelected,
  onNextQuestion,
}) => {
  const [options, setOptions] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);
  const [optionsIsLoading, setOptionsIsLoading] = useState(false);

  const fetchOptions = useCallback(async () => {
    try {
      const options = await getResponses(question?.id);
      setOptions(
        options
          ?.sort(() => Math.random() - 0.5)
          ?.map((o) => ({ ...o, selected: false }))
      );
      setOptionsIsLoading(false);
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  }, [question?.id]);

  const handleOptionSelect = async (id) => {
    try {
      const optionsUpdated = await postResponse(id);
      const orderMap = new Map(options.map((q, index) => [q.id, index]));
      const sortedOptions = optionsUpdated.sort((a, b) => {
        return (
          (orderMap.get(a.id) ?? Infinity) - (orderMap.get(b.id) ?? Infinity)
        );
      });
      const index = sortedOptions.findIndex((o) => o?.id === id);
      sortedOptions[index] = {
        ...sortedOptions[index],
        selected: true,
      };
      setOptions(sortedOptions);
      setHasSelected(true);
      onAnswerSelected(sortedOptions?.[index]?.points ?? 0);
    } catch (error) {
      console.error("Error posting response:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, [question, fetchOptions]);

  useEffect(() => {
    setHasSelected(false); // Reset the hasSelected state when question changes
  }, [question]);

  return (
    <Box className={styles.container}>
      <Box className={styles.questionBox}>
        {image && React.createElement("img", { src: image })}
        <Typography
          variant="h5"
          className={styles.questionText}
          sx={{ fontFamily: "Lexend, sans-serif" }}
        >
          how do you prefer to...
        </Typography>
        <Typography
          variant="h5"
          className={styles.questionText}
          sx={{ fontFamily: "Lexend, sans-serif" }}
        >
          {question?.question_text ?? ""}
        </Typography>
      </Box>
      <Box className={styles.options}>
        {options.map((option) => (
          <React.Fragment key={option.id}>
            <Button
              onClick={() => handleOptionSelect(option.id)}
              className={styles.option}
              disabled={hasSelected}
              sx={{ border: "0.2vh solid black", borderRadius: "5vh" }}
            >
              <div
                className={styles.optionBackground}
                style={{
                  width: hasSelected ? `${option.percentage}%` : "0%", // Set width only if an option has been selected
                  backgroundColor: option.selected ? "#B1C5B1" : "#CCDBE6", // Apply the selected color or default
                }}
              ></div>
              <Box className={styles.optionText}>
                <span>{option?.option_text}</span>
              </Box>
            </Button>
            <Box className={styles.responseData}>
              {hasSelected && (
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {`${option?.percentage}% (${option?.count} response${
                    option?.count === 1 ? "" : "s"
                  })`}
                </Typography>
              )}
            </Box>
          </React.Fragment>
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={onNextQuestion}
        className={styles.nextButton}
        disabled={!hasSelected || optionsIsLoading}
        sx={{
          textTransform: "none",
          fontFamily: "Lexend, sans-serif",
          borderRadius: "10vh",
        }}
      >
        next
      </Button>
    </Box>
  );
};

export default QuestionComponent;
