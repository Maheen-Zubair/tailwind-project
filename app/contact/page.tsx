import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="bg-gray-200 h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-semibold">
          This Is The Section Of Contact-Us
        </h1>
      </div>
      <Footer />
    </div>
  );
}
