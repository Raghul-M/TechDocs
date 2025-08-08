import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnvironmentSetup = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Environment Setup</h1>
      <p className="text-lg text-gray-700 mb-8">
        To get started with TechDocs, you need Node.js and a code editor.
      </p>

      <section className="mb-8">
        <h2 id="terminal" className="text-2xl font-bold text-gray-900 mb-4">Terminal</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
            <div>
              <p className="text-yellow-800 text-sm">
                Make sure you have access to a terminal on your system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="node-js" className="text-2xl font-bold text-gray-900 mb-4">Node & npm</h2>
        <p className="text-gray-700 mb-4">
          Install Node.js version 18 or higher from the official website.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <code className="text-sm text-gray-800">
            node --version<br/>
            npm --version
          </code>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="package-manager" className="text-2xl font-bold text-gray-900 mb-4">Package Manager</h2>
        <p className="text-gray-700 mb-4">
          npm comes with Node.js, but you can also use yarn or pnpm.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <code className="text-sm text-gray-800">
            npm install -g @techdocs/cli
          </code>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="ide-setup" className="text-2xl font-bold text-gray-900 mb-4">IDE Setup</h2>
        <p className="text-gray-700 mb-4">
          We recommend Visual Studio Code with these extensions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>TypeScript and JavaScript Language Features</li>
          <li>Tailwind CSS IntelliSense</li>
          <li>Prettier - Code formatter</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 id="browser-setup" className="text-2xl font-bold text-gray-900 mb-4">Browser Setup</h2>
        <p className="text-gray-700 mb-4">
          Use a modern browser with developer tools:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Chrome (recommended)</li>
          <li>Firefox</li>
          <li>Safari</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 id="git-setup" className="text-2xl font-bold text-gray-900 mb-4">Git</h2>
        <p className="text-gray-700 mb-4">
          Install Git for version control:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <code className="text-sm text-gray-800">
            git --version
          </code>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="next-steps" className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <p className="text-gray-700 mb-6">
          Once your environment is set up, proceed to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/docs/cli-installation" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowRight className="h-4 w-4 mr-2" />
            CLI Installation
          </Link>
          <Link to="/docs/packages-cdn" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowRight className="h-4 w-4 mr-2" />
            Packages & CDN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentSetup;
