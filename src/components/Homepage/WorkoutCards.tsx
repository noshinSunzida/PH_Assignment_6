
const getCards = async () => {
    const response = await fetch(
        'https://api.abcz.workers.dev/api/fitlog'
    );

    const data = await response.json();
    return data;
};

const WorkoutCards = async () => {
    const CardsData = await getCards();

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-white font-bold text-2xl">
                THE LIBRARY
            </p>

            <p className="text-white">
                Twelve lifts covering every major muscle group.
            </p>

            {CardsData.map((cards, ind) => (
                <div className="text-white" key={ind}>
                    {cards.name}
                </div>
            ))}
        </div>
    );
};

export default WorkoutCards;
