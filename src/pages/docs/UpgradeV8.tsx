import { ArrowRight, Download, AlertTriangle, CheckCircle, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const UpgradeV8 = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>Updating to v8</h1>
      
      <p className="text-lg text-gray-600">
        Learn how to upgrade your Lovelocraft application from v7 to v8.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-yellow-800">
          <strong>Important:</strong> This is a major version update with breaking changes.
          Please read through all changes before upgrading.
        </p>
      </div>

      <h2>Breaking Changes</h2>

      <h3>React 18 Requirement</h3>
      <p>
        Lovelocraft v8 requires React 18 or higher. Update your React dependencies:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install react@^18.0.0 react-dom@^18.0.0`}
        </p>
      </div>

      <h3>TypeScript 5.0+</h3>
      <p>
        TypeScript 5.0 or higher is now required for better type inference and performance:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install typescript@^5.0.0 @types/react@^18.0.0 @types/react-dom@^18.0.0`}
        </p>
      </div>

      <h3>Component API Changes</h3>
      <p>
        Several component APIs have been updated for better consistency:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// v7 (old)
<Button variant="primary" size="lg">Click me</Button>

// v8 (new)
<Button variant="default" size="large">Click me</Button>`}
        </p>
      </div>

      <h2>Migration Steps</h2>

      <h3>1. Update Dependencies</h3>
      <p>
        First, update your package.json with the new versions:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install @lovelocraft/core@^8.0.0 @lovelocraft/ui@^8.0.0 @lovelocraft/utils@^8.0.0`}
        </p>
      </div>

      <h3>2. Update Configuration</h3>
      <p>
        The configuration file format has changed. Update your <code>lovelocraft.config.ts</code>:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// v7 configuration
export default {
  plugins: ['@lovelocraft/ui'],
  theme: {
    colors: {
      primary: '#007acc'
    }
  }
};

// v8 configuration
import { defineConfig } from '@lovelocraft/core';

export default defineConfig({
  plugins: ['@lovelocraft/ui'],
  theme: {
    extend: {
      colors: {
        primary: '#007acc'
      }
    }
  }
});`}
        </p>
      </div>

      <h3>3. Update Component Imports</h3>
      <p>
        Some component import paths have changed:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// v7 imports
import { Button } from '@lovelocraft/ui/Button';
import { Card } from '@lovelocraft/ui/Card';

// v8 imports
import { Button } from '@lovelocraft/ui';
import { Card } from '@lovelocraft/ui';`}
        </p>
      </div>

      <h3>4. Update Hook Usage</h3>
      <p>
        Some hooks have been renamed or have different signatures:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// v7 hook usage
const { data, loading, error } = useApi('/api/users');

// v8 hook usage
const { data, isLoading, error } = useQuery('/api/users');`}
        </p>
      </div>

      <h2>New Features</h2>

      <h3>Improved TypeScript Support</h3>
      <p>
        Better type inference and stricter type checking throughout the framework.
      </p>

      <h3>Performance Improvements</h3>
      <ul>
        <li>Faster build times with improved bundling</li>
        <li>Better tree-shaking for smaller bundle sizes</li>
        <li>Optimized component rendering</li>
        <li>Improved memory usage</li>
      </ul>

      <h3>New Components</h3>
      <ul>
        <li><strong>DataTable:</strong> Advanced table component with sorting and filtering</li>
        <li><strong>DatePicker:</strong> Comprehensive date selection component</li>
        <li><strong>MultiSelect:</strong> Enhanced multi-selection dropdown</li>
        <li><strong>FileUpload:</strong> Drag-and-drop file upload component</li>
      </ul>

      <h3>Enhanced Developer Experience</h3>
      <ul>
        <li>Better error messages and debugging information</li>
        <li>Improved hot module replacement</li>
        <li>Enhanced VS Code extension features</li>
        <li>Better documentation and examples</li>
      </ul>

      <h2>Deprecated Features</h2>

      <p>
        The following features have been deprecated and will be removed in v9:
      </p>

      <ul>
        <li><code>useApi</code> hook (use <code>useQuery</code> instead)</li>
        <li><code>createStore</code> function (use <code>createSlice</code> instead)</li>
        <li>Legacy theme configuration format</li>
        <li>Old component variant names</li>
      </ul>

      <h2>Testing Your Upgrade</h2>

      <p>
        After upgrading, thoroughly test your application:
      </p>

      <ol>
        <li>Run your test suite: <code>npm test</code></li>
        <li>Start the development server: <code>npm run dev</code></li>
        <li>Check all pages and components render correctly</li>
        <li>Test all user interactions and forms</li>
        <li>Verify API calls and data fetching work</li>
        <li>Check for console errors and warnings</li>
      </ol>

      <h2>Rollback Plan</h2>

      <p>
        If you encounter issues after upgrading, you can rollback to v7:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Revert to v7
npm install @lovelocraft/core@^7.0.0 @lovelocraft/ui@^7.0.0 @lovelocraft/utils@^7.0.0

# Restore v7 configuration
# (manually revert your config changes)`}
        </p>
      </div>

      <h2>Getting Help</h2>

      <p>
        If you encounter issues during the upgrade:
      </p>

      <ul>
        <li>Check the <a href="/docs/migration-guide" className="text-blue-600 hover:text-blue-800">detailed migration guide</a></li>
        <li>Search existing issues on GitHub</li>
        <li>Ask for help in our Discord community</li>
        <li>Create a new issue with detailed information</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
        <p className="text-green-800">
          <strong>Success!</strong> Once you've completed the upgrade, you'll have access to
          all the new features and improvements in Lovelocraft v8.
        </p>
      </div>
    </div>
  );
};

export default UpgradeV8;
