import Image from "next/image";
import Link from "next/link";

interface ExerciseCardProps {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageIndex: number;
  href: string;
}

export default function ExerciseCard({ title, description, difficulty, imageIndex, href }: ExerciseCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  const difficultyText = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  };

  return (
    <Link href={href}>
      <div className="maruko-card p-4 cursor-pointer">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={`/practice/images/樱桃小丸子图片生成 (${imageIndex}).png`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#FF6B6B]">{title}</h3>
            <span className={`px-2 py-1 rounded-full text-sm ${difficultyColors[difficulty]}`}>
              {difficultyText[difficulty]}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex justify-end">
            <button className="maruko-button">
              开始练习
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
} 