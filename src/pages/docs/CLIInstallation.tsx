import { ArrowRight, Terminal, Download, Code, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CLIInstallation = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>CLI Installation</h1>
      
      <p className="text-lg text-gray-600">
        Install the Lovelocraft CLI to create and manage your projects from the command line.
      </p>

      <h2>Installation</h2>

      <p>
        The Lovelocraft CLI is available as an npm package. You can install it globally
        to use it from anywhere on your system.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          # Using npm<br/>
          npm install -g @lovelocraft/cli<br/><br/>
          # Using yarn<br/>
          yarn global add @lovelocraft/cli<br/><br/>
          # Using pnpm<br/>
          pnpm add -g @lovelocraft/cli
        </p>
      </div>

      <h2>Verification</h2>

      <p>
        After installation, verify that the CLI is working correctly:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          # Check version<br/>
          lovelocraft --version<br/><br/>
          # Show help<br/>
          lovelocraft --help
        </p>
      </div>

      <h2>Creating a New Project</h2>

      <p>
        Use the CLI to create a new Lovelocraft project:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          # Create a new project<br/>
          lovelocraft create my-app<br/><br/>
          # Navigate to the project<br/>
          cd my-app<br/><br/>
          # Install dependencies<br/>
          npm install<br/><br/>
          # Start development server<br/>
          npm run dev
        </p>
      </div>

      <h2>Available Commands</h2>

      <h3>create</h3>
      <p>Create a new Lovelocraft project</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`lovelocraft create <project-name> [options]`}
        </p>
      </div>

      <h3>dev</h3>
      <p>Start the development server</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`lovelocraft dev [options]`}
        </p>
      </div>

      <h3>build</h3>
      <p>Build the project for production</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`lovelocraft build [options]`}
        </p>
      </div>

      <h3>preview</h3>
      <p>Preview the production build locally</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`lovelocraft preview [options]`}
        </p>
      </div>

      <h2>Project Templates</h2>

      <p>
        The CLI comes with several project templates to get you started quickly:
      </p>

      <ul>
        <li><strong>default</strong> - Basic React + TypeScript template</li>
        <li><strong>minimal</strong> - Minimal setup with essential features</li>
        <li><strong>full</strong> - Full-featured template with all integrations</li>
        <li><strong>ecommerce</strong> - E-commerce focused template</li>
        <li><strong>dashboard</strong> - Admin dashboard template</li>
      </ul>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Create project with specific template
lovelocraft create my-app --template dashboard`}
        </p>
      </div>

      <h2>Configuration</h2>

      <p>
        The CLI can be configured using a configuration file or environment variables:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Create config file
touch .lovelocraftrc.json

# Example configuration
{
  "packageManager": "npm",
  "defaultTemplate": "default",
  "autoInstall": true
}`}
        </p>
      </div>

      <h2>Troubleshooting</h2>

      <h3>Permission Errors</h3>
      <p>
        If you encounter permission errors on macOS or Linux, you may need to use sudo:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`sudo npm install -g @lovelocraft/cli`}
        </p>
      </div>

      <h3>Command Not Found</h3>
      <p>
        If the <code>lovelocraft</code> command is not found, check your PATH:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`# Check npm global bin location
npm config get prefix

# Add to PATH if needed
export PATH="$PATH:$(npm config get prefix)/bin"`}
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
        <p className="text-blue-800">
          <strong>Tip:</strong> For the best development experience, we recommend using
          the VS Code extension which provides additional features and integrations.
        </p>
      </div>
    </div>
  );
};

export default CLIInstallation;
