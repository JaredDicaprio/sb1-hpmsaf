import React from 'react';
import { greet } from '../utils/greetings';

export function Welcome() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {greet()}
      </h1>
      <p className="text-gray-600">
        Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/components/Welcome.tsx</code> to get started
      </p>
    </div>
  );
}