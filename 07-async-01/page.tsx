'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GitHubCommit {
  commit: {
    author: {
      date: string;
    };
    message: string;
  };
}

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    // 简单的延时示例
    console.log('小丸子说："我要开始写作业了！"');
    setTimeout(() => {
      console.log('小丸子说："休息一下吧~"');
    }, 2000);
    console.log('小丸子说："先画一会儿漫画！"');

    // Promise示例
    function getSnack() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('小丸子说："我找到章鱼烧了！"');
          resolve();
        }, 1000);
      });
    }
    getSnack().then(() => {
      console.log('小丸子说："真好吃！"');
    });

    // async/await示例
    async function getHomework() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('小丸子说："作业写完了！"');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getHomework();
      console.log('小丸子说："可以去玩了！"');
    })();

    // 获取GitHub提交记录的示例
    async function getMarukoStories() {
      const url = 'https://api.github.com/repos/yangjh-xbmu/Web-develop/commits';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('获取小丸子的故事失败了...');
        }
        const commits = await response.json() as GitHubCommit[];
        // 提取每个提交的日期和消息
        const stories = commits.map((commit) => ({
          date: new Date(commit.commit.author.date).toLocaleDateString('zh-CN'),
          message: commit.commit.message
        }));

        // 生成表格HTML
        const tableRows = stories.map((story: { date: string; message: string }) => `
          <tr class="border-b border-pink-100">
            <td class="py-2 px-4">${story.date}</td>
            <td class="py-2 px-4">${story.message}</td>
          </tr>
        `).join('');

        const html = `
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-pink-50">
                  <th class="py-2 px-4 text-[#FF6B6B]">日期</th>
                  <th class="py-2 px-4 text-[#FF6B6B]">小丸子的故事</th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                ${tableRows}
              </tbody>
            </table>
          </div>
        `;

        setTableHtml(html);
      } catch (error) {
        console.error('获取小丸子的故事失败了:', error);
        setTableHtml('<p class="text-[#FF6B6B] text-center">哎呀，小丸子的故事找不到了... (´;ω;｀)</p>');
      }
    }

    getMarukoStories();
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
            小丸子的异步魔法课
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要教大家异步编程！就像小丸子一边写作业一边想着要吃章鱼烧一样，我们也可以让程序做多件事情哦~ (◕‿◕✿)
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">异步编程基础</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">Promise</h3>
              <p className="text-gray-600">
                就像小丸子答应妈妈要写完作业才能去玩，这就是一个承诺呢！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">async/await</h3>
              <p className="text-gray-600">
                就像小丸子等待章鱼烧烤好一样，要有耐心等待结果哦！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">API调用</h3>
              <p className="text-gray-600">
                就像小丸子去便利店买零食，要先和店员说想要什么呢！
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">小丸子的故事列表</h2>
          </div>
          <div id="demo" ref={demoRef} className="mt-4" dangerouslySetInnerHTML={{ __html: tableHtml || '<p class="text-center text-gray-500">小丸子正在收集故事中...</p>' }} />
        </section>
      </main>
    </div>
  );
} 