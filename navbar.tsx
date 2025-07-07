import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#FF6B6B] p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (1).png"
            alt="Maruko Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white text-xl font-bold">小丸子的编程乐园</span>
        </div>
        
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-200 transition-colors">
            首页
          </Link>
          <Link href="/practice" className="text-white hover:text-yellow-200 transition-colors">
            练习
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-200 transition-colors">
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
} 