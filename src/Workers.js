export default function Workers(){
  const [workers, setWorker] = useState([]);

  useEffect(()=>{
    api.get('worker/workers').then(({data})=> {
      setWorker(data);
    })
    console.log(workers)
    // eslint-disable-next-line
  }, []);

  return(
    <div>
      <h1>Listar</h1>     
      {workers?.map((worker) => (
        <li key={worker.id}>
            {worker.name}
        </li>
      ))}   
    </div>
  )
}