"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "./page.module.scss";

// hero section
function Hero() {
  return (
    <div className="hero relative h-[375px] bg-[url('/assets/hero.png')] bg-cover bg-no-repeat md:h-[600px] md:bg-[url('/assets/hero-desktop.png')]">
      {/* copy box */}
      <div className="absolute-center w-[302px] h-[123px] flex justify-center items-center text-center py-[16px] px-[28px] text-[28px] bg-white md:max-w-[878px] md:w-full md:h-[220px]">
        <h1 className="flex items-center justify-center flex-row flex-wrap leading-[61.2px] md:max-w-[450px] md:leading-[85.2px]">
          Your favorite&nbsp;
          <Image
            className="inline-block md:w-[120px]"
            src="/assets/logo.svg"
            alt="Mealz"
            width={70}
            height={20}
          />{" "}
          delivered.
        </h1>
      </div>
    </div>
  );
}

// download app section
function Download() {
  return (
    <div
      className={`section ${styles.download} bg-[url('/assets/download-bg.png')] bg-no-repeat bg-contain md:flex-row md:bg-[url('/assets/download-bg-desktop.png')]`}
    >
      <div className="row">
        <Image className={styles.phoneIcon} src="/assets/phone.svg" alt="phone" width={109} height={219} />
      </div>

      <div className="row md:ml-[100px]">
        <h2 className="mt-[28px] text-center md:mt-0">Download the app</h2>

        {/* app feature list */}
        <ul className={`${styles.features} mt-[28px] flex flex-col gap-2 md:text-xl`}>
          <li>
            <Image src="/assets/check.svg" alt="check" width={20} height={20} />
            Order now or schedule a delivery time.
          </li>
          <li>
            <Image src="/assets/check.svg" alt="check" width={20} height={20} />
            Track your order.
          </li>
          <li>
            <Image src="/assets/check.svg" alt="check" width={20} height={20} />
            Exclusive offers.
          </li>
          <li>
            <Image src="/assets/check.svg" alt="check" width={20} height={20} />
            Online payment.
          </li>
          <li>
            <Image src="/assets/check.svg" alt="check" width={20} height={20} />
            Cash on delivery.
          </li>
        </ul>

        <div
          className={`${styles.appStores} flex justify-center w-full mt-[30px] md:justify-start gap-[32px] md:mt-[35.9px]`}
        >
          {/* google play icon */}
          <Link href="/">
            <Image
              src="/assets/google-play.png"
              alt="google play"
              width={134.782}
              height={40}
              className="md:w-[153px] md:h-[49px] hover-scale"
            />
          </Link>

          {/* app store icon */}
          <Link href="/">
            <Image
              src="/assets/app-store.png"
              alt="app store"
              width={119.664}
              height={40}
              className="md:w-[150px] md:h-[49px] hover-scale"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

// join us section
function Join() {
  return (
    <div
      className={`section ${styles.join} bg-red bg-[url('/assets/burger.svg')] bg-no-repeat md:flex-col md:py-[80px]`}
    >
      <h2 className="text-white">Join Us</h2>

      {/* links */}
      <div
        className={`${styles.links} flex flex-col gap-[20px] mt-[30px] w-full max-w-[315px] md:flex-row md:max-w-full md:justify-center md:gap-[40px] md:mt-[80px]`}
      >
        <Link href="/" className="hover-scale">
          <Image src="/assets/partners.svg" alt="partners" width={50} height={50} />
          <span>Partners</span>
        </Link>
        <Link href="/" className="hover-scale">
          <Image src="/assets/drivers.svg" alt="drivers" width={50} height={50} />
          <span>Drivers</span>
        </Link>
        <Link href="/" className="hover-scale">
          <Image src="/assets/jobs.svg" alt="jobs" width={50} height={50} />
          <span>Jobs</span>
        </Link>
      </div>
    </div>
  );
}

// faq section
function FAQ() {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleAnswer = useCallback(
    (index: number) => {
      const newExpanded = [...isExpanded];
      newExpanded[index] = !newExpanded[index];
      setIsExpanded(newExpanded);
    },
    [isExpanded],
  );

  return (
    <div
      className={`section ${styles.faq} bg-[url('/assets/faq-bg.png')] bg-contain bg-no-repeat bg-[#f8f8f8] md:bg-[url('/assets/faq-bg-desktop.png')] bg-center`}
    >
      <h2>FAQ</h2>

      <div className="mt-[30px] flex-col gap-4 flex items-center w-full md:mt-[80px]">
        {/* question 1 */}
        <div className={`${styles.faqItem}`}>
          <div className={`${styles.question} cursor-pointer`} onClick={() => toggleAnswer(0)}>
            What is Mealz?
            <Image
              src="/assets/minus.svg"
              alt="hide"
              width={20}
              height={4.3}
              className={`${isExpanded[0] ? "block" : "hidden"} md:w-[28px] md:h-[6px]`}
            />
            <Image
              src="/assets/plus.svg"
              alt="show"
              width={20}
              height={20}
              onClick={() => toggleAnswer(0)}
              className={`${isExpanded[0] ? "hidden" : "block"} md:w-[28px] md:h-[28px]`}
            />
          </div>
          <div className={`${styles.answer} ${isExpanded[0] ? "block" : "hidden"} `}>
            Mealz is an online food delivery service.
          </div>
        </div>

        {/* question 2 */}
        <div className={`${styles.faqItem}`}>
          <div className={`${styles.question} cursor-pointer`} onClick={() => toggleAnswer(1)}>
            What are the accepted payment methods?
            <Image
              src="/assets/minus.svg"
              alt="hide"
              width={20}
              height={4.3}
              onClick={() => toggleAnswer(1)}
              className={`${isExpanded[1] ? "block" : "hidden"} md:w-[28px] md:h-[6px]`}
            />
            <Image
              src="/assets/plus.svg"
              alt="show"
              width={20}
              height={20}
              className={`${isExpanded[1] ? "hidden" : "block"} md:w-[28px] md:h-[28px]`}
            />
          </div>
          <div className={`${styles.answer} ${isExpanded[1] ? "block" : "hidden"} `}>
            We accept online payments & cash on delivery
          </div>
        </div>

        {/* question 3 */}
        <div className={`${styles.faqItem}`}>
          <div className={`${styles.question} cursor-pointer`} onClick={() => toggleAnswer(2)}>
            What are Mealz working hours?
            <Image
              src="/assets/minus.svg"
              alt="hide"
              width={20}
              height={4.3}
              onClick={() => toggleAnswer(2)}
              className={`${isExpanded[2] ? "block" : "hidden"} md:w-[28px] md:h-[6px]`}
            />
            <Image
              src="/assets/plus.svg"
              alt="show"
              width={20}
              height={20}
              className={`${isExpanded[2] ? "hidden" : "block"} md:w-[28px] md:h-[28px]`}
            />
          </div>
          <div className={`${styles.answer} ${isExpanded[2] ? "block" : "hidden"} `}>
            Our office hours are from 8 am to 4 pm, everyday!
          </div>
        </div>
      </div>

      {/* contact info */}
      <div className="text-center mt-[30px] md:mt-[80px]">
        <span className="text-black text-xs font-light md:text-xl md:font-normal">
          {`Got another question? We're here to help!`}
          <br />
          Email us at{" "}
        </span>
        <span className="text-black text-xs font-light underline md:text-xl md:font-normal">
          <a href="mailto:example@mealz.com">example@mealz.com</a>
        </span>
      </div>
      <div className="w-[462px] h-[675px] left-[-12px] top-[1px] absolute">
        <div className="w-[214px] h-[214px] left-[248px] top-[461px] absolute">
          <div className="w-[214px] h-[214.02px] left-0 top-[-0.01px] absolute"></div>
        </div>
        <div className="w-[152px] h-[164px] left-0 top-0 absolute">
          <div className="w-[152px] h-[164px] left-0 top-0 absolute"></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={`w-full`}>
      <Hero />
      <Download />
      <Join />
      <FAQ />
    </div>
  );
}
