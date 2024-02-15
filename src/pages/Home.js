import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function Home() {
    const url = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const rawData = await fetch(url);
            const data = await rawData.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {loading ? (
                <Spinner />
            ) : items.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-gray-600 text-xl">No Items Found</p>
                </div>
            )}
        </div>
    );
}

export default Home;
