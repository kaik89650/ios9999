export default function IOS9999Store() {
  const products = [
    {
      name: "美区 Apple ID",
      price: "¥9.9",
      desc: "适用于美区 App Store 下载与订阅",
    },
    {
      name: "港区 Apple ID",
      price: "¥9.9",
      desc: "适用于港区 App Store 下载与订阅",
    },
    {
      name: "土区 Apple ID",
      price: "¥9.9",
      desc: "适用于土区 App Store 下载与订阅",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">ios9999</h1>
            <p className="text-sm text-gray-500">Apple ID Auto Delivery Store</p>
          </div>

          <div className="rounded-2xl border px-4 py-2 text-sm shadow-sm">
            QQ：3569819099
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border px-4 py-2 text-sm text-gray-600">
              自动发货 · 自动邮件发送 · 24H 服务
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Apple ID
              <br />
              自动发货平台
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              支持美区、港区、土区 Apple ID 自动发货。
              顾客付款后系统自动发送账号、密码、密保至邮箱。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-2xl bg-black px-6 py-3 text-white transition hover:scale-105"
              >
                立即购买
              </a>

              <a
                href="https://wpa.qq.com/msgrd?v=3&uin=3569819099&site=qq&menu=yes"
                className="rounded-2xl border px-6 py-3 transition hover:bg-gray-100"
              >
                联系客服
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-2xl">
              <div className="space-y-5">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">自动发货</p>
                      <h3 className="mt-1 text-xl font-semibold">付款后秒发邮箱</h3>
                    </div>
                    <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Online
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">支持地区</p>
                  <div className="mt-3 flex gap-3">
                    <span className="rounded-xl bg-black px-4 py-2 text-sm text-white">
                      美区
                    </span>
                    <span className="rounded-xl bg-black px-4 py-2 text-sm text-white">
                      港区
                    </span>
                    <span className="rounded-xl bg-black px-4 py-2 text-sm text-white">
                      土区
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">系统状态</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="font-medium">自动发货运行中</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-bold tracking-tight">商品分类</h2>
          <p className="mt-3 text-gray-600">
            付款成功后系统自动发送 Apple ID 至顾客邮箱。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-[28px] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.desc}
                  </p>
                </div>

                <div className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                  Hot
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-500">统一售价</p>
                  <h4 className="mt-1 text-4xl font-bold">{product.price}</h4>
                </div>
              </div>

              {/* Order Form */}
              <div className="mt-8 space-y-4 border-t pt-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    收货邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="请输入您的邮箱"
                    className="w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <button className="w-full rounded-2xl bg-black py-3 text-white transition hover:scale-[1.02]">
                  立即购买
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[32px] border bg-black p-10 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold">支付宝自动到账</h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-300">
                顾客付款后系统自动检测到账，并自动发送 Apple ID、密码与密保至邮箱。
              </p>

              <div className="mt-8 space-y-3 text-sm text-gray-300">
                <p>支付宝昵称：假装很忙</p>
                <p>支付宝账号：19036805213</p>
                <p>客服 QQ：3569819099</p>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-black">
              <div className="aspect-square rounded-2xl border border-dashed bg-gray-100"></div>

              <p className="mt-4 text-center text-sm text-gray-500">
                此处放置支付宝收款二维码
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border p-6">
            <h3 className="text-xl font-bold">购买后多久发货？</h3>
            <p className="mt-3 leading-7 text-gray-600">
              系统检测到账后自动发货，通常几秒内即可完成。
            </p>
          </div>

          <div className="rounded-[28px] border p-6">
            <h3 className="text-xl font-bold">发货到哪里？</h3>
            <p className="mt-3 leading-7 text-gray-600">
              系统会自动发送 Apple ID 信息到顾客填写的邮箱。
            </p>
          </div>

          <div className="rounded-[28px] border p-6">
            <h3 className="text-xl font-bold">支持售后吗？</h3>
            <p className="mt-3 leading-7 text-gray-600">
              如遇问题可联系 QQ：3569819099。
            </p>
          </div>

          <div className="rounded-[28px] border p-6">
            <h3 className="text-xl font-bold">系统是否自动运行？</h3>
            <p className="mt-3 leading-7 text-gray-600">
              网站支持自动检测付款与自动邮件发货。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ios9999. All rights reserved.</p>

          <div className="flex gap-6">
            <span>QQ：3569819099</span>
            <span>Auto Delivery System</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
