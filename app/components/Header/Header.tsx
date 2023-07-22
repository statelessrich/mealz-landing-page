import Image from "next/image";

function Header() {
  return (
    <div className="h-[70px] px-10 flex items-center justify-center md:h-[100px]">
      {/* logo */}
      <Image
        src="/assets/logo.svg"
        alt="Mealz logo"
        className="md:w-[105px]"
        width={70}
        height={20}
      />
    </div>
  );
}

export default Header;
