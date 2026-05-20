// IOS9999 自动发货完整项目 - Next.js + TailwindCSS
// 项目结构：
// ios9999/
// ├── app/
// │   ├── page.tsx        <- 首页 + 商品展示
// │   ├── layout.tsx      <- 布局
// │   └── globals.css     <- Tailwind全局样式
// ├── public/alipay.png   <- 支付宝二维码
// ├── package.json
// ├── next.config.js
// ├── tailwind.config.js
// ├── postcss.config.js
// ├── tsconfig.json
// └── README.md

/* package.json */
// 请确保 npm install 后才能 build
/*
{
  "name": "ios9999",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.7",
    "typescript": "^5"
  }
}
*/

/* 核心功能 */
// 1. 显示商品列表
// 2. 用户选择商品 + 填邮箱
// 3. 支付宝二维码支付
// 4. 下单生成订单ID
// 5. 调用Resend API发送邮件
// 6. 扣减库存
// 7. 显示订单状态

/* page.tsx 示例 */
import { useState } from 'react';

const products = [
  { name: '美区 Apple ID', price: 6 },
  { name: '港区 Apple ID', price: 6 },
  { name: '小火箭成品号', price: 18 },
  { name: 'Gmail 通用账号', price: 2.8 }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState(products[0]);

  const handleOrder = async () => {
    // 调用后端API生成订单 + 扣库存 + 发邮件
    alert(`订单生成成功\n商品: ${selected.name}\n邮箱: ${email}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ios9999 Apple ID 自动发货</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {products.map((p) => (
          <div key={p.name} className={`p-4 border ${selected.name === p.name ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setSelected(p)}>
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-500">¥{p.price}</p>
          </div>
        ))}
      </div>
      <input type="email" placeholder="请输入邮箱" className="border p-2 w-full mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleOrder}>生成订单并支付</button>
      <div className="mt-8">
        <h2 className="font-semibold mb-2">支付宝收款码</h2>
        <img src="/alipay.png" alt="支付宝二维码" className="w-64" />
      </div>
    </div>
  );
}
