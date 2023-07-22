import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.scss";

export const metadata = {
  title: "Mealz",
  description: "Mealz food delivery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
