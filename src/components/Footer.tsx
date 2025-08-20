import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <div className="mb-0">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TechDocs</h3>
                <p className="text-sm text-gray-300">Technical Project Hub</p>
              </div>
            </div>

            <div className="flex justify-center space-x-3 mb-0">
              <a
                href="https://github.com/Raghul-M"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="sm" className="border-white text-white bg-black hover:bg-gray-800">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/m-raghul/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="sm" className="border-white text-white bg-black hover:bg-gray-800">
                  <Linkedin className="h-4 w-4 mr-2 text-blue-500" />
                  LinkedIn
                </Button>
              </a>
              <a
                href="mailto:contact@raghul.in"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="sm" className="border-white text-white bg-black hover:bg-gray-800">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-gray-300">
              © 2025 TechDocs. All rights reserved.
            </p>
                          <p className="text-sm text-gray-300 mt-2">
                Built with  ❤️  by Raghul M
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};