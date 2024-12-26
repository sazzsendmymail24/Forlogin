import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import RecentUsers1 from "./recent-users1";

export type SettingsType = {
  className?: string;
};

const Settings: NextPage<SettingsType> = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onSidebarItemTrueFalseContainerClick = useCallback(() => {
    // Please sync "User Management" to the project
  }, []);

  const onSidebarItemTrueFalseContainerClick1 = useCallback(() => {
    // Please sync "Subscription Management" to the project
  }, []);

  return (
    <div
      className={`w-[1370px] bg-aliceblue-100 max-w-full flex flex-row items-start justify-start p-[42px] box-border gap-4 leading-[normal] tracking-[normal] mq850:pl-[21px] mq850:pr-[21px] mq850:box-border ${className}`}
    >
      <aside className="w-60 shadow-[0px_4px_103px_rgba(50,_50,_71,_0.01),_0px_4px_59px_rgba(50,_50,_71,_0.03)] rounded-2xl bg-white flex flex-col items-start justify-start p-4 box-border gap-[236.8px] text-left text-base text-colour-black font-title1-bold mq850:hidden">
        <div className="self-stretch flex flex-col items-start justify-start gap-12">
          <div
            className="w-[106px] flex flex-row items-end justify-start gap-[7.3px] shrink-0 cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <Image
              className="h-[30.2px] w-[30.2px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <Image
                className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={69}
                height={17}
                alt=""
                src="/sticko.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5 shrink-0">
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/category.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%]">Dashboard</div>
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[11.5px] px-[7px] gap-[7.5px] cursor-pointer"
              onClick={onSidebarItemTrueFalseContainerClick}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/calendar.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%] whitespace-nowrap">
                  User Manage
                </div>
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
              onClick={onSidebarItemTrueFalseContainerClick1}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/activity.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%]">Subscription</div>
              </div>
            </div>
            <div className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px]">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/wallet.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%] whitespace-nowrap">
                  Site Content
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-22xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff)] flex flex-row items-start justify-start py-[11.5px] px-6 gap-[7.5px] text-white">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/chat.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%]">Settings</div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[7.5px] px-[7px] bg-[transparent] w-48 rounded-md flex flex-row items-start justify-start box-border gap-[7.5px]">
          <div className="flex-1 relative text-base leading-[140%] font-title1-bold text-colour-black text-left">
            Logout
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/logout@2x.png"
          />
        </button>
      </aside>
      <section className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[166px] box-border gap-8 max-w-[calc(100%_-_256px)] text-left text-base text-colour-gray font-title1-bold mq850:max-w-full mq675:gap-4 mq675:pb-[108px] mq675:box-border">
        <header className="self-stretch rounded-2xl bg-white flex flex-row items-center justify-between py-[15.5px] px-[18px] top-[0] z-[99] sticky gap-5 text-left text-13xl text-colour-black font-inter">
          <h1 className="m-0 relative text-inherit leading-[140%] font-medium font-[inherit] whitespace-nowrap">
            Settings
          </h1>
          <div className="w-[303px] flex flex-row items-center justify-start gap-2.5 text-smi font-title1-bold">
            <div className="rounded-3xs bg-royalblue-300 flex flex-row items-center justify-center p-4">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/notification.svg"
              />
            </div>
            <div className="flex-1 rounded-3xs bg-gray-300 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start p-[7px] gap-2.5">
              <Image
                className="h-[38px] w-[38px] relative rounded-10xl-7 overflow-hidden shrink-0 object-cover min-h-[38px]"
                loading="lazy"
                width={38}
                height={38}
                alt=""
                src="/frame-435@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch h-3.5 relative leading-[140%] flex items-center shrink-0 whitespace-nowrap">
                  Welcome back,
                </div>
                <div className="self-stretch relative text-base leading-[140%] font-semibold whitespace-nowrap">
                  Sazz
                </div>
              </div>
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/arrow--down-2.svg"
              />
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-end justify-center gap-[42px] max-w-full mq675:gap-[21px]">
          <button className="cursor-pointer [border:none] py-[16.5px] px-[23px] bg-[transparent] rounded-37xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff),_#f2f8ff] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2.5">
              <Image
                className="h-5 w-5 relative"
                width={20}
                height={20}
                alt=""
                src="/vector-1.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-base leading-[140%] font-title1-bold text-white text-left whitespace-nowrap">
                  New User
                </div>
              </div>
            </div>
          </button>
          <div
            className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[15px] max-w-full cursor-pointer mq725:pl-[71px] mq725:pr-[71px] mq725:box-border mq675:pl-[35px] mq675:pr-[35px] mq675:box-border"
            onClick={onSidebarItemTrueFalseContainerClick}
          >
            <RecentUsers1 edit="Editor" />
            <RecentUsers1 edit="Admin" />
            <div className="rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 pl-3 pr-10 gap-[53px] max-w-full mq850:gap-[26px] mq850:flex-wrap">
              <Image
                className="h-[63px] w-[58px] relative object-cover"
                width={58}
                height={63}
                alt=""
                src="/bitmap1@2x.png"
              />
              <div className="w-[521.3px] flex flex-row items-center justify-center gap-[23px] max-w-full mq675:flex-wrap">
                <div className="flex-1 relative leading-[140%] inline-block min-w-[119px] shrink-0">
                  Jonny Rich
                </div>
                <div className="flex-1 relative leading-[140%] text-colour-black inline-block min-w-[119px] whitespace-nowrap shrink-0">
                  jonny@gmail.com
                </div>
                <button className="cursor-pointer [border:none] py-[9.5px] px-0 bg-whitesmoke w-28 rounded-81xl flex flex-row items-center justify-center box-border hover:bg-gainsboro-300">
                  <div className="flex-1 relative text-base leading-[140%] font-title1-bold text-black text-center shrink-0">
                    Editor
                  </div>
                </button>
              </div>
              <Image
                className="h-5 w-[3.7px] relative"
                width={4}
                height={20}
                alt=""
                src="/group-73.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
