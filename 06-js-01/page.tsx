'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { DragSourceMonitor } from 'react-dnd';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  type: 'headline' | 'normal';
  isAnimating?: boolean;
}

interface DragItem {
  index: number;
}

const NewsCard = ({ 
  item, 
  index, 
  moveCard 
}: { 
  item: NewsItem; 
  index: number; 
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'news',
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'news',
    hover: (draggedItem: DragItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-white rounded-lg shadow-md p-4 mb-4 cursor-move transition-all duration-300 ${
        isDragging ? 'opacity-50 scale-105' : 'opacity-100 hover:scale-102'
      } ${item.isAnimating ? 'ring-2 ring-[#FF6B6B]' : ''}`}
    >
      <div className="flex gap-4">
        <div className="w-24 h-24 relative flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 className={`font-bold mb-2 ${
            item.type === 'headline' ? 'text-xl text-[#FF6B6B]' : 'text-lg text-gray-700'
          }`}>
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: '小丸子的美食大冒险',
      content: '今天小丸子发现了一家新开的章鱼烧店，里面的章鱼烧香喷喷的...',
      image: '/practice/images/樱桃小丸子图片生成 (10).png',
      type: 'headline'
    },
    {
      id: 2,
      title: '花轮同学的钢琴演奏会',
      content: '花轮同学即将举办一场钢琴演奏会，小丸子和同学们都很期待...',
      image: '/practice/images/樱桃小丸子图片生成 (11).png',
      type: 'normal'
    },
    {
      id: 3,
      title: '小玉的新发型',
      content: '小玉今天换了一个新发型，让大家都眼前一亮...',
      image: '/practice/images/樱桃小丸子图片生成 (12).png',
      type: 'normal'
    }
  ]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [moves, setMoves] = useState(0);

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = newsItems[dragIndex];
    setNewsItems(prevCards => {
      const newCards = [...prevCards];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, { ...dragCard, isAnimating: true });
      
      // 移除动画标记
      setTimeout(() => {
        setNewsItems(prev => prev.map(item => ({ ...item, isAnimating: false })));
      }, 500);
      
      return newCards;
    });
    setMoves(prev => prev + 1);

    // 检查是否完成目标排序
    const targetOrder = [1, 2, 3]; // 期望的新闻ID顺序
    const currentOrder = newsItems.map(item => item.id);
    if (JSON.stringify(currentOrder) === JSON.stringify(targetOrder)) {
      setTimeout(() => {
        setShowCongrats(true);
      }, 1000);
    }
  };

  const resetGame = () => {
    setNewsItems([
      {
        id: 1,
        title: '小丸子的美食大冒险',
        content: '今天小丸子发现了一家新开的章鱼烧店，里面的章鱼烧香喷喷的...',
        image: '/practice/images/樱桃小丸子图片生成 (10).png',
        type: 'headline'
      },
      {
        id: 2,
        title: '花轮同学的钢琴演奏会',
        content: '花轮同学即将举办一场钢琴演奏会，小丸子和同学们都很期待...',
        image: '/practice/images/樱桃小丸子图片生成 (11).png',
        type: 'normal'
      },
      {
        id: 3,
        title: '小玉的新发型',
        content: '小玉今天换了一个新发型，让大家都眼前一亮...',
        image: '/practice/images/樱桃小丸子图片生成 (12).png',
        type: 'normal'
      }
    ]);
    setShowCongrats(false);
    setMoves(0);
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
            小丸子的新闻编辑部
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要当小记者！让我们一起学习如何编排新闻吧 (◕‿◕✿)
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
                  新闻编辑知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">头条新闻</h3>
                    <p className="text-gray-600">
                      最重要的新闻要放在最显眼的位置哦！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">新闻排序</h3>
                    <p className="text-gray-600">
                      通过拖拽来调整新闻的显示顺序~
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">图文排版</h3>
                    <p className="text-gray-600">
                      图片和文字的搭配要美美的！
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
                来编辑新闻吧！
              </button>
            </div>
          </>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
              {!showCongrats ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">新闻编辑室</h2>
                    <p className="text-gray-600 mb-2">
                      拖拽新闻卡片来调整它们的顺序吧！把最重要的新闻放在最上面哦！
                    </p>
                    <p className="text-sm text-gray-500">
                      移动次数：{moves}
                    </p>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    {newsItems.map((item, index) => (
                      <NewsCard
                        key={item.id}
                        item={item}
                        index={index}
                        moveCard={moveCard}
                      />
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
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                    太棒了！你完成了新闻排版！
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    总共移动了 {moves} 次
                  </p>
                  {moves <= 3 ? (
                    <p className="text-lg text-[#FF6B6B] mb-8">
                      你真是个排版专家！动作又快又准！(◕‿◕✿)
                    </p>
                  ) : (
                    <p className="text-lg text-[#FF6B6B] mb-8">
                      通过细心调整，你成功完成了排版！(◕‿◕✿)
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
          </DndProvider>
        )}
      </main>
    </div>
  );
} 