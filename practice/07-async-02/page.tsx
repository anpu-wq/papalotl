'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GitHubRepo {
  pushed_at: string;
}

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastStoryDate, setLastStoryDate] = useState<string | null>(null);

  useEffect(() => {
    // async/await示例
    async function getHomework() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('小丸子说："作业写完了！"');
          resolve();
        }, 2000);
      });
    }
    getHomework().then(
      () => console.log('小丸子说："可以去玩了！"')
    );
    console.log('小丸子说："先画一会儿漫画~"');

    // 获取最后一个故事的日期
    async function getLastStoryDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('获取小丸子的故事失败了...');
        }
        const data = await response.json() as GitHubRepo;
        // pushed_at 字段即为最后一次更新日期
        return new Date(data.pushed_at).toLocaleDateString('zh-CN');
      } catch (error) {
        console.error('获取小丸子的故事失败了:', error);
        return null;
      }
    }

    getLastStoryDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('小丸子的最新故事是在:', date);
      setLastStoryDate(date);
    });
  }, []);

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

      <main className="container mx-auto px-4 py-12 relative z-10">
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
            小丸子的异步魔法课 - 第二课
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            小丸子今天要继续教大家异步编程！让我们一起来看看小丸子最近写了什么有趣的故事吧~ (◕‿◕✿)
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (8).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">异步编程进阶</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">错误处理</h3>
              <p className="text-gray-600">
                就像小丸子有时候会把作业弄错，我们也要学会处理程序的错误！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">异步链式调用</h3>
              <p className="text-gray-600">
                就像小丸子完成一件事后再做下一件，程序也可以按顺序完成任务！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">状态管理</h3>
              <p className="text-gray-600">
                就像小丸子记录自己的零花钱一样，程序也要记录重要的信息！
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (9).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">小丸子的最新故事</h2>
          </div>
          <div
            id="demo"
            ref={demoRef}
            className="text-center p-6 bg-pink-50 rounded-lg"
          >
            {lastStoryDate ? (
              <div>
                <p className="text-gray-600 mb-2">小丸子最近在这一天更新了故事：</p>
                <p className="text-[#FF6B6B] text-xl font-mono">{lastStoryDate}</p>
              </div>
            ) : (
              <p className="text-gray-500">小丸子正在翻日记本...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
} 