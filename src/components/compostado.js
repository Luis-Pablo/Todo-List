import { useState, useEffect } from 'react';
function Contador() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(() => (count + 2))
    }
    //this.setState(state => ({
    //seconds: state.seconds + 1

    const interval = () => setInterval(() => tick(), 1000)
    useEffect(() => {
        interval()

    }, [count])
    //this.interval = setInterval(() => this.tick(), 1000);

    useEffect(() => {
        interval()

    }, [count])
    //clearInterval(this.interval);

    return (
        <div>
            Segundos: {count}
        </div>
    )



}




export default Contador;