'use client';

import React from 'react';
import { AnimatedButton } from '@/components/animated-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CopyIcon, PlayIcon } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { PropsTable } from '@/components/props-table';

const AnimatedButtonDocs = () => {
  const componentCode = `import { AnimatedButton } from '@/components/animated-button';

function App() {
  return (
    <div className="flex gap-4">
      <AnimatedButton>Default</AnimatedButton>
      <AnimatedButton variant="primary">Primary</AnimatedButton>
      <AnimatedButton variant="secondary">Secondary</AnimatedButton>
      <AnimatedButton variant="ghost">Ghost</AnimatedButton>
      <AnimatedButton variant="outline">Outline</AnimatedButton>
    </div>
  );
}`;

  const installCode = `npx shadcn-ui@latest add animated-button`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          AnimatedButton
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A premium animated button component with multiple variants and smooth animations.
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-card border rounded-lg p-4 mb-8 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px]">
          <Tabs defaultValue="npm" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-2">
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <div className="relative">
              <code className="text-sm bg-muted rounded px-3 py-2 w-full block overflow-x-auto">
                npx shadcn-ui@latest add animated-button
              </code>
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7"
                onClick={() => navigator.clipboard.writeText('npx shadcn-ui@latest add animated-button')}
              >
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </Tabs>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <PlayIcon className="h-4 w-4" />
          Open in Playground
        </Button>
      </div>

      {/* Preview & Code Section */}
      <div className="mb-12">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="border rounded-lg p-6 bg-background">
            <div className="flex flex-wrap gap-4">
              <AnimatedButton>Default</AnimatedButton>
              <AnimatedButton variant="primary">Primary</AnimatedButton>
              <AnimatedButton variant="secondary">Secondary</AnimatedButton>
              <AnimatedButton variant="ghost">Ghost</AnimatedButton>
              <AnimatedButton variant="outline">Outline</AnimatedButton>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock 
              code={componentCode} 
              language="tsx" 
              filename="components/example.tsx"
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Installation Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        
        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="cli">CLI Installation</TabsTrigger>
            <TabsTrigger value="manual">Manual Installation</TabsTrigger>
          </TabsList>
          <TabsContent value="cli">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted px-4 py-2 border-b text-sm font-medium">
                Terminal
              </div>
              <div className="relative">
                <CodeBlock 
                  code={installCode} 
                  language="bash" 
                  filename="Terminal"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="manual">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Step 1: Copy the component</h3>
                <p className="text-muted-foreground mb-2">Copy the following component to your project:</p>
                <CodeBlock 
                  code={`// components/animated-button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'outline';
  animated?: boolean;
  size?: 'sm' | 'default' | 'lg';
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = 'default', animated = true, size = 'default', className, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
      size === 'sm' && 'h-9 px-3 rounded-md text-xs',
      size === 'default' && 'h-10 px-4 py-2 rounded-md',
      size === 'lg' && 'h-11 px-8 rounded-md text-base',
      animated && 'transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:scale-95',
      className
    );

    const variantClasses = cn({
      'bg-primary text-primary-foreground shadow hover:bg-primary/90': variant === 'default',
      'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-indigo-500/30': variant === 'primary',
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': variant === 'secondary',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground': variant === 'outline',
    });

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses)}
        {...props}
      >
        {animated && (
          <>
            <span 
              className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-full" 
              aria-hidden="true"
            />
            <span 
              className="absolute h-full w-full bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              aria-hidden="true"
            />
          </>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };`} 
                  language="tsx" 
                  filename="components/animated-button.tsx"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 2: Copy utility functions</h3>
                <p className="text-muted-foreground mb-2">Make sure you have the cn utility function:</p>
                <CodeBlock 
                  code={`// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`} 
                  language="ts" 
                  filename="lib/utils.ts"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Usage Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock 
          code={`import { AnimatedButton } from '@/components/animated-button';

function App() {
  return (
    <div className="flex gap-4">
      <AnimatedButton>Default</AnimatedButton>
      <AnimatedButton variant="primary">Primary</AnimatedButton>
      <AnimatedButton variant="secondary">Secondary</AnimatedButton>
      <AnimatedButton variant="ghost">Ghost</AnimatedButton>
      <AnimatedButton variant="outline">Outline</AnimatedButton>
    </div>
  );
}`} 
          language="tsx" 
          filename="components/example.tsx"
        />
      </div>

      {/* Props Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable 
          props={[
            { 
              prop: 'variant', 
              type: `'default' | 'primary' | 'secondary' | 'ghost' | 'outline'`, 
              default: 'default', 
              description: 'The visual style of the button' 
            },
            { 
              prop: 'animated', 
              type: 'boolean', 
              default: 'true', 
              description: 'Whether the button has subtle animations' 
            },
            { 
              prop: 'size', 
              type: `'sm' | 'default' | 'lg'`, 
              default: 'default', 
              description: 'The size of the button' 
            },
            { 
              prop: 'className', 
              type: 'string', 
              default: 'undefined', 
              description: 'Additional classes to apply to the button' 
            },
            { 
              prop: 'children', 
              type: 'React.ReactNode', 
              default: 'undefined', 
              description: 'The content of the button' 
            }
          ]}
        />
      </div>

      {/* Customization Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p className="text-muted-foreground mb-4">
          You can customize the AnimatedButton by passing additional className props:
        </p>
        <CodeBlock 
          code={`<AnimatedButton 
  className="bg-gradient-to-r from-cyan-500 to-blue-500"
  variant="primary"
>
  Custom Gradient
</AnimatedButton>`} 
          language="tsx" 
          filename="components/example.tsx"
        />
      </div>

      {/* Accessibility Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="space-y-2">
          <p className="text-muted-foreground">
            The AnimatedButton component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Proper focus states with visible focus rings</li>
            <li>Correct ARIA attributes</li>
            <li>Keyboard navigation support</li>
            <li>Proper contrast ratios for text</li>
            <li>Disabled state handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButtonDocs;