import React from 'react'
import Room from './Room'

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item, i) => {
          return <Room key={i} room={item}></Room>
        })}
      </div>
    </section>
  )
}
