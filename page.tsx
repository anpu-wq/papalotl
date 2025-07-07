import Link from 'next/link';
import Image from 'next/image';
import ExerciseCard from './exercise-card';
import WakatimeStats from './wakatime-stats';
import exercises from './exercises.json';

function Navbar() {
  return (
    <nav className="bg-[#FF6B6B] p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (1).png"
            alt="Maruko Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white text-xl font-bold">小丸子的编程乐园</span>
        </div>
        
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-200 transition-colors">
            首页
          </Link>
          <Link href="/archive" className="text-white hover:text-yellow-200 transition-colors">
            归档
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (2).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (3).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
      </div>

      <Navbar />

      <main className="container mx-auto px-4 py-24">
        {/* 欢迎区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#FF6B6B] mb-4">
            欢迎来到小丸子的编程乐园！
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            和小丸子一起学习编程吧！这里有有趣的练习题和小游戏，让我们一起成长进步！
          </p>
        </div>

        {/* 练习卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              title={exercise.title}
              description={exercise.description}
              difficulty={exercise.difficulty as 'easy' | 'medium' | 'hard'}
              imageIndex={(index % 15) + 1}
              href={exercise.link}
            />
          ))}
        </div>

        {/* 学习统计 */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4 text-center">
            今日学习进度
          </h2>
          <WakatimeStats />
        </div>
      </main>
    </div>
  );
}
