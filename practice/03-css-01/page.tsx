'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export default function Page() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showCongrats, setShowCongrats] = useState(false);

  const questions: Question[] = [
    {
      question: '小丸子想要选择所有的段落元素，应该使用哪个选择器？',
      options: ['p', '.paragraph', '#para', '@paragraph'],
      correct: 'p',
      explanation: '标签选择器直接使用元素名称，所以用 p 就可以选择所有段落啦！'
    },
    {
      question: '小丸子给一个元素加了 class="maruko-cute"，要选择它应该用什么？',
      options: ['#maruko-cute', '.maruko-cute', 'maruko-cute', '@maruko-cute'],
      correct: '.maruko-cute',
      explanation: '类选择器前面要加一个小点点 . 哦！'
    },
    {
      question: '小丸子想要选择 id="unique-maruko" 的元素，应该怎么写？',
      options: ['#unique-maruko', '.unique-maruko', 'unique-maruko', '@unique-maruko'],
      correct: '#unique-maruko',
      explanation: 'ID选择器前面要加一个井号 # 呢！'
    }
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsCorrect(null);
    } else {
      setShowCongrats(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setIsCorrect(null);
    setShowCongrats(false);
    setShowGame(false);
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
            小丸子的CSS美容院
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要教大家三种神奇的CSS选择器魔法：标签选择器、类选择器和ID选择器！
            让我们一起给网页穿上漂亮的衣服吧 (◕‿◕✿)
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
                  小丸子的魔法展示
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <h1 className="text-3xl font-bold text-[#FF6B6B]">
                  CSS美容魔法演示 ✨
                </h1>
                
                <h2 id="CSSbase" className="text-2xl font-semibold text-[#FFD93D]">
                  小丸子的CSS魔法基础 (ID: CSSbase)
                </h2>
                
                <p className="abstract text-base leading-relaxed border-l-4 border-[#FF6B6B] pl-4 italic bg-pink-50 p-4 rounded">
                  这是小丸子的魔法笔记 (class: abstract)，记录了一些特别的CSS魔法咒语哦！
                </p>
                
                <p className="leading-relaxed text-gray-600">
                  小丸子今天学会了很多有趣的魔法，下面是一些神奇的链接效果～
                </p>

                <div className="p-4 bg-pink-50 rounded-md">
                  <p className="text-gray-600">
                    小丸子发现了两种神奇的链接：
                    <a href="#" className="mx-2 text-[#FF6B6B] hover:text-[#FF8585] hover:underline transition-all">
                      这是一个普通的链接 (◕‿◕)
                    </a>
                    和一个
                    <a href="#" className="mx-2 text-[#FFD93D] visited:text-[#FFD93D] hover:text-[#FFED4A] hover:underline transition-all">
                      已经访问过的链接 (｡♥‿♥｡)
                    </a>
                  </p>
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
                来玩选择器小游戏吧！
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-8">
            {!showCongrats ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-[#FF6B6B] mb-2">选择器小游戏</h2>
                  <div className="flex items-center justify-center gap-4">
                    <p className="text-gray-600">当前得分: {score} / {questions.length}</p>
                    <p className="text-gray-600">第 {currentQuestion + 1} 题，共 {questions.length} 题</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#FF6B6B] mb-4">
                      {questions[currentQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          disabled={selectedAnswer !== ''}
                          className={`w-full p-4 rounded-lg text-left transition-all ${
                            selectedAnswer === option
                              ? option === questions[currentQuestion].correct
                                ? 'bg-green-100 text-green-800 border-2 border-green-500'
                                : 'bg-red-100 text-red-800 border-2 border-red-500'
                              : 'bg-white hover:bg-[#FFF5E6] text-gray-700 border-2 border-transparent'
                          }`}
                        >
                          {option}
                          {selectedAnswer === option && (
                            <span className="float-right">
                              {option === questions[currentQuestion].correct ? '✓' : '✗'}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {isCorrect !== null && (
                    <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      <p className="font-medium mb-2">
                        {isCorrect ? '太棒了！小丸子为你骄傲 (◕‿◕✿)' : '没关系，让小丸子告诉你~'}
                      </p>
                      <p>{questions[currentQuestion].explanation}</p>
                    </div>
                  )}

                  {selectedAnswer && (
                    <div className="text-center">
                      <button
                        onClick={nextQuestion}
                        className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#FF8585] transition-colors"
                      >
                        {currentQuestion < questions.length - 1 ? '下一题' : '完成游戏'}
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                  恭喜完成！
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  你的最终得分是：{score} / {questions.length}
                </p>
                {score === questions.length ? (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    太厉害了！你已经完全掌握了选择器的用法！(◕‿◕✿)
                  </p>
                ) : (
                  <p className="text-lg text-[#FF6B6B] mb-8">
                    继续加油！再试一次一定能得满分！(◕‿◕✿)
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