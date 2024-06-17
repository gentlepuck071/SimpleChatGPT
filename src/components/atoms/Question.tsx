// components/MessageInput.tsx

import React, { ChangeEvent } from 'react';

interface IQuestionInput {
  userQuestion: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Question: React.FC<IQuestionInput> = ({ userQuestion, onChange, placeholder }) => {
  return (
    <input
      type='text'
      value={userQuestion}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border rounded"
    />
  );
};

export default Question;
