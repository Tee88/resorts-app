import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from '../components/Loading'

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }

  return (
    <div>
      Hello form romms container
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
    </div>
  );
}

export default withRoomConsumer(RoomContainer)






// If you wish to consume the context without using Higher Order Components:

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from '../components/Loading'

// export default function RoomsContainer() {
//     return (

//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value
//                     if (loading) {
//                         return <Loading />
//                     }

//                     return (
//                         <div>
//                             Hello form romms container
//                             <RoomsFilter rooms={rooms}></RoomsFilter>
//                             <RoomsList rooms={sortedRooms}></RoomsList>
//                         </div>
//                     );

//                 }
//             }
//         </RoomConsumer>
//     )

// }
