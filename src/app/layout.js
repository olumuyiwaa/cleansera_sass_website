import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CleanSera — Software for cleaning businesses",
  description:
    "Scheduling, dispatch, and a branded booking site for cleaning businesses. Your staff, your customers, your brand — run entirely by you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
