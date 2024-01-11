import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";


function Home() {

    const url = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async () => {

        setLoading(true);
        const rawData = await fetch(url);
        const data = await rawData.json();
        console.log(data);
        setItems(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="pb-[20px]">
            {
                loading ?
                    <Spinner /> :
                    items.length > 0 ?
                        (<div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h[80vh] ">
                            {
                                items.map((item) => {
                                    return <Card key={item.id} item={item} />
                                })
                            }
                        </div>) :
                        <div className=" flex justify-center items-center">
                            <p> No Item Found</p>
                        </div>

            }
        </div>
    );
}

export default Home;