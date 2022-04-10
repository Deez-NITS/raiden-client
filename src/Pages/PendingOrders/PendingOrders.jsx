import { Button } from '../../Components';
import './PendingOrders.scss'

const PendingOrders = ()=>{
    const orders = [
        {   
            id:'1122',
            userId:'asas',
            price:'22',
            status:'CONFIRMED'
        },
    ]

    const users = [
        {
            name:'Rajiv Das',

        },
    ]

    const flights = [
        {
            flightNumber:'SX-334',
            source:'144',
            destination:'356'
        },
    ]

    const providers = [
        {
            id:'122',
            airport:'144'
        },
    ]


    return(
        <section className='pendingOrdersPage'>
           <h1 className='logo'><img src="src/Resources/Images/logo.png"/> Radien</h1>
           <div className='orderList'>
                {orders.map((order, index)=>{
                    return (
                        <div className='order'>
                            <img src="src/Resources/Images/person.png"/>
                            <span className='name'>
                                {users[index].name}
                            <Button label='View Details'/>
                            </span>
                            <div className='time'>
                                {flights[index].source===providers[index].airport  && <span>Departing</span>}
                                {flights[index].source===providers[index].airport  && <span>{flights[index]}</span>}
                                {flights[index].destination===providers[index].airport  && <span>Arriving</span>}
                                {flights[index].destination===providers[index].airport  && <span>Arriving</span>}
                            </div>
                        </div>
                    )
                })}
           </div>
        </section>
    );
};

export default PendingOrders;