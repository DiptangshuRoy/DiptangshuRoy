import React, { useEffect } from 'react';
import { CodeComparison } from "@/components/magicui/code-comparison";

const Codeexample = () => {
  // 🔒 Lock scroll on mount, unlock on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = ''; // Restore scroll
    };
  }, []);

  const beforeCode = `// Bad code version
// App.tsx
import { useState, useEffect } from "react";

function App() {
  const [a, b] = useState([]);
  const [c, d] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((r) =>
      r.json().then((z) => b(z))
    );
  }, []);

  return (
    <div>
      <input onChange={(e) => d(e.target.value)} />
      {a
        .filter((x) => x.name.toLowerCase().includes(c.toLowerCase()))
        .map((y) => (
          <p key={y.id}>{y.name}</p>
        ))}
    </div>
  );
}

export default App;
`;

  const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares); // [!code focus]

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

  return (
    <div className="absolute top-20 left-0 z-50 flex w-full h-[95vh] items-center justify-between bg-transparent px-4 py-2 shadow-md backdrop-blur-md dark:bg-background/90">
      <div className="absolute top-10 left-0 w-full h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CodeComparison
          beforeCode={beforeCode}
          afterCode={afterCode}
          language="typescript"
          filename="middleware.ts"
          lightTheme="github-light"
          darkTheme="github-dark"
          highlightColor="rgba(101, 117, 133, 0.16)"
        />
      </div>
    </div>
  );
};

export default Codeexample;
