import imgWalletColorFixed from "figma:asset/7c13572781a8e07a053668a530960e18498ae587.png";
import imgIcon1ColorFixed from "figma:asset/9fe4f58976310a4009a5d719ee688223eb312dda.png";
import imgGavelIconFixed from "figma:asset/0e1e8f39c703abba624b3a3f46486cb540bed22c.png";
import imgGraphColorFixed from "figma:asset/6411dacde4bdc4f8152cc217a28700d8ee8e2cc8.png";

function HomePage() {
  return (
    <div className="absolute h-[48px] left-0 top-[-56px] w-[1163px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[48px] left-[582.02px] text-[48px] text-center text-nowrap text-white top-[-0.5px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Everything You Need for Crypto Taxes</p>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute h-[56px] left-[197.5px] top-[16px] w-[768px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[28px] left-[384.32px] text-[20px] text-center text-white top-[0.5px] translate-x-[-50%] w-[761px]">From simple swaps to complex DeFi activity, DeFi Tax delivers clarity and accuracy you can defend.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[128px] left-[32px] top-0 w-[1163px]" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function HomePage2() {
  return (
    <div className="absolute content-stretch flex h-[120px] items-center justify-center left-[64px] rounded-[10px] top-[-27px] w-[138px]" data-name="HomePage">
      <div className="h-[138px] relative shadow-[3px_3px_10px_0px_rgba(0,0,0,0.35)] shrink-0 w-[176px]" data-name="Wallet color fixed">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.66%] left-0 max-w-none top-[-13.83%] w-full" src={imgWalletColorFixed} />
        </div>
        <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[138px] w-[176px]" />
      </div>
    </div>
  );
}

function HomePage3() {
  return (
    <div className="absolute h-[28px] left-[20px] top-[105px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-gray-900 text-nowrap top-[0.5px] whitespace-pre">Connect Your Wallets</p>
    </div>
  );
}

function HomePage4() {
  return (
    <div className="absolute h-[72px] left-[20px] top-[145px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-gray-600 top-0 w-[196px]">Quickly link supported exchanges, wallets, and on-chain activity.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[16.4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[2px_2px_34px_0px_rgba(0,0,0,0.15)]" />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
    </div>
  );
}

function HomePage5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[109.25px] rounded-[10px] size-[48px] top-0" data-name="HomePage">
      <div className="h-[158px] relative shadow-[4px_4px_14px_0px_rgba(0,0,0,0.25)] shrink-0 w-[190px]" data-name="Icon1 Color fixed">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120%] left-0 max-w-none top-[-10%] w-full" src={imgIcon1ColorFixed} />
        </div>
        <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[158px] w-[190px]" />
      </div>
    </div>
  );
}

function HomePage6() {
  return (
    <div className="absolute h-[56px] left-[33px] top-[105px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-gray-900 top-[0.5px] w-[117px]">Auto-Sync Transactions</p>
    </div>
  );
}

function HomePage7() {
  return (
    <div className="absolute h-[96px] left-[33px] top-[173px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-gray-600 top-0 w-[190px]">Real-time transaction import sourced directly from the blockchain rather than unreliable CSV files.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16.4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[2px_2px_34px_0px_rgba(0,0,0,0.15)]" />
      <HomePage5 />
      <HomePage6 />
      <HomePage7 />
    </div>
  );
}

function HomePage8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-0.88px)] rounded-[10px] size-[48px] top-[calc(50%-118px)] translate-x-[-50%] translate-y-[-50%]" data-name="HomePage">
      <div className="relative shadow-[3px_3px_14px_0px_rgba(0,0,0,0.2)] shrink-0 size-[160px]" data-name="Gavel Icon Fixed">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGavelIconFixed} />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-[160px]" />
      </div>
    </div>
  );
}

function HomePage9() {
  return (
    <div className="absolute h-[56px] left-[33px] top-[105px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-gray-900 top-[0.5px] w-[148px]">Generate Audit-Ready Reports</p>
    </div>
  );
}

function HomePage10() {
  return (
    <div className="absolute h-[96px] left-[33px] top-[173px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-gray-600 top-0 w-[199px]">Consistent calculations verified by accounting experts and aligned with IRS guidance.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[16.4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[2px_2px_34px_0px_rgba(0,0,0,0.15)]" />
      <HomePage8 />
      <HomePage9 />
      <HomePage10 />
    </div>
  );
}

function HomePage11() {
  return (
    <div className="absolute left-[41.75px] size-[179px] top-[-52px]" data-name="HomePage">
      <div className="absolute left-0 size-[179px] top-0" data-name="Graph color fixed">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGraphColorFixed} />
      </div>
    </div>
  );
}

function HomePage12() {
  return (
    <div className="absolute h-[56px] left-[33px] top-[105px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-gray-900 top-[0.5px] w-[152px]">Enterprise-Level Security</p>
    </div>
  );
}

function HomePage13() {
  return (
    <div className="absolute h-[72px] left-[33px] top-[173px] w-[200.75px]" data-name="HomePage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-gray-600 top-0 w-[197px]">Your data is encrypted and protected with secure read-only wallet connections.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[16.4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[2px_2px_34px_0px_rgba(0,0,0,0.15)]" />
      <HomePage11 />
      <HomePage12 />
      <HomePage13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[302px] left-[32px] top-[192px] w-[1163px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[calc(50%+0.32px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[141.648px]" data-name="Text">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-[71px] text-[16px] text-center text-white top-0 translate-x-[-50%] w-[148px]">Explore All Features</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#30c060] h-[34px] left-1/2 rounded-[20px] top-[calc(50%+276px)] translate-x-[-50%] translate-y-[-50%] w-[185px]" data-name="Button">
      <Text />
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <Container />
      <Container5 />
      <Button />
    </div>
  );
}