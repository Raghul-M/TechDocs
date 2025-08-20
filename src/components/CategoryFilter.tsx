import { ProjectCategory } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  categories: ProjectCategory[];
  selectedCategories: ProjectCategory[];
  onCategoryToggle: (category: ProjectCategory) => void;
  onClearFilters: () => void;
}

const categoryColors: Record<ProjectCategory, string> = {
  'MLOps': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
  'LLM Ops': 'bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200',
  'DevOps': 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
  'GenAI': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
  'Full-Stack': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200',
  'Full-Stack / GenAI': 'bg-gradient-to-r from-green-100 to-purple-100 text-green-800 border-green-200 hover:from-green-200 hover:to-purple-200',
  'Cloud & DevOps': 'bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 border-indigo-200 hover:from-indigo-200 hover:to-blue-200',
  'Cloud/ ML': 'bg-gradient-to-r from-indigo-100 to-orange-100 text-indigo-800 border-indigo-200 hover:from-indigo-200 hover:to-orange-200',
  'Data Engineering': 'bg-cyan-100 text-cyan-800 border-cyan-200 hover:bg-cyan-200',
  'Cloud Architecture': 'bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200',
};

export const CategoryFilter = ({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearFilters
}: CategoryFilterProps) => {
  // Smart abbreviations for mobile display
  const getMobileDisplayName = (category: string): string => {
    const abbreviations: Record<string, string> = {
      'MLOps': 'MLOps',
      'LLM Ops': 'LLMOps', 
      'DevOps': 'DevOps',
      'GenAI': 'GenAI',
      'Full-Stack': 'Full-Stack',
      'Full-Stack / GenAI': 'FS/GenAI',
      'Cloud & DevOps': 'Cloud/DevOps',
      'Cloud/ ML': 'Cloud/ML',
      'Data Engineering': 'Data Eng',
      'Cloud Architecture': 'Cloud Arch',
    };
    
    return abbreviations[category] || category;
  };

  return (
    <div className="mb-8">
      <span className="text-sm font-medium text-foreground mb-3 block">Filter by category:</span>
      
      {/* Mobile Layout - 3 per row */}
      <div className="sm:hidden">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            const mobileDisplayName = getMobileDisplayName(category);
            return (
              <Badge
                key={category}
                variant={isSelected ? "default" : "outline"}
                className={`
                  cursor-pointer transition-smooth hover-lift text-xs
                  flex-shrink-0 justify-center text-center px-2 py-1
                  ${isSelected 
                    ? 'bg-primary text-primary-foreground border-primary hover:bg-primary-hover' 
                    : `${categoryColors[category]} border transition-colors`
                  }
                `}
                onClick={() => onCategoryToggle(category)}
              >
                <span className="truncate">
                  {mobileDisplayName}
                </span>
              </Badge>
            );
          })}
        </div>
        
        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground transition-quick text-xs w-full"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>

      {/* Desktop Layout - Flexible */}
      <div className="hidden sm:flex flex-wrap items-center gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <Badge
              key={category}
              variant={isSelected ? "default" : "outline"}
              className={`
                cursor-pointer transition-smooth hover-lift text-sm
                ${isSelected 
                  ? 'bg-primary text-primary-foreground border-primary hover:bg-primary-hover' 
                  : `${categoryColors[category]} border transition-colors`
                }
              `}
              onClick={() => onCategoryToggle(category)}
            >
              <span className="whitespace-nowrap">
                {category}
              </span>
            </Badge>
          );
        })}

        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground transition-quick text-sm"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
};