import { useState } from "react";

interface Props {
  initialValue: string;
  validateFunction: string;
  value: string;
  setValue: string;
  error: string;
  setError: (parameter: string) => string;
  handleChange: string;
}

export function useInputValidation(
  initialValue: string,
  validateFunction: string
): Props {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>("");

  // 입력 값 변경 핸들러
  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);

    // 유효성 검사 실행
    if (validateFunction) {
      const errorMsg: string = validateFunction(value);
      setError(errorMsg);
    }
  };

  return {
    value,
    setValue,
    error,
    setError,
    handleChange,
  };
}
