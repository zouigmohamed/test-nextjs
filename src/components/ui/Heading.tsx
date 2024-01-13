import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface IPropsHeading {
  title: string;
  arrows: boolean;
}
const Heading = ({ arrows, title }: IPropsHeading) => {
  return (
    <div className="my-4 flex flex-row-reverse justify-between  items-center overflow-hidden container ">
      <div className={`flex gap-2 py-4 ${arrows ? "invisible" : ""}`}>
        <ArrowLeft  className="bg-slate-200 text-3xl rounded-full p-1 cursor-pointer hover:scale-110 duration-700" />
        <ArrowRight className="bg-[#FA8B02] text-3xl rounded-full p-1 cursor-pointer hover:scale-110 duration-700" />
      </div>
      <h2 className="py-4 font-semibold">{title}</h2>
    </div>
  );
};
export default Heading;
