const products = [
  { name: '美区 Apple ID', desc: '自动发货，可下载 App', price: '6.00' },
  { name: '香港 Apple ID', desc: '开通 iCloud，可下载 App', price: '6.00' },
  { name: '小火箭成品号', desc: 'Shadowrocket 已购账号', price: '18.00' },
  { name: 'Gmail 通用账号', desc: '游戏应用网页直登', price: '2.80' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-sm font-medium text-blue-600">自动发货</p>
            <h1 className="text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl">ios9999</h1>
          </div>
          <a
            href="#pay"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            支付宝付款
          </a>
        </header>

        <div className="grid flex-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl">
                Apple ID 账号批发零售
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                支持美区、香港、小火箭、Gmail 等常用账号类型。下单后自动发货，付款后请按页面提示保存订单信息。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {products.map((item) => (
                <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                    </div>
                    <p className="shrink-0 text-lg font-bold text-blue-600">¥{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside id="pay" className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-950">支付宝收款码</h2>
                <p className="mt-1 text-sm text-slate-500">扫码付款后联系客服确认订单。</p>
              </div>
              <img
                src="/alipay.svg"
                alt="支付宝收款码"
                className="w-full rounded-md border border-slate-100"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
