import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="https://img.freepik.com/premium-vector/software-programmer-cartoon_24640-21613.jpg?w=740"
        width={200}
        height={10}
        alt="banner imgage"
        className="w-full"
      ></Image>
    </div>
  );
}
