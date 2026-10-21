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

        <div className="max-w-7xl mx-auto">
            <p className="text-white font-bold text-2xl">THE LIBRARY</p>
            <p className="text-white">Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                {CardsData.map((cards:IWorkoutCards, ind:number) => {
                return <Cards key={ind} cards={cards}>  </Cards>
                })}
            </div>

        </div>
    );
};

export default WorkoutCards;