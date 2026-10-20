
import { Card } from "flowbite-react";
import { Spinner } from "flowbite-react";

export function Meal({error, loading, meals}) {
  return (
    <>
    <h1 className="text-2xl font-bold text-white">Latest Menu </h1>
    
    <div className="py-10 px-5 grid grid-cols-3 gap-5 min-h-screen">

    {
        loading && !error && < Spinner aria-label="Extra large spinner example" size="xl" />
    }

    {
        !error && !loading && meals.length > 0 && meals.map(function(me){
            return (
                <Card
                className="max-w-sm w-full"
                imgAlt= {me.strThumb}
                imgSrc= {me.strThumb} >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {me.strIngredient?.length > 100 ? me.strIngredient.slice(0, 50) + "...." : me.strIngredient }
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {me.strDescription}
                </p>
                </Card>
            )
        })
    }

    




    </div>

    </>
  );
}
