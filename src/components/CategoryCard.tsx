import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  iconName: string;
  color: string;
  count: number;
}

const CategoryCard = ({
  title,
  description,
  iconName,
  color,
  count,
}: CategoryCardProps) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
      <div
        className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon name={iconName as any} className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {count.toLocaleString()} товаров
        </span>
        <Icon
          name="ArrowRight"
          className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
