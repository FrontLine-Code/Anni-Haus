import React from 'react';

interface TextProps {
  message: string;
  color: string;
  weight: number;
  size: number;
}

const Text: React.FC<TextProps> = ({ message, color, weight, size }) => {
  return (
    <div style={{ color, fontWeight: weight, fontSize: size }}>
      {message}
    </div>
  );
};

export default Text;
