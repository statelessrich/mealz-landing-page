import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full py-[50px] bg-red flex-col justify-center items-center gap-[50px] inline-flex md:py-[80px]">
      <div className="self-stretch px-[30px] flex-col justify-start items-start gap-10 flex md:flex-row md:justify-around">
        {/* mealz section */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-white text-[28px] font-bold leading-loose">Mealz</div>
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Jobs
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Become a partner
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Join as a driver
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Releases
            </Link>
          </div>
        </div>

        {/* support section */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-white text-[28px] font-bold leading-loose">Support</div>
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Help Center
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Terms of service
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Legal
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* follow us section */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-white text-[28px] font-bold leading-loose">Follow us</div>
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Facebook
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Twitter
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              Instagram
            </Link>
            <Link
              href="/"
              className="self-stretch text-white text-opacity-90 text-base font-medium leading-normal"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* download app section */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-white text-[28px] font-bold leading-loose">Download App</div>
          <div className="flex-col justify-start items-start gap-3 flex">
            {/* google play icon */}
            <Link href="/">
              <Image
                src="/assets/google-play.png"
                alt="google play"
                width={152.6}
                height={45.3}
                className="md:w-[153px] md:h-[49px]"
              />
            </Link>

            {/* app store icon */}
            <Link href="/">
              <Image
                src="/assets/app-store.png"
                alt="app store"
                width={152.6}
                height={45.3}
                className="md:w-[150px] md:h-[49px]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* logo and copyright */}
      <div className="flex-col justify-center items-center gap-8 flex">
        <Image
          className="inline-block md:w-[120px]"
          src="/assets/logo-white.svg"
          alt="Mealz"
          width={105}
          height={30}
        />
        <div className="text-white text-opacity-90 text-base font-normal leading-normal">
          ©2022 Mealz | All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
