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
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm font-medium text-foreground">Filter by category:</span>
      
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <Badge
            key={category}
            variant={isSelected ? "default" : "outline"}
            className={`
              cursor-pointer transition-smooth hover-lift
              ${isSelected 
                ? 'bg-primary text-primary-foreground border-primary hover:bg-primary-hover' 
                : `${categoryColors[category]} border transition-colors`
              }
            `}
            onClick={() => onCategoryToggle(category)}
          >
            {category}
          </Badge>
        );
      })}

      {selectedCategories.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-muted-foreground hover:text-foreground transition-quick"
        >
          <X className="h-4 w-4 mr-1" />
          Clear filters
        </Button>
      )}
    </div>
  );
};