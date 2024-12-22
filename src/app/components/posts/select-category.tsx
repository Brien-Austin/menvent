import { Category } from '@/app/types/post'

import { Button } from '@/components/ui/button'
import React from 'react'

interface SelectCategoriesProps {
    category: Category,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SelectCategories: React.FC<SelectCategoriesProps> = ({ category, setSelectedCategory }) => {
    const handleSelect = () => {
      setSelectedCategory(category.id);
    };
  
    return (
        <div className="p-2">
        <Button 
          variant="outline" 
          className="flex flex-col items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 w-full h-20"
          onClick={handleSelect}
        >
          <div className="text-xl ">{category.emoji}</div>
          <div className="text-sm font-medium">{category.name}</div>
        </Button>
      </div>
    )
  }
  

export default SelectCategories