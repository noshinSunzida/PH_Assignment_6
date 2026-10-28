import { IWorkoutCards } from "@/types/WorkoutCardsType";
import Cards from "../shared/Cards";


const getCards = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
}
const WorkoutCards = async () => {

    const CardsData = await getCards();
    return (

        <div className="max-w-7xl mx-auto px-6 py-8">
            <p className="text-white font-bold font-oswald text-3xl">THE LIBRARY</p>
            <p className="text-gray-400 mt-1 pb-5 mb-5">Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                {CardsData.map((cards:IWorkoutCards, ind:number) => {
                return <Cards key={ind} cards={cards} />
                })}
            </div>

        </div>
    );
};

export default WorkoutCards;