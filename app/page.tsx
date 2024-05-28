// @ts-nocheck

"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [input, setInput] = React.useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
      <div className="flex items-center space-x-2 w-full max-w-md">
        <Checkbox id="input" />
        <label htmlFor="input" className="flex-grow">
          <Input
            type="text"
            placeholder="Add a todo"
            onChange={handleInputChange}
            value={input}
            className="w-full"
          />
        </label>
      </div>
      <pre>
        <code>{JSON.stringify(input, null, 2)}</code>
      </pre>
    </main>
  );
}
