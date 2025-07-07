'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface BoxState {
  value: string;
  isCorrect: boolean;
  isAnimating?: boolean;
}

interface Boxes {
  content: BoxState;
  padding: BoxState;
  border: BoxState;
  margin: BoxState;
}

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [boxes, setBoxes] = useState<Boxes>({
    content: { value: '内容区', isCorrect: false },
    padding: { value: '内边距', isCorrect: false },
    border: { value: '边框', isCorrect: false },
    margin: { value: '外边距', isCorrect: false }
  });
  const [showCongrats, setShowCongrats] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleDragStart = (item: string) => {
    setDraggedItem(item);
  };

  const handleDrop = (target: keyof Boxes) => {
    if (!draggedItem) return;
    
    const newBoxes = { ...boxes };
    // 添加动画标记
    newBoxes[target].isAnimating = true;
    newBoxes[target].value = draggedItem;
    newBoxes[target].isCorrect = draggedItem === target;
    setBoxes(newBoxes);
    setDraggedItem(null);
    setAttempts(prev => prev + 1);

    // 移除动画标记
    setTimeout(() => {
      setBoxes(prev => ({
        ...prev,
        [target]: { ...prev[target], isAnimating: false }
      }));
    }, 500);

    // 检查是否全部正确
    const allCorrect = Object.values(newBoxes).every(box => box.isCorrect);
    if (allCorrect) {
      setTimeout(() => {
        setShowCongrats(true);
      }, 1000);
    }
  };

  const resetGame = () => {
    setBoxes({
      content: { value: '内容区', isCorrect: false },
      padding: { value: '内边距', isCorrect: false },
      border: { value: '边框', isCorrect: false },
      margin: { value: '外边距', isCorrect: false }
    });
    setShowCongrats(false);
    setAttempts(0);
  };

  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (10).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (11).png"
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
              src="/practice/images/樱桃小丸子图片生成 (12).png"
              alt="小丸子"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#FF6B6B] mb-4">
            小丸子的盒子世界大冒险
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要带大家探索神奇的盒子世界！每个元素都是一个盒子，
            让我们一起学习盒子的构成吧 (◕‿◕✿)
          </p>
        </header>

        {!showGame ? (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-pink-100 mb-8">
              <div className="p-6 border-b border-pink-100">
                <h3 className="text-xl font-semibold text-[#FF6B6B] flex items-center gap-2">
                  <Image
                    src="/practice/images/樱桃小丸子图片生成 (13).png"
                    alt="魔法棒"
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  盒模型知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">外部样式表</h3>
                    <p className="text-gray-600">
                      就像小丸子的衣柜一样，把所有漂亮的衣服都放在一个地方~
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">内部样式表</h3>
                    <p className="text-gray-600">
                      就像小丸子的书包，只给自己用的小装饰！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">内联样式</h3>
                    <p className="text-gray-600">
                      就像小丸子的发卡，直接戴在头上的装饰呢！
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
                来玩盒子拼图游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            {!showCongrats ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">盒子拼图游戏</h2>
                  <p className="text-gray-600 mb-2">
                    帮小丸子把盒子的各个部分放到正确的位置吧！
                  </p>
                  <p className="text-sm text-gray-500">
                    尝试次数：{attempts}
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-8">
                  {/* 拖拽区域 */}
                  <div className="flex gap-4 mb-8">
                    {['margin', 'border', 'padding', 'content'].map(item => (
                      <div
                        key={item}
                        draggable
                        onDragStart={() => handleDragStart(item)}
                        className="bg-[#FFD93D] px-6 py-3 rounded-lg cursor-move text-gray-700 hover:bg-[#FFE169] transition-colors shadow-md"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* 盒模型展示 */}
                  <div className="relative w-96 h-96">
                    {/* 外边距 */}
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDrop('margin')}
                      className={`absolute inset-0 p-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        boxes.margin.isAnimating ? 'scale-105' : ''
                      } ${
                        boxes.margin.isCorrect ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                    >
                      {boxes.margin.value}
                      
                      {/* 边框 */}
                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop('border')}
                        className={`absolute inset-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          boxes.border.isAnimating ? 'scale-105' : ''
                        } ${
                          boxes.border.isCorrect ? 'bg-green-200' : 'bg-gray-200'
                        }`}
                      >
                        {boxes.border.value}
                        
                        {/* 内边距 */}
                        <div
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => handleDrop('padding')}
                          className={`absolute inset-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            boxes.padding.isAnimating ? 'scale-105' : ''
                          } ${
                            boxes.padding.isCorrect ? 'bg-green-300' : 'bg-gray-300'
                          }`}
                        >
                          {boxes.padding.value}
                          
                          {/* 内容区 */}
                          <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop('content')}
                            className={`absolute inset-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              boxes.content.isAnimating ? 'scale-105' : ''
                            } ${
                              boxes.content.isCorrect ? 'bg-green-400' : 'bg-gray-400'
                            }`}
                          >
                            {boxes.content.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowGame(false)}
                    className="mt-8 bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                  >
                    返回学习
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                  太棒了！你完成了盒子拼图！
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  总共尝试了 {attempts} 次
                </p>
                {attempts <= 4 ? (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    你真是个盒模型专家！(◕‿◕✿)
                  </p>
                ) : (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    通过不断尝试，你成功掌握了盒模型！(◕‿◕✿)
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