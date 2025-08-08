import { ProjectCategory } from '@/types/project';
import { Button } from '@/components/ui/button';
import { Search, FolderX } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
  selectedCategories: ProjectCategory[];
  onClearFilters: () => void;
}

export const EmptyState = ({ 
  searchQuery, 
  selectedCategories, 
  onClearFilters 
}: EmptyStateProps) => {
  const hasFilters = searchQuery || selectedCategories.length > 0;

  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
        {hasFilters ? (
          <Search className="h-8 w-8 text-muted-foreground" />
        ) : (
          <FolderX className="h-8 w-8 text-muted-foreground" />
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {hasFilters ? 'No projects found' : 'No projects available'}
      </h3>
      
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {hasFilters 
          ? 'Try adjusting your search terms or clearing the filters to see more projects.'
          : 'There are currently no projects to display. Check back later for updates.'
        }
      </p>

      {hasFilters && (
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="bg-surface hover:bg-surface-elevated border-border transition-smooth"
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
};