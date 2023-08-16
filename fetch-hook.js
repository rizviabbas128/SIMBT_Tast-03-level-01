const fetchHook = (url) => {
    const  [data , setData] = useState(null);
    useEffect(() =>{
        fetch(url).then((res)=>{
            return res.json();
        }).then((data)=>{
            setData(data)
        })
    },[url])
    return data;
}

export default fetchHook;

// call this func fetchHook("url"); in any data an fetch data