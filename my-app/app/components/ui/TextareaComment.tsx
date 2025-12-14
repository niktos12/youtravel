"use client";

import { useState, useEffect } from "react";

interface TextareaCommentProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}

export default function TextareaComment({
  value = "",
  onChange,
  placeholder = "Дополнительные пожелания или вопросы",
  maxLength = 300,
  disabled = false,
}: TextareaCommentProps) {
  const [charCount, setCharCount] = useState(value.length);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange && e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="w-full">
      {/* Счетчик символов */}
      <div className="flex items-center justify-end mb-2">
        <div className="text-white text-sm font-medium">
          <span className={charCount === maxLength ? "text-red-300" : ""}>
            {charCount}
          </span>
          <span className="text-white/70">/{maxLength}</span>
        </div>
      </div>

      <div
        className={`relative rounded-3xl lg:rounded-4xl  transition-all duration-200 ${
          isFocused
            ? "border-white ring-2 ring-white/30"
            : "border-white/50 hover:border-white"
        } ${disabled ? "opacity-60" : ""}`}
      >
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          disabled={disabled}
          className="w-full min-h-[120px] px-5 py-4 rounded-3xl lg:rounded-4xl bg-white focus:outline-none resize-none text-[#212121] placeholder:text-gray-500 text-base disabled:cursor-not-allowed"
          placeholder={placeholder}
          rows={3}
        />
      </div>
    </div>
  );
}
