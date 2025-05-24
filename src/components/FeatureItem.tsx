import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  emoji?: string;
  children: React.ReactNode;
  bad?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, emoji, children, bad = false }) => {
  return (
    <div className="flex items-start mb-4 group">
      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 
        ${bad ? 'text-red-500' : 'text-green-500'}`}>
        {emoji ? (
          <span className="text-xl">{emoji}</span>
        ) : (
          <Icon className="w-5 h-5" />
        )}
      </div>
      <div className="text-lg">
        {children}
      </div>
    </div>
  );
};

export default FeatureItem;