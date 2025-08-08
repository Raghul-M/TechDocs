import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import { sampleProjects } from '@/data/projects';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <HeroSection />
        <ProjectGrid 
          projects={sampleProjects}
          searchQuery={searchQuery}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
