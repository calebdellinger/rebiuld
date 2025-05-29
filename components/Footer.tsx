// components/Footer.tsx
import Link from "next/link";
import pagesData from "../Data/pagesData.json"; // Adjust the path based on your project structure

// Define the Page type for TypeScript
interface Page {
  id: number;
  title?: string; // Optional to handle "title" or "Title"
  Title?: string; // Optional to handle the inconsistency in your JSON
  url: string;
}

const Footer: React.FC = () => {
  // Normalize the data to handle "title" vs "Title" inconsistency
  const normalizedPages: Page[] = pagesData.map((page) => ({
    id: page.id,
    title: page.title || page.Title, // Use "title" if present, fallback to "Title"
    url: page.url,
  }));

  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 text-center">
          Service Areas
        </h3>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 px-2">
          {normalizedPages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.url}
                className="text-sm sm:text-base text-white hover:text-slate-400 transition-colors duration-300"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Rebiuld Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
