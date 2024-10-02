export function Header() {
  const logo =
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a1500297b3d9a173a0bd66cba0a672134d9faae8da730743ad7daff0bf978cfc?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8'

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-lg leading-none text-white bg-gray-800 border-solid border-b-[0.5px] border-b-white border-b-opacity-50 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={logo}
        alt="Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.12] w-[156px]"
      />
      <nav className="flex gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {[
          { label: 'Episodes', hasIcon: true },
          { label: 'Meet Fr. Jack', hasIcon: false },
          { label: 'Contact', hasIcon: false },
        ].map((item, index) => (
          <div key={index} className="flex gap-1 items-end whitespace-nowrap rounded">
            <div>{item.label}</div>
            {item.hasIcon && (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa2fc93681c8eb896a27a81eda5fed7a935f5410217d1754c25b538e4485f6?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
            )}
          </div>
        ))}
        <button className="text-yellow-600 rounded">Listen Now</button>
      </nav>
    </header>
  )
}
