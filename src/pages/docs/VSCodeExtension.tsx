import { ArrowRight, Code, Download, Settings, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const VSCodeExtension = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>VS Code Extension</h1>
      
      <p className="text-lg text-gray-600">
        Enhance your development experience with the official Lovelocraft VS Code extension.
      </p>

      <h2>Installation</h2>

      <p>
        The Lovelocraft VS Code extension is available in the Visual Studio Code marketplace.
        You can install it directly from VS Code or download it from the marketplace.
      </p>

      <h3>From VS Code</h3>
      <ol>
        <li>Open VS Code</li>
        <li>Press <code>Ctrl+Shift+X</code> (Windows/Linux) or <code>Cmd+Shift+X</code> (macOS) to open the Extensions view</li>
        <li>Search for "Lovelocraft"</li>
        <li>Click "Install" on the official Lovelocraft extension</li>
      </ol>

      <h3>From Marketplace</h3>
      <p>
        Visit the
        <a href="https://marketplace.visualstudio.com/items?itemName=lovelocraft.lovelocraft" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          VS Code Marketplace
        </a>
        to install the extension.
      </p>

      <h2>Features</h2>

      <h3>IntelliSense</h3>
      <p>
        Get intelligent code completion, parameter info, and quick info for all Lovelocraft
        components and APIs.
      </p>

      <h3>Syntax Highlighting</h3>
      <p>
        Enhanced syntax highlighting for Lovelocraft-specific syntax and JSX templates.
      </p>

      <h3>Error Detection</h3>
      <p>
        Real-time error detection and validation for Lovelocraft components and configuration.
      </p>

      <h3>Code Actions</h3>
      <p>
        Quick fixes and refactoring suggestions for common Lovelocraft patterns.
      </p>

      <h3>Project Templates</h3>
      <p>
        Create new Lovelocraft projects directly from VS Code using the command palette.
      </p>

      <h2>Commands</h2>

      <p>
        The extension provides several commands that you can access via the command palette
        (<code>Ctrl+Shift+P</code> or <code>Cmd+Shift+P</code>):
      </p>

      <h3>Lovelocraft: Create New Project</h3>
      <p>Create a new Lovelocraft project with the CLI</p>

      <h3>Lovelocraft: Start Development Server</h3>
      <p>Start the development server for the current project</p>

      <h3>Lovelocraft: Build Project</h3>
      <p>Build the current project for production</p>

      <h3>Lovelocraft: Open Documentation</h3>
      <p>Open the Lovelocraft documentation in your browser</p>

      <h2>Configuration</h2>

      <p>
        You can customize the extension behavior through VS Code settings:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// settings.json
{
  "lovelocraft.autoStartDevServer": true,
  "lovelocraft.defaultPort": 3000,
  "lovelocraft.enableTelemetry": false,
  "lovelocraft.templatePath": "./templates"
}`}
        </p>
      </div>

      <h3>Settings Reference</h3>

      <ul>
        <li><strong>autoStartDevServer:</strong> Automatically start dev server when opening a project</li>
        <li><strong>defaultPort:</strong> Default port for the development server</li>
        <li><strong>enableTelemetry:</strong> Enable usage analytics (optional)</li>
        <li><strong>templatePath:</strong> Custom path for project templates</li>
      </ul>

      <h2>Workspace Integration</h2>

      <p>
        The extension automatically detects Lovelocraft projects and provides
        contextual features based on your project structure.
      </p>

      <h3>Project Detection</h3>
      <p>
        The extension looks for the following files to identify a Lovelocraft project:
      </p>

      <ul>
        <li><code>package.json</code> with Lovelocraft dependencies</li>
        <li><code>lovelocraft.config.js</code> or <code>lovelocraft.config.ts</code></li>
        <li><code>src/</code> directory with typical Lovelocraft structure</li>
      </ul>

      <h3>Status Bar</h3>
      <p>
        When working in a Lovelocraft project, you'll see a status bar item showing:
      </p>

      <ul>
        <li>Current project name</li>
        <li>Development server status</li>
        <li>Quick actions (start/stop server, build)</li>
      </ul>

      <h2>Debugging</h2>

      <p>
        The extension includes debugging support for Lovelocraft applications:
      </p>

      <h3>Launch Configuration</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-mono">
          {`// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Lovelocraft App",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "\${workspaceFolder}/src"
    }
  ]
}`}
        </p>
      </div>

      <h2>Troubleshooting</h2>

      <h3>Extension Not Working</h3>
      <p>
        If the extension isn't working as expected:
      </p>

      <ol>
        <li>Check that you're in a valid Lovelocraft project</li>
        <li>Reload VS Code (<code>Ctrl+Shift+P</code> → "Developer: Reload Window")</li>
        <li>Check the extension output panel for error messages</li>
        <li>Verify that the CLI is installed and accessible</li>
      </ol>

      <h3>Performance Issues</h3>
      <p>
        If you experience performance issues:
      </p>

      <ul>
        <li>Disable other extensions that might conflict</li>
        <li>Check your VS Code workspace settings</li>
        <li>Ensure you have sufficient system resources</li>
      </ul>

      <h2>Feedback</h2>

      <p>
        We welcome feedback and contributions to improve the VS Code extension:
      </p>

      <ul>
        <li>Report issues on our GitHub repository</li>
        <li>Suggest new features through GitHub discussions</li>
        <li>Contribute code improvements via pull requests</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
        <p className="text-blue-800">
          <strong>Tip:</strong> The VS Code extension is open source and available on
          <a href="https://github.com/lovelocraft/vscode-extension" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> GitHub</a>.
        </p>
      </div>
    </div>
  );
};

export default VSCodeExtension;
