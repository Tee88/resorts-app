import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, property) => {
  return [...new Set(items.map(item => item[property]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  const types = ["all", ...getUnique(rooms, "type")];

  const typesOptions = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  const capacities = getUnique(rooms, "capacity");
  const capacityOptions = capacities.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        {/* start select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {typesOptions}
          </select>
        </div>
        {/* end select type */}
        {/* start select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">room capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacityOptions}
          </select>
        </div>
        {/* end select capcity */}
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">rom price ${price}</label>

          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
            step="10"
          />
        </div>
        {/* end price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">pets</label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
}
