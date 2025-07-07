'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface RaceError extends Error {
  message: string;
}

export default function Page() {
  const [showGame, setShowGame] = useState(false);
  const [runners, setRunners] = useState([
    { id: 1, name: '小丸子', position: 0, finished: false },
    { id: 2, name: '小玉', position: 0, finished: false },
    { id: 3, name: '花轮', position: 0, finished: false }
  ]);
  const [currentRunner, setCurrentRunner] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState('');
  const trackLength = 300;

  const runnerColors = {
    '小丸子': '#FF6B6B',
    '小玉': '#FFD93D',
    '花轮': '#95E1D3'
  };

  const startRace = async () => {
    setGameStarted(true);
    setMessage('比赛开始！');
    
    try {
      // 第一棒：小丸子
      setMessage(`${runners[0].name}开始跑了！`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setRunners(prev => prev.map(runner => 
        runner.id === 1 ? { ...runner, position: trackLength / 3, finished: true } : runner
      ));
      setCurrentRunner(1);

      // 第二棒：小玉
      setMessage(`${runners[1].name}接棒了！`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setRunners(prev => prev.map(runner => 
        runner.id === 2 ? { ...runner, position: (trackLength / 3) * 2, finished: true } : runner
      ));
      setCurrentRunner(2);

      // 第三棒：花轮
      setMessage(`${runners[2].name}同学接到棒子了！`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setRunners(prev => prev.map(runner => 
        runner.id === 3 ? { ...runner, position: trackLength, finished: true } : runner
      ));
      setCurrentRunner(3);

      setMessage('比赛结束！大家都很棒！');
    } catch (error) {
      const raceError = error as RaceError;
      setMessage(`哎呀，出了点小问题！${raceError.message || '请重新开始比赛'}`);
      console.error('比赛出错：', raceError);
    }
  };

  const resetRace = () => {
    setRunners(runners.map(runner => ({ ...runner, position: 0, finished: false })));
    setCurrentRunner(0);
    setGameStarted(false);
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
            小丸子的异步接力赛
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子和朋友们要参加接力赛跑！让我们一起学习JavaScript的异步编程吧 (◕‿◕✿)
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
                  异步编程知识
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">Promise</h3>
                    <p className="text-gray-600">
                      就像小丸子答应妈妈要好好学习一样，这是一个承诺呢！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">async/await</h3>
                    <p className="text-gray-600">
                      就像小丸子等待花轮同学传递接力棒一样，要有耐心哦！
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-[#FF6B6B] font-bold mb-2">错误处理</h3>
                    <p className="text-gray-600">
                      就算跑步时摔倒了也没关系，爬起来继续跑就好啦！
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
                来玩接力赛跑游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4">异步接力赛</h2>
              <p className="text-gray-600 mb-2">
                看看小丸子和朋友们的接力赛跑吧！
              </p>
              <div className="text-[#FF6B6B] font-bold">
                {message}
              </div>
              {currentRunner > 0 && (
                <div className="text-gray-600 mt-2">
                  当前跑步者：{runners[currentRunner - 1].name}
                </div>
              )}
            </div>

            <div className="space-y-8">
              {/* 跑道 */}
              <div className="relative h-48 bg-[#E0F4FF] rounded-lg p-4">
                {runners.map((runner, index) => (
                  <div key={runner.id} className="relative h-12 mb-4">
                    {/* 跑道背景 */}
                    <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                    {/* 进度条 */}
                    <div
                      className="absolute h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${(runner.position / trackLength) * 100}%`,
                        backgroundColor: runnerColors[runner.name as keyof typeof runnerColors],
                        opacity: 0.7
                      }}
                    ></div>
                    {/* 跑步者 */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000"
                      style={{ left: `${(runner.position / trackLength) * 100}%` }}
                    >
                      <Image
                        src={`/practice/images/樱桃小丸子图片生成 (${10 + index}).png`}
                        alt={runner.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    {/* 名字标签 */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 font-bold text-gray-600">
                      {runner.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center space-x-4">
                <button
                  onClick={startRace}
                  disabled={gameStarted}
                  className={`px-6 py-2 rounded-full ${
                    gameStarted
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#FF6B6B] hover:bg-[#FF8585]'
                  } text-white transition-colors`}
                >
                  开始比赛
                </button>
                <button
                  onClick={() => {
                    resetRace();
                    setShowGame(false);
                  }}
                  className="bg-[#FFD93D] text-white px-6 py-2 rounded-full hover:bg-[#FFE169] transition-colors"
                >
                  返回学习
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 