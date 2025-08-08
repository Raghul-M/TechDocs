import { ArrowRight, BookOpen, Code, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const NextSteps = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>Next Steps</h1>
      
      <p className="text-lg text-gray-600">
        Now that you have Lovelocraft set up, here's what you can do next to build your application.
      </p>

      <h2>Start Building</h2>

      <p>
        With your development environment ready, you can start building your Lovelocraft application.
        Here are some recommended next steps:
      </p>

      <h3>1. Explore the Project Structure</h3>
      <p>
        Familiarize yourself with the default project structure:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          my-app/<br/>
          ├── src/<br/>
          │   ├── components/     # Reusable components<br/>
          │   ├── pages/         # Page components<br/>
          │   ├── hooks/         # Custom React hooks<br/>
          │   ├── utils/         # Utility functions<br/>
          │   ├── types/         # TypeScript type definitions<br/>
          │   └── main.tsx       # Application entry point<br/>
          ├── public/            # Static assets<br/>
          ├── package.json       # Dependencies and scripts<br/>
          └── lovelocraft.config.ts  # Configuration file
        </p>
      </div>

      <h3>2. Create Your First Component</h3>
      <p>
        Start by creating a simple component to understand the basics:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// src/components/Welcome.tsx
import React from 'react';

interface WelcomeProps {
  name: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-semibold">Welcome, {name}!</h2>
      <p>You're ready to build amazing things with Lovelocraft.</p>
    </div>
  );
};`}
        </p>
      </div>

      <h3>3. Add Routing</h3>
      <p>
        Set up routing for your application:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
        </p>
      </div>

      <h2>Learning Path</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Beginner</h3>
          <ul className="space-y-2">
            <li>• <a href="/docs/components" className="text-blue-600 hover:text-blue-800">Components</a></li>
            <li>• <a href="/docs/routing" className="text-blue-600 hover:text-blue-800">Routing</a></li>
            <li>• <a href="/docs/styling" className="text-blue-600 hover:text-blue-800">Styling</a></li>
            <li>• <a href="/docs/state-management" className="text-blue-600 hover:text-blue-800">State Management</a></li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Intermediate</h3>
          <ul className="space-y-2">
            <li>• <a href="/docs/hooks" className="text-blue-600 hover:text-blue-800">Custom Hooks</a></li>
            <li>• <a href="/docs/forms" className="text-blue-600 hover:text-blue-800">Forms & Validation</a></li>
            <li>• <a href="/docs/api-integration" className="text-blue-600 hover:text-blue-800">API Integration</a></li>
            <li>• <a href="/docs/testing" className="text-blue-600 hover:text-blue-800">Testing</a></li>
          </ul>
        </div>
      </div>

      <h2>Best Practices</h2>

      <h3>Code Organization</h3>
      <ul>
        <li>Keep components small and focused on a single responsibility</li>
        <li>Use TypeScript for better type safety and developer experience</li>
        <li>Follow consistent naming conventions</li>
        <li>Organize files by feature rather than type</li>
      </ul>

      <h3>Performance</h3>
      <ul>
        <li>Use React.memo for expensive components</li>
        <li>Implement proper dependency arrays in useEffect</li>
        <li>Lazy load components and routes when appropriate</li>
        <li>Optimize bundle size with code splitting</li>
      </ul>

      <h3>Accessibility</h3>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Provide proper ARIA labels and roles</li>
        <li>Ensure keyboard navigation works</li>
        <li>Test with screen readers</li>
      </ul>

      <h2>Development Workflow</h2>

      <h3>Daily Development</h3>
      <ol>
        <li>Start the development server: <code>npm run dev</code></li>
        <li>Make changes to your code</li>
        <li>See changes reflected immediately in the browser</li>
        <li>Use the browser's developer tools for debugging</li>
        <li>Write tests for new features</li>
      </ol>

      <h3>Testing Your Application</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e`}
        </p>
      </div>

      <h2>Deployment</h2>

      <p>
        When you're ready to deploy your application:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Build for production
npm run build

# Preview the production build
npm run preview

# Deploy to your preferred platform
# (Vercel, Netlify, AWS, etc.)`}
        </p>
      </div>

      <h2>Community & Support</h2>

      <p>
        Join the Lovelocraft community to get help and share your experiences:
      </p>

      <ul>
        <li><strong>Discord:</strong> Join our Discord server for real-time discussions</li>
        <li><strong>GitHub:</strong> Report issues and contribute to the project</li>
        <li><strong>Stack Overflow:</strong> Ask questions with the #lovelocraft tag</li>
        <li><strong>Blog:</strong> Read tutorials and updates on our blog</li>
      </ul>

      <h2>Examples & Templates</h2>

      <p>
        Explore our collection of examples and templates to learn different patterns:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold">Todo App</h4>
          <p className="text-sm text-gray-600">Basic CRUD operations with state management</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold">E-commerce</h4>
          <p className="text-sm text-gray-600">Product catalog with shopping cart</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold">Dashboard</h4>
          <p className="text-sm text-gray-600">Admin dashboard with charts and tables</p>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
        <p className="text-green-800">
          <strong>Congratulations!</strong> You're now ready to build amazing applications with Lovelocraft.
          Start with a simple project and gradually add more complex features as you become comfortable with the framework.
        </p>
      </div>
    </div>
  );
};

export default NextSteps;
