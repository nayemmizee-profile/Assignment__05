import { toast } from "react-toastify";
import type { Technology } from "../types";
import { use, useState } from "react";
// import { ToastContainer } from "react-toastify";

interface ItechCardProps {
  usersPromise: Promise<Technology[]>;
}

const TechCard = ({ usersPromise }: ItechCardProps) => {
  const data = use(usersPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setStack((previousStack) => [...previousStack, technology]);
     toast.success(`${technology.name} Added to Stack`);
  };

  const removeFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id),
    );
  };
  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-4 px-40 pt-10 bg-emerald-50">
        {/* ================= LEFT SIDE ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:col-span-3">
          {data.map((technology) => {
           
            const isAdded = stack.some((item) => item.id === technology.id);

            return (
              <div
                key={technology.id}
                className="rounded-2xl border border-gray-200 bg-[#f5fff5] p-6 shadow-sm"
              >
                
                <div className="flex items-center justify-between">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10"
                  />

                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-500">
                    {technology.badge}
                  </span>
                </div>

              
                <h2 className="mt-6 text-xl font-bold text-gray-900">
                  {technology.name}
                </h2>

               
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {technology.description}
                </p>

               
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs text-slate-600">
                    {technology.category}
                  </span>

                  <span className="text-sm text-slate-500">
                    {technology.difficulty}
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    <span className="text-yellow-400">★</span>{" "}
                    {technology.rating}
                  </span>
                </div>

                
                <button
                  onClick={() => addToStack(technology)}
                  disabled={isAdded}
                  className={`mt-4 w-full rounded-lg py-3 text-sm font-medium text-white transition 
                    ${
                    isAdded
                      ? "cursor-not-allowed bg-gray-400"
                      : "bg-slate-950 hover:bg-slate-800"
            }`}
                >
                  {isAdded ?
                   "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>


   

       <aside className="h-fit rounded-2xl border border-gray-200 bg-[#f5fff5] p-6 shadow-sm lg:col-span-1">

  <h2 className="text-xl font-bold text-gray-900">
    Your Stack
  </h2>

  <p className="mt-2 text-sm text-gray-500">
    {stack.length === 0
      ? "No technologies selected yet."
      : `${stack.length} technologies selected`}
  </p>


  
  {stack.length === 0 && (
    <div className="mt-5 flex h-fit items-center justify-center rounded-xl border border-dashed border-gray-300 py-4 text-sm text-gray-400">
      Your stack is empty.
    </div>
  )}


  
  {stack.length > 0 && (
    <div className="mt-5">

      
      <div className="space-y-3">

        {stack.map((technology) => (

          <div
            key={technology.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
          >

         
            <div className="flex items-center gap-3">

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8"
              />

              <div>

                <h3 className="text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>

              </div>

            </div>


           
            <button
              onClick={() => removeFromStack(technology.id)}
              className="text-lg text-red-50 bg-red-800 rounded-[100px] px-2 hover:text-amber-50-500"
            >
              X
            </button>

          </div>

        ))}

      </div>


     
      <button
        onClick={removeAll}
        className="mt-4 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600"
      >
        Remove All
      </button>

    </div>
  )}

</aside> 




      </section>
    </>
  );
};
export default TechCard;
