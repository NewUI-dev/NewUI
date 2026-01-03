'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CopyIcon } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  return (
    <div className="relative group">
      {filename && (
        <div className="bg-muted px-4 py-2 text-sm font-medium border-b">
          {filename}
        </div>
      )}
      <div className={`${filename ? '' : 'p-4'}`}>
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: filename ? '0 0 0.5rem 0.5rem' : '0.5rem',
            fontSize: '0.875rem',
            padding: filename ? '1rem' : '0'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => navigator.clipboard.writeText(code)}
      >
        <CopyIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};