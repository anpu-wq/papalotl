'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface FruitItem {
  id: number;
  name: string;
  image: string;
  count: number;
  isAnimating?: boolean;
}

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [fruits, setFruits] = useState<FruitItem[]>([
    { id: 1, name: '苹果', image: '/practice/images/樱桃小丸子图片生成 (10).png', count: 3 },
    { id: 2, name: '香蕉', image: '/practice/images/樱桃小丸子图片生成 (11).png', count: 2 },
    { id: 3, name: '橙子', image: '/practice/images/樱桃小丸子图片生成 (12).png', count: 4 }
  ]);
  const [score, setScore] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [message, setMessage] = useState('');

  const tasks = [
    {
      description: '小丸子想要把水果按数量从多到少排序',
      check: (fruits: FruitItem[]) => {
        const sorted = [...fruits].sort((a, b) => b.count - a.count);
        return JSON.stringify(fruits) === JSON.stringify(sorted);
      },
      hint: '使用 sort 方法，比较 count 属性'
    },
    {
      description: '小丸子想要找出数量最多的水果',
      check: (fruits: FruitItem[]) => {
        const max = Math.max(...fruits.map(f => f.count));
        return fruits[0].count === max;
      },
      hint: '使用 Math.max 和 map 方法'
    },
    {
      description: '小丸子想要把所有水果的数量加倍',
      check: (fruits: FruitItem[]) => {
        return fruits.every(f => f.count % 2 === 0);
      },
      hint: '使用 map 方法，将每个水果的数量乘以 2'
    }
  ];

  const handleSort = () => {
    setFruits(prev => {
      const newFruits = [...prev].sort((a, b) => b.count - a.count);
      return newFruits.map(f => ({ ...f, isAnimating: true }));
    });
    checkTask();
  };

  const handleFindMax = () => {
    setFruits(prev => {
      const max = Math.max(...prev.map(f => f.count));
      const maxFruit = prev.find(f => f.count === max);
      if (!maxFruit) return prev;
      
      return [
        { ...maxFruit, isAnimating: true },
        ...prev.filter(f => f.id !== maxFruit.id)
      ];
    });
    checkTask();
  };

  const handleDouble = () => {
    setFruits(prev => 
      prev.map(f => ({ ...f, count: f.count * 2, isAnimating: true }))
    );
    checkTask();
  };

  const checkTask = () => {
    setTimeout(() => {
      if (tasks[currentTask].check(fruits)) {
        setScore(score + 100);
        setMessage('太棒了！任务完成！');
        if (currentTask < tasks.length - 1) {
          setTimeout(() => {
            setCurrentTask(currentTask + 1);
            setMessage('');
          }, 1500);
        } else {
          setShowCongrats(true);
        }
      } else {
        setMessage('再试试看哦~');
      }
      setFruits(prev => prev.map(f => ({ ...f, isAnimating: false })));
    }, 500);
  };

  const resetGame = () => {
    setFruits([
      { id: 1, name: '苹果', image: '/practice/images/樱桃小丸子图片生成 (10).png', count: 3 },
      { id: 2, name: '香蕉', image: '/practice/images/樱桃小丸子图片生成 (11).png', count: 2 },
      { id: 3, name: '橙子', image: '/practice/images/樱桃小丸子图片生成 (12).png', count: 4 }
    ]);
    setScore(0);
    setCurrentTask(0);
    setShowCongrats(false);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (5).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (6).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[#FF6B6B] hover:text-[#FF8585] transition-colors">
            <span className="text-2xl">←</span>
            <span>回到小丸子的主页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (7).png"
              alt="小丸子"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#FF6B6B] mb-4">
            小丸子的水果店
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要整理水果店的库存！让我们一起学习数组操作吧 (◕‿◕✿)
          </p>
        </header>

        {!showGame ? (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-pink-100 mb-8">
              <div className="p-6 border-b border-pink-100">
                <h3 className="text-xl font-semibold text-[#FF6B6B] flex items-center gap-2">
                  <Image
                    src="/practice/images/樱桃小丸子图片生成 (8).png"
                    alt="魔法棒"
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  数组操作知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">排序</h3>
                    <p className="text-gray-600">
                      就像小丸子整理书包一样，把东西排得整整齐齐~
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">查找</h3>
                    <p className="text-gray-600">
                      就像小丸子在找自己最喜欢的零食一样！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">转换</h3>
                    <p className="text-gray-600">
                      就像小丸子把一个便当变成两个一样神奇！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowGame(true)}
                className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FF8585] transition-colors transform hover:scale-105 duration-200 flex items-center gap-2 mx-auto"
              >
                <Image
                  src="/practice/images/樱桃小丸子图片生成 (9).png"
                  alt="游戏"
                  width={24}
                  height={24}
                  className="inline-block"
                />
                来玩水果店游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            {!showCongrats ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">水果店游戏</h2>
                  <div className="flex items-center justify-center gap-4">
                    <p className="text-gray-600">得分: {score}</p>
                    <p className="text-gray-600">第 {currentTask + 1} 关，共 {tasks.length} 关</p>
                  </div>
                  <p className="text-lg text-[#FF6B6B] mt-4">
                    {tasks[currentTask].description}
                  </p>
                  {message && (
                    <p className={`mt-2 ${
                      message.includes('太棒') ? 'text-green-600' : 'text-orange-500'
                    }`}>
                      {message}
                    </p>
                  )}
                </div>

                <div className="max-w-2xl mx-auto mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    {fruits.map((fruit) => (
                      <div
                        key={fruit.id}
                        className={`bg-white rounded-lg shadow-md p-4 text-center transition-all duration-300 ${
                          fruit.isAnimating ? 'scale-110 ring-2 ring-[#FF6B6B]' : ''
                        }`}
                      >
                        <div className="w-20 h-20 mx-auto relative mb-2">
                          <Image
                            src={fruit.image}
                            alt={fruit.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-gray-700 mb-1">{fruit.name}</h3>
                        <p className="text-[#FF6B6B]">数量：{fruit.count}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleSort}
                    className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                  >
                    排序
                  </button>
                  <button
                    onClick={handleFindMax}
                    className="bg-[#FFD93D] text-white px-4 py-2 rounded-full hover:bg-[#FFE169] transition-colors"
                  >
                    找最多
                  </button>
                  <button
                    onClick={handleDouble}
                    className="bg-[#95E1D3] text-white px-4 py-2 rounded-full hover:bg-[#A5E9DB] transition-colors"
                  >
                    加倍
                  </button>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowGame(false)}
                    className="text-[#FF6B6B] hover:text-[#FF8585] transition-colors"
                  >
                    返回学习
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                  恭喜完成所有任务！
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  最终得分：{score}分
                </p>
                <p className="text-lg text-[#FF6B6B] mb-8">
                  你已经完全掌握了数组操作！(◕‿◕✿)
                </p>
                <div className="space-x-4">
                  <button
                    onClick={resetGame}
                    className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                  >
                    再玩一次
                  </button>
                  <button
                    onClick={() => setShowGame(false)}
                    className="bg-[#FFD93D] text-white px-6 py-2 rounded-full hover:bg-[#FFE169] transition-colors"
                  >
                    返回学习
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
} 