import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OneProduct() {
  const [productData, setProductData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           model,
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
          },
          altImage{
            asset->{
              _id,
              url
            }
          },
          body,
          height
       }`
      )
      .then((data) => setProductData(data[0])).catch(console.error);
      
  }, [slug]);

 if (!productData) return <div>Preparing for Takeoff...</div>;

  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
        
          <div class="lg:w-full mx-auto flex flex-wrap">
            <div class="lg:w-5/12 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                MODEL
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {productData.model}
              </h1>
              <div class="leading-relaxed mb-4">
                <BlockContent
                  blocks={productData.body}
                  projectId={sanityClient.clientConfig.projectId}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </div>
              <div class="flex flex-row">
                <div class="flex flex-col">
                  <img
                    className="pr-6 w-32"
                    src={urlFor(productData.layoutImage).url()}
                    alt="alt"
                  />
                </div>
                <div class="flex flex-col flex-grow">
                  <div class="flex border-t border-gray-300 py-2">
                    <span class="text-gray-500">Height</span>
                    <span class="ml-auto text-gray-900">
                      {productData.height}
                    </span>
                  </div>
                  <div class="flex border-t border-gray-300 py-2">
                    <span class="text-gray-500">Width</span>
                    <span class="ml-auto text-gray-900">4′9″</span>
                  </div>
                  <div class="flex border-t border-gray-300 py-2">
                    <span class="text-gray-500">Length</span>
                    <span class="ml-auto text-gray-900">17′8″</span>
                  </div>
                  <div class="flex border-t border-gray-300 py-2">
                    <span class="text-gray-500">Cruising Speed</span>
                    <span class="ml-auto text-gray-900">450 – 490 mph</span>
                  </div>
                  <div class="flex border-t border-b mb-6 border-gray-300 py-2">
                    <span class="text-gray-500">Max Hours</span>
                    <span class="ml-auto text-gray-900">2.5 – 3</span>
                  </div>
                <div class="flex-wrap pt-4 text-center">
                <div class="w-full pb-4">
                  <div class="border-2 border-gray-200 px-3 py-4 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      7
                    </h2>
                    <p class="leading-relaxed">Seats</p>
                  </div>
                </div>
                <div class="w-full">
                  <div class="border-2 border-gray-200 px-3 py-4 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                    53ft&sup3;
                    </h2>
                    <p class="leading-relaxed">Cargo</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
              
            </div>
            <div class="lg:w-7/12 w-full lg:pl-6 mb-6 lg:mb-0">
              <img
                className="w-full lg:h-auto h-64 m-4 object-cover object-center rounded"
                src={urlFor(productData.mainImage).url()}
                alt="alt"
              />
              <img
                className="w-full lg:h-auto h-64 m-4 object-cover object-center rounded"
                src={urlFor(productData.altImage).url()}
                alt="alt"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}