import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


export default function AllProducts() {
  const [allProductsData, setAllProducts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
        slug,
        model,
        height,
        description,
        mainImage{
        asset->{
            _id,
            url
          }
        },
        layoutImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-12">
      <div className="container mx-auto">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProductsData &&
            allProductsData.map((product, index) => (
              <Link to={"/product/" + product.slug.current} key={product.slug.current}>
                <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden" key={index}>
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={product.mainImage.asset.url} alt="blog" />
                    <div class="p-4 flex flex-row">
                      <div class="flex flex-col w-24">
                        <img class="w-full object-cover object-center" src={product.layoutImage.asset.url} alt="layout" />
                      </div>
                      <div class="flex flex-col p-4">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{product.model}</h1>
                    <p class="leading-relaxed mb-3">{product.description}</p>
                    <div class="flex flex-wrap -m-4 text-center">
                      <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-3xl text-2xl text-gray-900">{product.height}</h2>
                        <p class="leading-relaxed">Height</p>
                      </div>
                      <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-3xl text-2xl text-gray-900">65ft</h2>
                        <p class="leading-relaxed">Capacity</p>
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap pt-4">
                      <a href="#"class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}