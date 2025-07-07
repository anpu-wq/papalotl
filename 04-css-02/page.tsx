'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 280, y: 280 });
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstacles] = useState([
    { x: 100, y: 50, width: 20, height: 200 },
    { x: 200, y: 100, width: 200, height: 20 },
    { x: 50, y: 250, width: 150, height: 20 },
  ]);

  // 生成随机目标位置
  const generateRandomTarget = () => {
    const newX = Math.floor(Math.random() * 260) + 20; // 20-280
    const newY = Math.floor(Math.random() * 260) + 20; // 20-280
    
    // 检查新位置是否与障碍物重叠
    const isColliding = obstacles.some(obs => (
      newX < (obs.x + obs.width) &&
      (newX + 20) > obs.x &&
      newY < (obs.y + obs.height) &&
      (newY + 20) > obs.y
    ));

    if (isColliding) {
      // 如果重叠，重新生成
      return generateRandomTarget();
    }

    return { x: newX, y: newY };
  };

  useEffect(() => {
    if (!gameStarted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const step = 20;
      let newX = position.x;
      let newY = position.y;

      switch(e.key) {
        case 'ArrowUp':
          newY = Math.max(0, position.y - step);
          break;
        case 'ArrowDown':
          newY = Math.min(280, position.y + step);
          break;
        case 'ArrowLeft':
          newX = Math.max(0, position.x - step);
          break;
        case 'ArrowRight':
          newX = Math.min(280, position.x + step);
          break;
      }

      // 检查是否碰到障碍物
      const willCollide = obstacles.some(obs => (
        newX < (obs.x + obs.width) &&
        (newX + 20) > obs.x &&
        newY < (obs.y + obs.height) &&
        (newY + 20) > obs.y
      ));

      if (!willCollide) {
        setPosition({ x: newX, y: newY });
      }

      // 检查是否到达目标
      if (Math.abs(newX - target.x) < 20 && Math.abs(newY - target.y) < 20) {
        setScore(prev => prev + 100);
        // 生成新的目标位置
        setTarget(generateRandomTarget());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position, gameStarted, obstacles, target]);

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
            小丸子的定位游戏
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要和大家玩躲猫猫！让我们学习如何通过CSS定位来找到正确的位置吧 (◕‿◕✿)
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
                  定位知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">相对定位</h3>
                    <p className="text-gray-600">
                      就像小丸子和妈妈约定在家门口见面一样，以原来的位置为参考点~
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">绝对定位</h3>
                    <p className="text-gray-600">
                      就像小丸子和爸爸约定在学校正门见面，以学校为参考点！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">固定定位</h3>
                    <p className="text-gray-600">
                      就像小丸子最喜欢的零食店，永远在那个位置等着她！
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
                来玩定位迷宫游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">定位迷宫游戏</h2>
              <p className="text-gray-600 mb-2">
                帮助小丸子找到正确的位置，注意不要碰到障碍物哦！每到达一个目标就可以获得100分！
              </p>
              <div className="text-[#FF6B6B] font-bold">
                当前得分: {score}分
              </div>
            </div>

            <div className="flex justify-center mb-8">
              {!gameStarted ? (
                <button
                  onClick={() => {
                    setPosition({ x: 0, y: 0 });
                    setTarget(generateRandomTarget());
                    setGameStarted(true);
                  }}
                  className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                >
                  开始游戏
                </button>
              ) : (
                <p className="text-gray-600">使用方向键移动小丸子！</p>
              )}
            </div>

            <div className="relative w-[300px] h-[300px] mx-auto bg-[#E0F4FF] rounded-lg overflow-hidden">
              {/* 小丸子 */}
              <div
                className="absolute w-5 h-5 transition-all duration-100"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
              >
                <Image
                  src="/practice/images/樱桃小丸子图片生成 (10).png"
                  alt="小丸子"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>

              {/* 目标 */}
              <div
                className="absolute w-5 h-5"
                style={{
                  left: `${target.x}px`,
                  top: `${target.y}px`,
                }}
              >
                <Image
                  src="/practice/images/樱桃小丸子图片生成 (11).png"
                  alt="目标"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>

              {/* 障碍物 */}
              {obstacles.map((obs, index) => (
                <div
                  key={index}
                  className="absolute bg-[#FF6B6B] opacity-50"
                  style={{
                    left: `${obs.x}px`,
                    top: `${obs.y}px`,
                    width: `${obs.width}px`,
                    height: `${obs.height}px`,
                  }}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setShowGame(false);
                  setGameStarted(false);
                  setScore(0);
                  setPosition({ x: 0, y: 0 });
                }}
                className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
              >
                返回学习
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 