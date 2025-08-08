import { ArrowRight, Package, Globe, Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const PackagesCDN = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>Packages & CDN</h1>
      
      <p className="text-lg text-gray-600">
        Learn how to include Lovelocraft in your project using npm packages or CDN links.
      </p>

      <h2>NPM Packages</h2>

      <p>
        The recommended way to use Lovelocraft is through npm packages. This gives you
        the best development experience with TypeScript support and tree-shaking.
      </p>

      <h3>Core Package</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install @lovelocraft/core`}
        </p>
      </div>

      <h3>UI Components</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install @lovelocraft/ui`}
        </p>
      </div>

      <h3>Utilities</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`npm install @lovelocraft/utils`}
        </p>
      </div>

      <h2>CDN Usage</h2>

      <p>
        For quick prototypes or when you can't use a build tool, you can include
        Lovelocraft directly via CDN.
      </p>

      <h3>CSS</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`<link rel="stylesheet" href="https://unpkg.com/@lovelocraft/ui@latest/dist/index.css">`}
        </p>
      </div>

      <h3>JavaScript</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`<script src="https://unpkg.com/@lovelocraft/core@latest/dist/index.umd.js"></script>`}
        </p>
      </div>

      <h2>Package Structure</h2>

      <h3>@lovelocraft/core</h3>
      <p>Core framework functionality including:</p>
      <ul>
        <li>Component system</li>
        <li>State management</li>
        <li>Routing</li>
        <li>Build tools</li>
      </ul>

      <h3>@lovelocraft/ui</h3>
      <p>Pre-built UI components including:</p>
      <ul>
        <li>Buttons and form elements</li>
        <li>Navigation components</li>
        <li>Layout components</li>
        <li>Data display components</li>
      </ul>

      <h3>@lovelocraft/utils</h3>
      <p>Utility functions and helpers:</p>
      <ul>
        <li>String manipulation</li>
        <li>Date formatting</li>
        <li>Validation helpers</li>
        <li>Common utilities</li>
      </ul>

      <h2>Version Management</h2>

      <p>
        It's important to keep your packages up to date. You can check for updates using:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update to latest major version
npm install @lovelocraft/core@latest`}
        </p>
      </div>

      <h2>Peer Dependencies</h2>

      <p>
        Lovelocraft packages have the following peer dependencies:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`}
        </p>
      </div>

      <h2>Tree Shaking</h2>

      <p>
        All Lovelocraft packages support tree shaking, which means only the code you
        actually use will be included in your final bundle.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// Only Button will be included in the bundle
import { Button } from '@lovelocraft/ui';

// Avoid this - imports the entire package
import * as UI from '@lovelocraft/ui';`}
        </p>
      </div>

      <h2>TypeScript Support</h2>

      <p>
        All packages include TypeScript definitions out of the box. No additional
        @types packages are required.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// TypeScript will provide full type checking and autocomplete
import { Button, ButtonProps } from '@lovelocraft/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};`}
        </p>
      </div>

      <h2>Bundle Size</h2>

      <p>
        Lovelocraft is designed to be lightweight. Here are the approximate bundle sizes:
      </p>

      <ul>
        <li><strong>@lovelocraft/core:</strong> ~15KB (gzipped)</li>
        <li><strong>@lovelocraft/ui:</strong> ~25KB (gzipped)</li>
        <li><strong>@lovelocraft/utils:</strong> ~5KB (gzipped)</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
        <p className="text-green-800">
          <strong>Note:</strong> These sizes are approximate and may vary depending on
          which features you use and how your bundler optimizes the code.
        </p>
      </div>
    </div>
  );
};

export default PackagesCDN;
