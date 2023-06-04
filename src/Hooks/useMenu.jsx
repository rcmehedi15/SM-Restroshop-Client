import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    // const [menu, SetMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             SetMenu(data)
    //             setLoading(false);
    //         });
    // },[])

    const { data: menu =[], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    })


    return [menu, loading, refetch]
}

export default useMenu;