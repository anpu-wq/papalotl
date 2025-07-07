import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const lessons = [
    {
      title: 'HTML 基础',
      description: '小丸子教你写出漂亮的网页结构！',
      links: [
        { href: '/practice/01-html-01', text: '第一课：认识HTML标签' },
        { href: '/practice/01-html-02', text: '第二课：表单和列表' },
        { href: '/practice/02-html-01', text: '第三课：多媒体元素' },
      ],
      image: '/practice/images/樱桃小丸子图片生成 (1).png'
    },
    {
      title: 'CSS 样式',
      description: '和小丸子一起学习美化网页的魔法！',
      links: [
        { href: '/practice/03-css-01', text: '第一课：CSS基础' },
        { href: '/practice/03-css-02', text: '第二课：盒模型' },
        { href: '/practice/04-css-01', text: '第三课：浮动布局' },
        { href: '/practice/04-css-02', text: '第四课：定位' },
        { href: '/practice/04-css-02-relative', text: '第五课：相对定位' },
      ],
      image: '/practice/images/樱桃小丸子图片生成 (2).png'
    },
    {
      title: 'JavaScript 编程',
      description: '跟着小丸子一起学习编程的乐趣！',
      links: [
        { href: '/practice/05-js-01', text: '第一课：JavaScript基础' },
        { href: '/practice/05-news01', text: '第二课：变量和函数' },
        { href: '/practice/06-js-01', text: '第三课：DOM操作' },
        { href: '/practice/06-news01', text: '第四课：类和继承' },
        { href: '/practice/06-news02', text: '第五课：事件处理' },
      ],
      image: '/practice/images/樱桃小丸子图片生成 (3).png'
    },
    {
      title: '异步编程',
      description: '小丸子带你探索异步编程的奥秘！',
      links: [
        { href: '/practice/07-async-01', text: '第一课：Promise和async/await' },
        { href: '/practice/07-async-02', text: '第二课：API调用' },
      ],
      image: '/practice/images/樱桃小丸子图片生成 (4).png'
    }
  ];

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
            小丸子的前端学习乐园
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎来到小丸子的前端学习乐园！在这里，我们将一起学习HTML、CSS和JavaScript，让编程变得像吃章鱼烧一样有趣！(◕‿◕✿)
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lessons.map((lesson, index) => (
            <section key={index} className="bg-white rounded-xl shadow-lg border border-pink-100 p-6">
              <div className="flex items-start gap-4">
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">{lesson.title}</h2>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <ul className="space-y-2">
                    {lesson.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-[#FF6B6B] hover:text-[#FF8585] transition-colors flex items-center gap-2"
                        >
                          <span className="text-sm">→</span>
                          <span>{link.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
} 