import Link from 'next/link';

interface card {
  title: string;
  icon: JSX.Element;
  href: string;
}

const Card: React.FC<card> = ({ title, icon, href }) => {
  const formattedTitle = { __html: title.replace(/<br\s*\/?>/g, '<br/>') } as { __html: string };

  return (

      <Link href={href} className="w-1/3 p-0">
        <div className="flex flex-col items-center justify-center rounded-md border border-gray-300 p-4 text-center transition duration-300 hover:bg-gray-500 hover:text-white">
          {icon}
          <span dangerouslySetInnerHTML={formattedTitle} />
        </div>
      </Link>

  );
};

export default Card;
