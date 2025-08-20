import { ArrowRight, Code, Database, Cloud, Layers, GitBranch, Brain, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-24">
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 max-w-3xl mx-auto text-balance leading-tight">
             My <span className="text-primary">Personal Projects</span> Journey ✨
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground">
              From idea to implementation
            </span>
          </h1>

          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="/Duplicate-bro.png" 
              alt="Personal Projects Hub illustration" 
              className="h-96 md:h-[500px] mx-auto object-contain"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted rounded-lg font-mono text-sm text-muted-foreground border border-border">
              <span>$</span>
              <span>pip install raghulm-projects</span>
            </div>
          </div>



          {/* Domain Features */}
          <div className="grid grid-cols-5 gap-4 md:gap-8 mt-20">
            <div className="text-center group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-indigo-200 transition-colors">
                <Cloud className="h-5 w-5 md:h-8 md:w-8 text-indigo-600" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3">Cloud & DevOps</h3>
            </div>

            <div className="text-center group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-purple-200 transition-colors">
                <Brain className="h-5 w-5 md:h-8 md:w-8 text-purple-600" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3">GenAI</h3>
            </div>

            <div className="text-center group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-orange-200 transition-colors">
                <Database className="h-5 w-5 md:h-8 md:w-8 text-orange-600" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3">AI/ML</h3>
            </div>

            <div className="text-center group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-green-200 transition-colors">
                <Layers className="h-5 w-5 md:h-8 md:w-8 text-green-600" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3">MLOps & LLMOps</h3>
            </div>

            <div className="text-center group ml-2 md:ml-4">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-gray-200 transition-colors">
                <Github className="h-5 w-5 md:h-8 md:w-8 text-gray-600" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3">Open Source</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};