import React, { useEffect, useState } from "react";
import Link from "next/link";

function Products(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const products = props.productsData;

  // const products = [
  //   {
  //     _id: "6603a5bcb0b69130c75d4d93",
  //     productName: "Residential Water Pump",
  //     productPrice: 2500,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.",
  //     productImgs: [
  //       "Residential-Water-Pump-1.jpeg",
  //       "Residential-Water-Pump-2.jpeg",
  //     ],
  //     status: "active",
  //     categoryId: "6603ba8137e37f9868ef1a79",
  //   },
  //   {
  //     _id: "6603a5eab0b69130c75d4d94",
  //     productName: "Automatic Water Pump",
  //     productPrice: 3000,
  //     productDesc:
  //       "Water pumps can be used for a variety of purposes from irrigation and firefighting to drinking water, hydroelectricity, and more. Keep reading to learn everything you could ever want to know about water pumps, how they work, the different water pump types, and their applications.",
  //     productImgs: [
  //       "Automatic-Water-Pump-1.jpeg",
  //       "Automatic-Water-Pump-2.jpeg",
  //       "Automatic-Water-Pump-3.jpeg",
  //     ],
  //     status: "active",
  //     categoryId: "6603ba8137e37f9868ef1a79",
  //   },
  //   {
  //     _id: "6603a60cb0b69130c75d4d95",
  //     productName: "Mini Water Pump",
  //     productPrice: 1500,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: [
  //       "Mini-Water-Pump-1.jpeg",
  //       "Mini-Water-Pump-2.jpeg",
  //       "Mini-Water-Pump-3.jpeg",
  //     ],
  //     status: "active",
  //     categoryId: "6603ba8137e37f9868ef1a79",
  //   },
  //   {
  //     _id: "6603a661b0b69130c75d4d96",
  //     productName: "Manual Water Pump",
  //     productPrice: 3000,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: [
  //       "Manual-Water-Pump-1.jpeg",
  //       "Manual-Water-Pump-2.jpeg",
  //       "Manual-Water-Pump-3.jpeg",
  //     ],
  //     status: "active",
  //     categoryId: "6603bc27cc116ebecd4d55dc",
  //   },
  //   {
  //     _id: "6603a680b0b69130c75d4d97",
  //     productName: "Automatic Water Dispenser",
  //     productPrice: 3455,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: [
  //       "Automatic-Water-Dispenser-1.jpeg",
  //       "Automatic-Water-Dispenser-2.jpeg",
  //       "Automatic-Water-Dispenser-3.jpeg",
  //     ],
  //     status: "active",
  //     categoryId: "6603bc26cc116ebecd4d55db",
  //   },
  //   {
  //     _id: "6603bc07cc116ebecd4d55da",
  //     productName: "Cozy Blue Water Pump ",
  //     productPrice: 3000,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: [
  //       "Cozy-Blue-Water-Pump-1.jpeg",
  //       "Cozy-Blue-Water-Pump-2.jpeg",
  //       "Cozy-Blue-Water-Pump-3.jpeg",
  //     ],
  //     categoryId: "6603bc26cc116ebecd4d55db",
  //     status: "active",
  //   },
  //   {
  //     _id: "6603bc5dcc116ebecd4d55dd",
  //     productName: "RiverSoft Water Pump",
  //     productPrice: 3200,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: [
  //       "RiverSoft-Water-Pump-1.jpeg",
  //       "RiverSoft-Water-Pump-2.jpeg",
  //       "RiverSoft-Water-Pump-3.jpeg",
  //     ],
  //     categoryId: "6603bc27cc116ebecd4d55dc",
  //     status: "active",
  //   },
  //   {
  //     _id: "6603eeeb4ca0df9d0613a37d",
  //     productName: "Crompton Water Pump",
  //     productPrice: 3500,
  //     productDesc:
  //       "Water pumps are a type of impulse turbine that works using a spinning wheel to convert potential energy from pressure into kinetic energy. The water is pumped from a lower elevation to a storage area, where it is collected until it is needed. The water is then released from the storage area at a higher elevation, allowing the water to travel to its desired location.\r\n\r\n\r\nThere are a variety of water pump types you can choose to meet your needs. Some water pumps are better for certain tasks than others, so it is important to know what each water pump is used for before making a purchase.\r\n\r\nSubmersible pumps are the most common type of water pump. These pumps are installed below the surface of a body of water, usually an irrigation pond or a water well.\r\nAbove-ground pumps, on the other hand, are installed above the water. These pumps are designed to lift water from below the surface of a body of water, such as a lake or stream. They are usually not as powerful as submersible pumps but can be useful for smaller jobs.\r\nCentrifugal pumps use a rotating impeller to draw water from below the surface of a body of water. These are commonly used in municipal water systems to pump water to homes. They are also often used to pump water from below the surface of a well.",
  //     productImgs: ["Crompton-Water-Pump-1.jpeg", "Crompton-Water-Pump-2.jpeg"],
  //     categoryId: "6603ee8d5f43b265302e7760",
  //     status: "active",
  //   },
  //   {
  //     _id: "660a38df0024f0a5b95f9119",
  //     productName: "ULTIMO II Water Pump ",
  //     productPrice: 2599,
  //     productDesc:
  //       "Drip Proof Adaptor | High suction Capacity | Suitable for wide voltage Application | Easy for Maintenance\r\nRated voltage: 220V | Voltage range: 180V-260V (1PH) | Rated Frequency: 50Hz\r\nMax. head: Up to 21 meters\r\nMax. discharge: Up to 1950 LPH\r\n1 year warranty",
  //     productImgs: [
  //       "ULTIMO-II-Water-Pump-1.jpeg",
  //       "ULTIMO-II-Water-Pump-2.jpeg",
  //       "ULTIMO-II-Water-Pump-3.jpeg",
  //     ],
  //     categoryId: "6603ba8137e37f9868ef1a79",
  //     status: "active",
  //   },
  // ];

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <div className="w3l-grids-block-5">
        {/* grids block 5 */}
        <section id="grids5-block">
          <div className="wrapper">
            <h1 className="text-center ">Products</h1>
            <section className="w3l-products-1">
              <div className="products1">
                <div className="wrapper">
                  <div className="products1-content">
                    {currentProducts.length > 0 ? (
                      currentProducts.map((product) => (
                        <div className="column" key={product._id}>
                          <Link href={`/product/${product._id}`}>
                            <img
                              src={`/images/products/${product.productImgs[0]}`}
                              className="img-responsive"
                              alt={product.productName || ""}
                            />
                          </Link>
                          <h4>
                            <Link href={`/product/${product._id}`}>
                              {product.productName || ""}
                            </Link>
                          </h4>
                          <p>₹ {(product.productPrice || 0).toFixed(2)}</p>
                        </div>
                      ))
                    ) : (
                      <p className="d-flex text-center h1">
                        No products found.
                      </p>
                    )}
                  </div>
                  <br></br>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link href="/products">See More Products</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
