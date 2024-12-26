import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  const onStickoLogoContainerClick = useCallback(() => {
    // Please sync "Sticko" to the project
  }, []);

  const onGetItNowClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div
      className={`w-[1440px] bg-aliceblue-100 max-w-full flex flex-row items-start justify-start flex-wrap content-start leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-center text-14xl text-colour-black font-title1-bold mq1125:flex-wrap">
        <div className="flex-1 flex flex-col items-center justify-start py-[100px] px-5 box-border gap-8 bg-[url('/sub-container@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[416px] max-w-full mq450:gap-4 mq450:min-w-full mq750:pt-[65px] mq750:pb-[65px] mq750:box-border">
          <div className="w-[376px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
            <div
              className="w-[168.9px] flex flex-row items-end justify-start gap-[11.6px] cursor-pointer"
              onClick={onStickoLogoContainerClick}
            >
              <Image
                className="h-[48.1px] w-[48.1px] relative overflow-hidden shrink-0"
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/frame1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.6px]">
                <Image
                  className="self-stretch h-[27.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={109}
                  height={28}
                  alt=""
                  src="/sticko1.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[376px] flex flex-col items-start justify-start gap-[11px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(97.56deg,_#0077ff,_#2dc2ff),_#191919] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-xl mq450:leading-[28px] mq1050:text-[26px] mq1050:leading-[37px]">
              Login
            </h1>
            <div className="relative text-base leading-[140%] text-left">
              Let’s login to your sticko account
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-[18.8px] px-[34px] bg-white rounded-2xl flex flex-row items-start justify-start gap-[9px] whitespace-nowrap hover:bg-gainsboro-100">
              <Image
                className="h-[23.4px] w-[23px] relative object-cover min-h-[23px]"
                loading="lazy"
                width={23}
                height={23}
                alt=""
                src="/google-1@2x.png"
              />
              <div className="relative text-base leading-[140%] font-title1-bold text-gray-100 text-left">
                Log in with google
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[19.5px] pl-[21px] pr-5 bg-aliceblue-400 rounded-2xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-200">
              <div className="relative text-base leading-[140%] font-title1-bold text-royalblue-100 text-left">
                Sign Up
              </div>
            </button>
          </div>
          <div className="w-[376px] flex flex-col items-center justify-center max-w-full text-left text-base text-royalblue-100 mq450:gap-[15px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-3">
              <div className="rounded-2xl bg-gray-500 border-royalblue-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] pl-[18px] pr-[214px] gap-3.5 min-w-[226px] mq450:pr-5 mq450:box-border">
                <Image
                  className="h-[18px] w-4 relative min-h-[18px]"
                  loading="lazy"
                  width={16}
                  height={18}
                  alt=""
                  src="/vector1.svg"
                />
                <input
                  className="[border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-gray-100 text-left whitespace-nowrap"
                  type="text"
                />
              </div>
              <div className="self-stretch rounded-2xl bg-gray-500 flex flex-row items-center justify-between py-3.5 px-[18px] box-border min-w-[226px] gap-5">
                <div className="w-[93px] flex flex-row items-center justify-between">
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/frame-12.svg"
                  />
                  <input
                    className="[border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-colour-gray text-left"
                    type="text"
                  />
                </div>
                <Image
                  className="h-2 w-5 relative"
                  loading="lazy"
                  width={20}
                  height={8}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
              <div className="self-stretch h-[94.9px] flex flex-col items-end justify-between">
                <button
                  className="cursor-pointer [border:none] py-[15px] px-5 bg-[transparent] self-stretch rounded-2xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-center justify-center mq450:pl-5 mq450:pr-5 mq450:box-border"
                  onClick={onGetItNowClick}
                >
                  <div className="relative text-base leading-[140%] font-title1-bold text-white text-left">
                    Login
                  </div>
                </button>
                <a className="[text-decoration:none] relative leading-[140%] text-[inherit]">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[800px] flex flex-col items-start justify-start pt-[180px] pb-9 pl-[216px] pr-[206px] box-border gap-[25px] bg-[url('/footer@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[800px] max-w-full text-left text-9xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[108px] mq1050:pr-[103px] mq1050:box-border mq1050:min-w-full mq750:pt-[117px] mq750:pb-[23px] mq750:box-border mq1125:flex-1">
          <h2 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] z-[1] mq450:text-3xl mq450:leading-[31px]">
            Sticko by Fixefly
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <h2 className="m-0 w-[238px] h-[78px] relative text-inherit leading-[140%] font-normal font-[inherit] inline-block z-[1] mq450:text-3xl mq450:leading-[31px]">
              Keep Your Ideas at Hand
            </h2>
            <div className="self-stretch flex flex-row items-start justify-end relative">
              <div className="w-[298.7px] flex flex-row items-start justify-start relative">
                <div className="h-[431px] w-[310px] absolute !m-[0] top-[-198px] left-[-107px]">
                  <div className="absolute top-[calc(50%_-_215.5px)] left-[calc(50%_-_155px)] [backdrop-filter:blur(13.6px)] rounded-27xl bg-gray-700 border-gray-600 border-[1px] border-solid box-border w-full h-full" />
                </div>
                <Image
                  className="h-[335px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  width={299}
                  height={335}
                  alt=""
                  src="/fixefly-logo-3d@2x.png"
                />
              </div>
              <Image
                className="h-[79px] w-[79px] absolute !m-[0] top-[17px] left-[-67px] z-[1]"
                loading="lazy"
                width={79}
                height={79}
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
