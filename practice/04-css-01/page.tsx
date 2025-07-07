'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Block {
  id: number;
  color: string;
  float: string;
  isCorrect: boolean;
  isAnimating?: boolean;
}

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([
    { id: 1, color: '#FF6B6B', float: '', isCorrect: false },
    { id: 2, color: '#FFD93D', float: '', isCorrect: false },
    { id: 3, color: '#95E1D3', float: '', isCorrect: false }
  ]);
  const [score, setScore] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleFloat = (id: number, float: 'left' | 'right' | 'none') => {
    setAttempts(prev => prev + 1);
    
    const newBlocks = blocks.map(block => {
      if (block.id === id) {
        // 根据不同的块设置正确的浮动方向
        const isCorrect = (
          (id === 1 && float === 'left') ||
          (id === 2 && float === 'right') ||
          (id === 3 && float === 'none')
        );
        return { ...block, float, isCorrect, isAnimating: true };
      }
      return block;
    });
    setBlocks(newBlocks);
    
    // 移除动画标记
    setTimeout(() => {
      setBlocks(prev => prev.map(block => 
        block.id === id ? { ...block, isAnimating: false } : block
      ));
    }, 500);
    
    // 计算得分
    const correctCount = newBlocks.filter(block => block.isCorrect).length;
    const newScore = correctCount * 33;
    setScore(newScore);

    // 检查是否全部正确
    if (correctCount === 3) {
      setTimeout(() => {
        setShowCongrats(true);
      }, 1000);
    }
  };

  const resetGame = () => {
    setBlocks([
      { id: 1, color: '#FF6B6B', float: '', isCorrect: false },
      { id: 2, color: '#FFD93D', float: '', isCorrect: false },
      { id: 3, color: '#95E1D3', float: '', isCorrect: false }
    ]);
    setScore(0);
    setShowCongrats(false);
    setAttempts(0);
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
            小丸子学习漂浮术
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要教大家CSS漂浮术！让我们一起学习如何让元素像小船一样自由漂浮吧 (◕‿◕✿)
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
                  漂浮术知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">向左漂浮</h3>
                    <p className="text-gray-600">
                      就像小丸子最喜欢的小船，总是向左边漂~
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">向右漂浮</h3>
                    <p className="text-gray-600">
                      有时候小船也会向右边漂呢！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">不要漂浮</h3>
                    <p className="text-gray-600">
                      小船也需要停靠的港湾哦~
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
                来玩漂浮小游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            {!showCongrats ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">漂浮小游戏</h2>
                  <p className="text-gray-600 mb-2">
                    帮小丸子指挥这些小船该往哪个方向漂浮吧！
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-[#FF6B6B] font-bold">
                      当前得分: {score}分
                    </div>
                    <div className="text-gray-500 text-sm">
                      尝试次数: {attempts}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* 游戏区域 */}
                  <div className="relative h-64 bg-[#E0F4FF] rounded-lg p-4 overflow-hidden">
                    {blocks.map(block => (
                      <div
                        key={block.id}
                        className={`absolute w-20 h-20 rounded-lg transition-all duration-300 flex items-center justify-center text-white font-bold
                          ${block.float === 'left' ? 'left-4' : block.float === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'}
                          ${block.isCorrect ? 'ring-4 ring-green-400' : ''}
                          ${block.isAnimating ? 'scale-110' : ''}`}
                        style={{
                          backgroundColor: block.color,
                          top: `${block.id * 25}%`
                        }}
                      >
                        块 {block.id}
                      </div>
                    ))}
                  </div>

                  {/* 控制按钮 */}
                  <div className="grid grid-cols-3 gap-4">
                    {blocks.map(block => (
                      <div key={block.id} className="bg-pink-50 p-4 rounded-lg">
                        <p className="text-center mb-2">块 {block.id}</p>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleFloat(block.id, 'left')}
                            className={`px-3 py-1 rounded hover:opacity-80 transition-all ${
                              block.float === 'left' ? 'bg-[#FF6B6B] ring-2 ring-[#FF6B6B]' : 'bg-[#FF6B6B]'
                            } text-white`}
                          >
                            左漂
                          </button>
                          <button
                            onClick={() => handleFloat(block.id, 'none')}
                            className={`px-3 py-1 rounded hover:opacity-80 transition-all ${
                              block.float === 'none' ? 'bg-[#FFD93D] ring-2 ring-[#FFD93D]' : 'bg-[#FFD93D]'
                            } text-white`}
                          >
                            停靠
                          </button>
                          <button
                            onClick={() => handleFloat(block.id, 'right')}
                            className={`px-3 py-1 rounded hover:opacity-80 transition-all ${
                              block.float === 'right' ? 'bg-[#95E1D3] ring-2 ring-[#95E1D3]' : 'bg-[#95E1D3]'
                            } text-white`}
                          >
                            右漂
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowGame(false)}
                      className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                    >
                      返回学习
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                  太棒了！你完成了漂浮游戏！
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  总共尝试了 {attempts} 次
                </p>
                {attempts <= 6 ? (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    你真是个浮动布局专家！(◕‿◕✿)
                  </p>
                ) : (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    通过不断尝试，你成功掌握了浮动布局！(◕‿◕✿)
                  </p>
                )}
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